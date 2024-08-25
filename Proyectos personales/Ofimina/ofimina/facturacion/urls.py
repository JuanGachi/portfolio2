from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio_facturacion, name='inicio_facturacion'),
    path('clientes/', views.lista_clientes, name='lista_clientes'),
    path('clientes/agregar/', views.agregar_cliente, name='agregar_cliente'),
    path('facturas/', views.lista_facturas, name='lista_facturas'),
    path('facturas/agregar/', views.agregar_factura, name='agregar_factura'),
]
