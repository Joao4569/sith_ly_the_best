from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def game_view(request):
    return render(request, 'game/game.html')


def homepage(request):
    # just returning a simple response for now
    # return HttpResponse("This is the home page")
    return render(request, 'game/homepage.html')


def save_score(request):
    if request.method == 'POST':
        time_spent = request.POST.get('timeSpent')
        moves = request.POST.get('moves')
        user = request.user

        score = Score.objects.create(
            user=user, time_spent=time_spent, moves=moves)
        score.save()

        return redirect('game')  # Redirect to the game view
    else:
        return HttpResponse("Error, incorrect request method", status=405)
