from django.db import models
from facturacion.models import Cliente

class Vehiculo(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    bastidor = models.CharField(max_length=50)
    matricula = models.CharField(max_length=20)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    año = models.PositiveIntegerField()
    fecha_mantenimiento = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return f"{self.marca} {self.modelo} - {self.matricula}"
