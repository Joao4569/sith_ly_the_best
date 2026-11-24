import json
from functools import lru_cache

from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseBadRequest
from django.shortcuts import redirect, render
from django.templatetags.static import static
from django.views.decorators.http import require_POST

from .forms import ScoreSubmissionForm
from .models import Score


@lru_cache(maxsize=1)
def get_card_data():
    data_path = settings.BASE_DIR / 'game' / 'static' / 'data' / 'cardData.json'
    with data_path.open(encoding='utf-8') as card_file:
        cards = json.load(card_file)

    return [
        {
            **card,
            'image': static(f"images/{card['image']}"),
        }
        for card in cards
    ]


@login_required()
def game_view(request):
    return render(request, 'game/game.html', {'card_data': get_card_data()})


def leaderboard(request):
    top_scores = Score.objects.select_related('user').all()[:10]
    return render(request, 'game/leaderboard.html', {'top_scores': top_scores})


def homepage(request):
    return render(request, 'game/homepage.html')


@login_required
@require_POST
def save_score(request):
    form = ScoreSubmissionForm({
        'time_spent': request.POST.get('timeSpent'),
        'moves': request.POST.get('moves'),
        'game_mode': request.POST.get('gameMode'),
    })
    if not form.is_valid():
        return HttpResponseBadRequest(form.errors.as_json())

    result = form.cleaned_data
    Score.objects.create(
        user=request.user,
        time_spent=result['time_spent'],
        moves=result['moves'],
        game_mode=result['game_mode'],
        points=Score.calculate_points(
            result['time_spent'],
            result['moves'],
            result['game_mode'],
        ),
    )

    return redirect('leaderboard')
