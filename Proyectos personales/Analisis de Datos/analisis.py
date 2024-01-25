import pandas as pd
import matplotlib.pyplot as plt

# Carga los datos utilizando la coma (',') como delimitador
datos_trafico = pd.read_csv('data-export.csv', sep=',')

# Imprime los nombres de las columnas para verificar
print("Nombres de columnas en el DataFrame:", datos_trafico.columns)

# Análisis básico
print("Estadísticas básicas:")
print(datos_trafico.describe())

# Análisis por país
print("\nUsuarios y Sesiones por País:")
usuarios_pais = datos_trafico.groupby('Pais')['Usuarios'].sum()
sesiones_pais = datos_trafico.groupby('Pais')['Sesiones con interaccion'].sum()
print(usuarios_pais)
print(sesiones_pais)

# Gráfico de usuarios por país
try:
    plt.figure(figsize=(12, 6))
    usuarios_pais.plot(kind='bar')
    plt.title('Usuarios por País')
    plt.xlabel('País')
    plt.ylabel('Número de Usuarios')
    plt.show()


except NameError:
    print("No se pudo generar el gráfico de páginas más visitadas debido a un error anterior.")

# Añade aquí cualquier análisis adicional que necesites...
