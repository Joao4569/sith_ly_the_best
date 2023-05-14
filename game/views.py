from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import Game, Score


def game_view(request):
    return render(request, 'game/game.html')


def leaderboard(request):
    scores = Score.objects.all()
    context = {
        'Score': scores
    }
    paginate_by = 10
    return render(request, 'game/leaderboard.html', context)


def homepage(request):
    # just returning a simple response for now
    # return HttpResponse("This is the home page")
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
