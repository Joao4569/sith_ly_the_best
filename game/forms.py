from django import forms

from .models import Score


class ScoreSubmissionForm(forms.Form):
    time_spent = forms.IntegerField(min_value=1, max_value=3_600_000)
    moves = forms.IntegerField(min_value=1, max_value=10_000)
    game_mode = forms.ChoiceField(choices=Score.Mode.choices)

    def clean(self):
        cleaned_data = super().clean()
        game_mode = cleaned_data.get('game_mode')
        moves = cleaned_data.get('moves')

        if game_mode and moves:
            minimum_moves = Score.PAIRS_BY_MODE[game_mode]
            if moves < minimum_moves:
                self.add_error(
                    'moves',
                    f'{game_mode.title()} mode requires at least {minimum_moves} moves.',
                )

        return cleaned_data
