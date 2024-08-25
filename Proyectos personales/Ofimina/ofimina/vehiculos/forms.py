from django import forms
from .models import Vehiculo

class VehiculoForm(forms.ModelForm):
    class Meta:
        model = Vehiculo
        fields = ['cliente', 'bastidor', 'matricula', 'marca', 'modelo', 'año', 'fecha_mantenimiento']
