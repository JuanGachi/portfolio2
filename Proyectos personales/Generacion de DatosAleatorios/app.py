from flask import Flask, render_template, request, send_file, Response
import io
from data_generation import generar_datos_aleatorios
from exports_functions import exportar_json, exportar_csv, exportar_docx, exportar_txt

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        campos_seleccionados = []
        for campo in ['nombre', 'apellido', 'email', 'direccion', 'id']:
            seleccion = request.form.get(campo)
            if seleccion != 'null':
                campos_seleccionados.append(campo)
        
        formato_seleccionado = request.form['formato']
        cantidad_seleccionada = int(request.form.get('cantidad', 10))  # 10 es el valor predeterminado

        datos_generados = generar_datos_aleatorios(cantidad_seleccionada, campos_seleccionados)
        
        buffer = io.BytesIO()

        # Llama a la función de exportación apropiada
        if formato_seleccionado == 'JSON':
            exportar_json(datos_generados, buffer)
        elif formato_seleccionado == 'CSV':
            exportar_csv(datos_generados, buffer)
        elif formato_seleccionado == 'DOCX':
            exportar_docx(datos_generados, buffer)
        elif formato_seleccionado == 'TXT':
            exportar_txt(datos_generados, buffer)

        buffer.seek(0)

        return Response(buffer.getvalue(), mimetype='application/octet-stream',
                        headers={"Content-Disposition": f"attachment;filename=datos.{formato_seleccionado.lower()}"})
    
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
