import mysql.connector as my
try:
    mibd = my.connect(
        host = "localhost",
        port = "3306",
        user = "josevicente",
        password = "josevicente",
        database = "cursopython"
        )
    ##print(mibd)

    micursor = mibd.cursor()

    micursor.execute("INSERT INTO personas VALUES (NULL,'pepito','12345','jose@correo.com')")
    mibd.commit()
   
except:
    print("ha ocurrido algun error")
