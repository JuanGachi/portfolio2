import mysql.connector as my
import matplotlib.pyplot as plt
import numpy as np

# Parte de la base de datos
mibd = my.connect(
    host="localhost",
    port="3306",
    user="josevicente",
    password="josevicente",
    database="cursopython"
)

micursor = mibd.cursor()
micursor.execute("SELECT poblacion, cantidad FROM `tabla-2903` ORDER BY cantidad DESC LIMIT 15;")
miresultado = micursor.fetchall()

# Obtener los nombres de las ciudades y la cantidad de habitantes
ciudades = [i[0] for i in miresultado]
habitantes = [i[1] for i in miresultado]

plt.rcdefaults()
fig, ax = plt.subplots()

y_pos = np.arange(len(ciudades))

ax.barh(y_pos, habitantes, align='center')
ax.set_yticks(y_pos)
ax.set_yticklabels(ciudades)
ax.invert_yaxis()  # labels read top-to-bottom
ax.set_xlabel('Habitantes')
ax.set_title('Ciudades más pobladas')

plt.show()

