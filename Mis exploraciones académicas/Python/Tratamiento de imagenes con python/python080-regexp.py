import re

mitexto = "Amadeo"
busqueda = re.search("^Se",mitexto)
print(busqueda)
if busqueda:
    print("He encontrado un resultado")
else:
    print("no he encontrado un resultado")
