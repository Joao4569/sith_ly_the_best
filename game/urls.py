from django.urls import path
from .views import game_view, homepage
from . import views

app_name = 'game'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('game/', game_view, name='game'),
]
