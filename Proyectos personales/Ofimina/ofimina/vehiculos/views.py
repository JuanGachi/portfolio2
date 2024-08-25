from django.shortcuts import render, get_object_or_404, redirect
from .models import Vehiculo
from .forms import VehiculoForm

def inicio_vehiculos(request):
    return render(request, 'vehiculos/inicio_vehiculos.html')


def lista_vehiculos(request):
    vehiculos = Vehiculo.objects.all()
    return render(request, 'vehiculos/lista_vehiculos.html', {'vehiculos': vehiculos})

def agregar_vehiculo(request):
    if request.method == 'POST':
        form = VehiculoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_vehiculos')
    else:
        form = VehiculoForm()
    return render(request, 'vehiculos/agregar_vehiculo.html', {'form': form})
