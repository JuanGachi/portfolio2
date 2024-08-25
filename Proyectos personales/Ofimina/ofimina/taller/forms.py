from django import forms
from .models import Montaje, Recurso

class MontajeForm(forms.ModelForm):
    class Meta:
        model = Montaje
        fields = ['nombre', 'descripcion', 'fecha_inicio', 'fecha_fin']

class RecursoForm(forms.ModelForm):
    class Meta:
        model = Recurso
        fields = ['nombre', 'descripcion']
