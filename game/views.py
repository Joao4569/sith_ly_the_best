from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.views import View
from .models import Game, Score
from django.db.models import F, ExpressionWrapper, FloatField
from django.contrib.auth.decorators import login_required


@login_required()
def game_view(request):
    return render(request, 'game/game.html')


def leaderboard(request):
    top_scores = Score.objects.annotate(
        total_score=ExpressionWrapper(F('moves') / (F('time_spent') * 10000), output_field=FloatField())
    ).order_by('-total_score')[:10]
    return render(request, 'game/leaderboard.html', {'top_scores': top_scores})


def homepage(View):
    # just returning a simple response for now
    # return HttpResponse("This is the home page")
    def get(self, request):
        return render(request, 'game/homepage.html')


def save_score(request):
    if request.method == 'POST':
        time_spent = request.POST.get('timeSpent')
        moves = request.POST.get('moves')
        user = request.user if request.user.is_authenticated else None

        score = Score.objects.create(user=user, time_spent=time_spent, moves=moves)
        score.save()

        return redirect('game')
    else:
        return HttpResponse("Error, incorrect request method", status=405)
