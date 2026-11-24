from django.contrib import admin

from .models import Score


@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
    list_display = ('user', 'game_mode', 'points', 'time_spent', 'moves')
    list_filter = ('game_mode',)
    ordering = ('-points',)
    search_fields = ('user__username',)
