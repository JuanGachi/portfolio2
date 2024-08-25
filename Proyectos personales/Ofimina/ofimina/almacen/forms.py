from django import forms
from .models import Producto, EntradaStock, SalidaStock

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['nombre', 'descripcion', 'precio', 'stock']

class EntradaStockForm(forms.ModelForm):
    class Meta:
        model = EntradaStock
        fields = ['producto', 'cantidad']
        # Excluir 'fecha' porque es un campo no editable

class SalidaStockForm(forms.ModelForm):
    class Meta:
        model = SalidaStock
        fields = ['producto', 'cantidad']
        # Excluir 'fecha' porque es un campo no editable
