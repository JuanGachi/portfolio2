from django.shortcuts import render, redirect
from .models import Producto, EntradaStock, SalidaStock
from .forms import ProductoForm, EntradaStockForm, SalidaStockForm

# Asegúrate de que esta vista esté definida
def inicio_almacen(request):
    return render(request, 'almacen/inicio_almacen.html')

def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'almacen/lista_productos.html', {'productos': productos})

def agregar_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = ProductoForm()
    return render(request, 'almacen/agregar_producto.html', {'form': form})

def agregar_entrada_stock(request):
    if request.method == 'POST':
        form = EntradaStockForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = EntradaStockForm()
    return render(request, 'almacen/agregar_entrada_stock.html', {'form': form})

def agregar_salida_stock(request):
    if request.method == 'POST':
        form = SalidaStockForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_productos')
    else:
        form = SalidaStockForm()
    return render(request, 'almacen/agregar_salida_stock.html', {'form': form})
