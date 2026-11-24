from django.contrib.auth import get_user_model
from django.test import TestCase, override_settings
from django.urls import reverse

from .models import Score
from .views import get_card_data


TEST_STORAGES = {
    'default': {
        'BACKEND': 'django.core.files.storage.FileSystemStorage',
    },
    'staticfiles': {
        'BACKEND': 'django.contrib.staticfiles.storage.StaticFilesStorage',
    },
}


class ScoreModelTests(TestCase):
    def test_points_reward_faster_and_more_efficient_games(self):
        fast_score = Score.calculate_points(30_000, 8, Score.Mode.EASY)
        slow_score = Score.calculate_points(60_000, 12, Score.Mode.EASY)

        self.assertGreater(fast_score, slow_score)

    def test_points_normalize_for_the_number_of_pairs(self):
        easy_score = Score.calculate_points(30_000, 8, Score.Mode.EASY)
        hard_score = Score.calculate_points(30_000, 8, Score.Mode.HARD)

        self.assertGreater(hard_score, easy_score)


@override_settings(STORAGES=TEST_STORAGES)
class GameViewTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(
            username='luke',
            password='may-the-force-be-with-you',
        )

    def setUp(self):
        get_card_data.cache_clear()

    def test_game_requires_login(self):
        response = self.client.get(reverse('game'))

        self.assertRedirects(response, f"{reverse('account_login')}?next={reverse('game')}")

    def test_game_renders_all_local_card_data_for_authenticated_user(self):
        self.client.force_login(self.user)

        response = self.client.get(reverse('game'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.context['card_data']), 30)
        self.assertContains(response, '/static/images/maul.jpg')
        self.assertContains(response, 'data-mode="hard"')

    def test_valid_score_is_calculated_on_server_and_saved(self):
        self.client.force_login(self.user)

        response = self.client.post(reverse('save_score'), {
            'timeSpent': 45_000,
            'moves': 12,
            'gameMode': Score.Mode.EASY,
            'score': 999_999_999,
        })

        self.assertRedirects(response, reverse('leaderboard'))
        score = Score.objects.get()
        self.assertEqual(score.user, self.user)
        self.assertEqual(score.game_mode, Score.Mode.EASY)
        self.assertEqual(
            score.points,
            Score.calculate_points(45_000, 12, Score.Mode.EASY),
        )
        self.assertNotEqual(score.points, 999_999_999)

    def test_invalid_score_is_rejected(self):
        self.client.force_login(self.user)

        response = self.client.post(reverse('save_score'), {
            'timeSpent': 'not-a-number',
            'moves': 1,
            'gameMode': 'impossible',
        })

        self.assertEqual(response.status_code, 400)
        self.assertFalse(Score.objects.exists())

    def test_anonymous_score_submission_requires_login(self):
        response = self.client.post(reverse('save_score'), {
            'timeSpent': 45_000,
            'moves': 12,
            'gameMode': Score.Mode.EASY,
        })

        self.assertEqual(response.status_code, 302)
        self.assertFalse(Score.objects.exists())

    def test_leaderboard_orders_by_points(self):
        other_user = get_user_model().objects.create_user(
            username='leia',
            password='help-me-obi-wan',
        )
        Score.objects.create(
            user=self.user,
            time_spent=60_000,
            moves=15,
            game_mode=Score.Mode.EASY,
            points=500,
        )
        Score.objects.create(
            user=other_user,
            time_spent=30_000,
            moves=8,
            game_mode=Score.Mode.EASY,
            points=1200,
        )

        response = self.client.get(reverse('leaderboard'))

        scores = list(response.context['top_scores'])
        self.assertEqual(scores[0].user, other_user)
        self.assertEqual(scores[1].user, self.user)
