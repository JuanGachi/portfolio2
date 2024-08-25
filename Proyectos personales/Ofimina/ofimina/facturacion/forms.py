from django import forms
from .models import Cliente, Factura, ProductoFactura

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nombre', 'direccion', 'telefono', 'email']

class FacturaForm(forms.ModelForm):
    class Meta:
        model = Factura
        fields = ['cliente', 'total']  # Excluir 'fecha'

class ProductoFacturaForm(forms.ModelForm):
    class Meta:
        model = ProductoFactura
        fields = ['factura', 'producto', 'cantidad', 'subtotal']
