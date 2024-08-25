from django.db import models

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)  # Asegúrate de que este campo no tiene `null=True`
    email = models.EmailField()

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(default="Descripción no proporcionada")  # Valor predeterminado proporcionado
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()

class Factura(models.Model):
    cliente = models.ForeignKey('Cliente', on_delete=models.CASCADE)
    fecha = models.DateField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)  # Establecer valor predeterminado a 0
    # Otros campos que puedas tener

class ProductoFactura(models.Model):
    factura = models.ForeignKey(Factura, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
def __str__(self):
        return f'Factura {self.id} - {self.cliente.nombre}'