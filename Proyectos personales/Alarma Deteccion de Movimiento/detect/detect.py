import cv2
import numpy as np
import sqlite3
import datetime
import os

# Crear o abrir la base de datos SQLite
conn = sqlite3.connect('movements.db')
cursor = conn.cursor()

# Crear una tabla si no existe
cursor.execute('''
CREATE TABLE IF NOT EXISTS movements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME,
    area INT,
    center_x INT,
    center_y INT
)
''')
conn.commit()

# Crear directorio para guardar imágenes de detección de movimiento
output_directory = 'captured_images'
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Iniciar la captura de video
cap = cv2.VideoCapture(0)

# Leer dos marcos iniciales
ret, frame1 = cap.read()
ret, frame2 = cap.read()

# Umbral para la suma total del área de movimiento para activar la alarma
TOTAL_AREA_THRESHOLD = 10000  # Ajusta este valor según sea necesario

# Variable para rastrear si la ventana de alerta está abierta o no
alert_window_open = False

# Calidad de compresión JPEG (0-100, 0 significa la peor calidad)
JPEG_QUALITY = 70  # Ajusta este valor según sea necesario

def trigger_alarm(total_area):
    global alert_window_open
    # Esta función se activa cuando se detecta un movimiento significativo
    print(f"¡Alarma! Movimiento significativo detectado. Área total: {total_area}")
    
    if not alert_window_open:
        # Mostrar una ventana emergente con un mensaje
        cv2.namedWindow("Alerta de Movimiento", cv2.WINDOW_NORMAL)
        alert_window_open = True

    # Capturar y guardar la imagen del movimiento en formato JPEG
    timestamp_str = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    image_filename = os.path.join(output_directory, f"movement_{timestamp_str}.jpg")
    cv2.imwrite(image_filename, frame1, [int(cv2.IMWRITE_JPEG_QUALITY), JPEG_QUALITY])
    
    # Mostrar la imagen de captura en una nueva ventana
    cv2.imshow(f"Captura {timestamp_str}", frame1)

try:
    while cap.isOpened():
        total_area = 0
        # Diferencia absoluta entre los marcos
        diff = cv2.absdiff(frame1, frame2)

        # Convertir a escala de grises
        gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)

        # Suavizar para reducir el ruido
        blur = cv2.GaussianBlur(gray, (5,5), 0)

        # Umbralizar para obtener los contornos
        _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)

        # Dilatar la imagen umbralizada para llenar los huecos
        dilated = cv2.dilate(thresh, None, iterations=3)

        # Encontrar contornos
        contours, _ = cv2.findContours(dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        for contour in contours:
            area = cv2.contourArea(contour)
            total_area += area

            (x, y, w, h) = cv2.boundingRect(contour)
            cv2.rectangle(frame1, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.putText(frame1, f'Area: {area}', (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

            # Insertar datos en la base de datos
            cursor.execute('INSERT INTO movements (timestamp, area, center_x, center_y) VALUES (?, ?, ?, ?)', (datetime.datetime.now(), area, x + w // 2, y + h // 2))
            conn.commit()

        if total_area > TOTAL_AREA_THRESHOLD:
            trigger_alarm(total_area)

        # Mostrar el resultado
        cv2.imshow("feed", frame1)

        # Leer el próximo marco
        frame1 = frame2
        ret, frame2 = cap.read()

        # Romper el bucle si se presiona ESC
        if cv2.waitKey(40) == 27:
            break

except Exception as e:
    print("Ocurrió un error:", e)

# Liberar la cámara al salir
cap.release()

# Cerrar la ventana OpenCV
cv2.destroyAllWindows()



