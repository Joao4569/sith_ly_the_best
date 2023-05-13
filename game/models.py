from django.db import models
from django.contrib.auth.models import User


class Score(models.Model):
    score = models.IntegerField()
