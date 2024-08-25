from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio_almacen, name='inicio_almacen'),
    path('productos/', views.lista_productos, name='lista_productos'),
    path('productos/agregar/', views.agregar_producto, name='agregar_producto'),
    path('entrada_stock/agregar/', views.agregar_entrada_stock, name='agregar_entrada_stock'),
    path('salida_stock/agregar/', views.agregar_salida_stock, name='agregar_salida_stock'),
]
