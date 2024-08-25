from django.shortcuts import render, redirect
from .models import Montaje, Recurso
from .forms import MontajeForm, RecursoForm

def inicio_taller(request):
    return render(request, 'taller/inicio_taller.html')

def lista_montajes(request):
    montajes = Montaje.objects.all()
    return render(request, 'taller/lista_montajes.html', {'montajes': montajes})

def agregar_montaje(request):
    if request.method == 'POST':
        form = MontajeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_montajes')
    else:
        form = MontajeForm()
    return render(request, 'taller/agregar_montaje.html', {'form': form})

def lista_recursos(request):
    recursos = Recurso.objects.all()
    return render(request, 'taller/lista_recursos.html', {'recursos': recursos})

def agregar_recurso(request):
    if request.method == 'POST':
        form = RecursoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_recursos')
    else:
        form = RecursoForm()
    return render(request, 'taller/agregar_recurso.html', {'form': form})
