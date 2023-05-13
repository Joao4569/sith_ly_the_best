from django.urls import path
from .views import game_view, homepage, rules
from . import views


urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('game/', views.game_view, name='game'),
    path('rules/', views.rules, name='rules'),
]
