from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Score


def homepage(request):
    # just returning a simple response for now
    # return HttpResponse("This is the home page")
    return render(request, 'game/homepage.html')


def game_view(request):
    score = 10
    context = {
        'score': score
    }
    return render(request, 'game/game.html', context)

def rules(request):

    return render(request, 'game/rules.html')
