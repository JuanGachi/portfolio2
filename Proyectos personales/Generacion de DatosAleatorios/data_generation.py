import random
# Función para generar datos aleatorios
def generar_datos_aleatorios(cantidad, campos):
    nombres = [
    "Ana", "Juan", "Maria", "Pedro", "Laura", "José",
    "Carmen", "Luis", "Isabel", "Carlos", "Sara", "Manuel",
    "Elena", "David", "Marta", "Jorge", "Rosa", "Alberto",
    
    ]
    apellidos = [
    "García", "Fernández", "López", "Martínez", "González", "Pérez",
    "Rodríguez", "Sánchez", "Ramírez", "Torres", "Díaz", "Morales",
    "Molina", "Ortega", "Rubio", "Navarro", "Dominguez", "Vázquez",
    
    ]
    direcciones = [
    "Calle A, 10", "Calle B, 20", "Calle C, 30", "Calle D, 40", "Calle E, 50", "Calle F, 60",
    "Avenida Primera, 100", "Avenida Segunda, 200", "Avenida Tercera, 300",
    "Plaza Norte, 1", "Plaza Sur, 2", "Camino Viejo, 11",
    ]

    datos = []
    for i in range(cantidad):
        registro = {}
        if 'id' in campos:
            registro['id'] = i + 1
        if 'nombre' in campos:
            registro['nombre'] = random.choice(nombres)
        if 'apellido' in campos:
            registro['apellido'] = random.choice(apellidos)
        if 'email' in campos:
            registro['email'] = f"{registro.get('nombre', '').lower()}.{registro.get('apellido', '').lower()}@ejemplo.com"
        if 'direccion' in campos:
            registro['direccion'] = random.choice(direcciones)
        
        datos.append(registro)
    
    return datos