import pandas as pd
import matplotlib.pyplot as plt

# Carga los datos utilizando la coma (',') como delimitador
datos_eventos = pd.read_csv('data-exportt.csv', sep=',')

# Imprime los nombres de las columnas para verificar
print("Nombres de columnas en el DataFrame:", datos_eventos.columns)

# Análisis básico
print("Estadísticas básicas:")
print(datos_eventos.describe())

# Análisis por 'Nombre del evento'
print("\nTotal de usuarios y Total de ingresos por Nombre del evento:")
usuarios_por_evento = datos_eventos.groupby('Nombre del evento')['Total de usuarios'].sum()
ingresos_por_evento = datos_eventos.groupby('Nombre del evento')['Total de ingresos'].sum()
print(usuarios_por_evento)
print(ingresos_por_evento)

# Gráfico de 'Total de usuarios' por 'Nombre del evento'
try:
    plt.figure(figsize=(12, 6))
    usuarios_por_evento.plot(kind='bar')
    plt.title('Total de Usuarios por Nombre del Evento')
    plt.xlabel('Nombre del Evento')
    plt.ylabel('Total de Usuarios')
    plt.show()
except NameError:
    print("No se pudo generar el gráfico debido a un error.")

# Gráfico de 'Total de ingresos' por 'Nombre del evento'
try:
    plt.figure(figsize=(12, 6))
    ingresos_por_evento.plot(kind='bar', color='green')
    plt.title('Total de Ingresos por Nombre del Evento')
    plt.xlabel('Nombre del Evento')
    plt.ylabel('Total de Ingresos')
    plt.show()
except NameError:
    print("No se pudo generar el gráfico debido a un error.")
