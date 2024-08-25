from django.db import models
from almacen.models import Producto

class Recurso(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(blank=True, null=True)

class Montaje(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField(blank=True, null=True)
    fecha_inicio = models.DateTimeField()
    fecha_fin = models.DateTimeField(blank=True, null=True)
    productos = models.ManyToManyField(Producto, through='ProductoMontaje')
    recursos = models.ManyToManyField(Recurso)

class ProductoMontaje(models.Model):
    montaje = models.ForeignKey(Montaje, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField()
