import matplotlib.pyplot as plt
import mysql.connector as my

## Parte de la base de datos
mibd = my.connect(
    host="localhost",
    port="3306",
    user="josevicente",
    password="josevicente",
    database="cursopython"
)
micursor = mibd.cursor()
micursor.execute("SELECT FROM_UNIXTIME(`utc`, '%d.%m.%Y') as ndate, COUNT(id) as post_count FROM logs GROUP BY ndate LIMIT 1000")
miresultado = micursor.fetchall()
lista = []
for i in miresultado:
    lista.append(i[1])
    print(str(i[1]) + " - " + str(i[0]))

    
plt.plot(lista)
plt.ylabel('visitas')
plt.show()

