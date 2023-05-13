from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def game_view(request):
    # just returning a simple response for now
    # return HttpResponse("This is the game page")
    return render(request, 'game/game.html')


def homepage(request):
    # just returning a simple response for now
    # return HttpResponse("This is the home page")
    return render(request, 'game/homepage.html')
