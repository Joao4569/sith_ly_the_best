from django.db import models
from django.contrib.auth.models import User

# Create your models here.


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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time_spent = models.IntegerField()
    moves = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.moves} moves in {self.time_spent} seconds"

    def totalScore(self):
        score = ((1 / self.time_spent) * 10 + (1 / self.moves) * 1) * 10000
        return round(score)

        
