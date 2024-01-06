import mysql.connector as my
import matplotlib.pyplot as plt

# Conexión a la base de datos
mibd = my.connect(
    host = "localhost",
    port = "3306",
    user = "josevicente",
    password = "josevicente",
    database = "cursopython"
)
micursor = mibd.cursor()

micursor.execute("SELECT poblacion, cantidad FROM `tabla-2903` ORDER BY cantidad DESC LIMIT 15;")
miresultado = micursor.fetchall()

# Lista de tamaños de población
sizes = []
for i in miresultado:
    sizes.append(i[1])

# Lista de etiquetas de población
labels = ["46086 Carrícola", "46124 Fontanars dels Alforins", "46151 Llocnou d'En Fenollet", 
          "46119 Énova", "46165 Massanassa", "46903 San Antonio de Benagéber", "46077 Buñol", 
          "46207 Rafelbunyo", "46237 Tavernes Blanques", "46172 Montserrat", "46180 Novelé", 
          "46244 Torrent", "46109 Cheste", "46035 Almussafes", "46204 Puig de Santa Maria"]

# Gráfico de torta
explode = (0, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0) # para destacar el 2º valor
fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', shadow=True, startangle=90)
ax1.axis('equal') # asegurar una relación de aspecto igual para que el gráfico sea circular

plt.show()


