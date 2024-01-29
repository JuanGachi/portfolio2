import cv2
import numpy as np

def detectar_imperfecciones(imagen):
    # Preprocesamiento para resaltar texturas
    imagen_gray = cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)
    imagen_blur = cv2.GaussianBlur(imagen_gray, (5, 5), 0)

    # Detección de bordes para resaltar texturas
    sobelx = cv2.Sobel(imagen_blur, cv2.CV_64F, 1, 0, ksize=5)
    sobely = cv2.Sobel(imagen_blur, cv2.CV_64F, 0, 1, ksize=5)
    magnitud = cv2.magnitude(sobelx, sobely)

    # Umbralización para identificar áreas con imperfecciones
    _, thresh = cv2.threshold(magnitud, 50, 255, cv2.THRESH_BINARY)
    return thresh

def clasificar_imperfeccion(contorno, imagen):
    # Puedes ajustar estos valores según tus necesidades
    umbral_area_grano = 100  # Área mínima para considerar una imperfección como grano
    umbral_circularidad = 0.75  # Umbral de circularidad para considerar una imperfección como peca

    area = cv2.contourArea(contorno)
    perimetro = cv2.arcLength(contorno, True)
    circularidad = 4 * np.pi * area / (perimetro * perimetro) if perimetro > 0 else 0

    # Clasificación simple basada en área y circularidad
    if area > umbral_area_grano and circularidad > umbral_circularidad:
        return 'p'  # Peca
    else:
        return 'g'  # Grano

def main():
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    cap = cv2.VideoCapture(0)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
            
            # Analizar la región del rostro para detectar imperfecciones
            face_region = frame[y:y+h, x:x+w]
            imperfecciones = detectar_imperfecciones(face_region)

            # Encontrar contornos de las imperfecciones
            contornos, _ = cv2.findContours(imperfecciones.astype(np.uint8), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

            # Dibujar rectángulos alrededor de las imperfecciones y clasificar
            for contorno in contornos:
                tipo_imperfeccion = clasificar_imperfeccion(contorno, face_region)
                x_imp, y_imp, w_imp, h_imp = cv2.boundingRect(contorno)

                if tipo_imperfeccion == 'g':
                    color = (0, 0, 255)  # Rojo para granos
                else:
                    color = (255, 0, 0)  # Azul para pecas

                cv2.rectangle(face_region, (x_imp, y_imp), (x_imp + w_imp, y_imp + h_imp), color, 2)
                cv2.putText(face_region, tipo_imperfeccion.upper(), (x_imp, y_imp - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        cv2.imshow('Frame de la Camara', frame)

        if cv2.waitKey(1) == 27:
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()

