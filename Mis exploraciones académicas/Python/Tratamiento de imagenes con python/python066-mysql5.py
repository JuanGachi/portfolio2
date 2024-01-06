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
sizes = [0]
explode = (0, 0.1, 0, 0)  # only "explode" the 2nd slice (i.e. 'Hogs')
longaniza = "hola"
for i in miresultado:
        ##    print("tengo un resultado que es:")
        ##    print(str(i[0])+" - "+str(i[1]))
        sizes.append(i[0])
        longaniza += ","+str(i[1])
labels = "hola","46086 Carrícola","46124 Fontanars dels Alforins","46151 Llocnou d'En Fenollet","46119 Énova","46165 Massanassa","46903 San Antonio de Benagéber","46077 Buñol","46207 Rafelbunyo","46237 Tavernes Blanques","46172 Montserrat","46180 Novelé","46244 Torrent","46109 Cheste","46035 Almussafes","46204 Puig de Santa Maria"
##labels = eval(longaniza)
##labels = 'Frogs', 'Hogs', 'Dogs', 'Logs'
##sizes = [15, 30, 45, 10]
print("vamos a comprobar")
print(labels)
print(sizes)
print("quiero ver el tipo de dato")
print(type(labels))

fig1, ax1 = plt.subplots()
ax1.pie(sizes, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.

plt.show()
   

