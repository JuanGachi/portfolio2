import mysql.connector as my
try:
    mibd = my.connect(
        host = "localhost",
        port = "3306",
        user = "josevicente",
        password = "josevicente"
        )
    print(mibd)
except:
    print("ha ocurrido un error al conectarme a la base de datos")
