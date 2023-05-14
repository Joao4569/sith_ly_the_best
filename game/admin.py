from django.contrib import admin
from .models import *


@admin.register(Score)
class Score(admin.ModelAdmin):
    list_display = ('user', 'time_spent', 'moves')
    search_fields = ['name']