import mysql.connector as my
import matplotlib.pyplot as plt

## Parte de la base de datos
mibd = my.connect(
        host = "localhost",
        port = "3306",
        user = "josevicente",
        password = "josevicente",
        database = "cursopython"
        )
##print(mibd)

micursor = mibd.cursor()

micursor.execute("SELECT poblacion, cantidad FROM `tabla-2903` ORDER BY cantidad DESC LIMIT 15;")
miresultado = micursor.fetchall()

# Pie chart, where the slices will be ordered and plotted counter-clockwise:
sizes = []
labels = []

for i in miresultado:
    labels.append(i[0])
    sizes.append(i[1])

assert len(labels) == len(sizes), "La lista de etiquetas no tiene la misma longitud que la lista de tamaños"

fig1, ax1 = plt.subplots()
ax1.pie(sizes, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()
