from django.urls import path
from .views import *
from . import views


urlpatterns = [
    # Path to game Homepage
    path('', views.homepage, name='homepage'),
    
    path('game/', views.game_view, name='game'),
    path('save_score/', views.save_score, name='save_score'),
    path('leaderboard/', views.leaderboard, name='leaderboard'),
]
