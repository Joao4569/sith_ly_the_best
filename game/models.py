from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    """
    Model to represent a game session.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True)
    moves = models.IntegerField(default=0)
    game_mode = models.CharField(max_length=10)


class Score(models.Model):
    class Mode(models.TextChoices):
        EASY = 'easy', 'Easy'
        MEDIUM = 'medium', 'Medium'
        HARD = 'hard', 'Hard'

    PAIRS_BY_MODE = {
        Mode.EASY: 6,
        Mode.MEDIUM: 10,
        Mode.HARD: 15,
    }

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time_spent = models.PositiveIntegerField(help_text='Completion time in milliseconds')
    moves = models.PositiveIntegerField(help_text='Number of two-card turns')
    game_mode = models.CharField(
        choices=Mode.choices,
        default=Mode.EASY,
        max_length=10,
    )
    points = models.PositiveIntegerField(db_index=True, default=0)

    class Meta:
        ordering = ['-points', 'time_spent', 'moves']

    def __str__(self):
        return (
            f'{self.user.username} - {self.moves} moves in '
            f'{self.duration_seconds:.2f} seconds'
        )

    @property
    def duration_seconds(self):
        return self.time_spent / 1000

    @classmethod
    def calculate_points(cls, time_spent, moves, game_mode):
        """Return a normalized score where faster, efficient games rank higher."""
        pairs = cls.PAIRS_BY_MODE[game_mode]
        time_seconds = max(time_spent / 1000, 0.001)
        penalty = time_seconds + (moves * 2)
        return max(1, round((pairs * 10000) / penalty))

        
