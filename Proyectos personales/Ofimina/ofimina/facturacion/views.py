from django.shortcuts import render, redirect
from .models import Cliente, Factura, Producto, ProductoFactura
from .forms import ClienteForm, FacturaForm, ProductoFacturaForm

def inicio_facturacion(request):
    return render(request, 'facturacion/inicio_facturacion.html')

def lista_clientes(request):
    clientes = Cliente.objects.all()
    return render(request, 'facturacion/lista_clientes.html', {'clientes': clientes})

def agregar_cliente(request):
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_clientes')
    else:
        form = ClienteForm()
    return render(request, 'facturacion/agregar_cliente.html', {'form': form})

def lista_facturas(request):
    facturas = Factura.objects.all()
    return render(request, 'facturacion/lista_facturas.html', {'facturas': facturas})

def agregar_factura(request):
    if request.method == 'POST':
        form = FacturaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('lista_facturas')
    else:
        form = FacturaForm()
    return render(request, 'facturacion/agregar_factura.html', {'form': form})
