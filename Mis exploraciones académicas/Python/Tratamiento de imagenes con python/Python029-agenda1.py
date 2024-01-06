##Programa agenda por Juan José Galán

agenda = [["nombre","telefono","email"]]

agenda.append(["nombre2","telefono2","email2"])


def miAgenda():
    print("Introduce el nuevo nombre en la agenda")
    nombre = input()
    print("Introduce el numero de telefono")
    telefono = input()
    print("Introduce el correo")
    correo = input()
    # antes de hacer nada mas, lo metemos en la lista, y sacamos la lista
    agenda.append([nombre,telefono,correo])
    print(agenda)
    #ejecucion recursiva
    miAgenda()
miAgenda()
