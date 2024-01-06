import time

contador = 0
numero = 0.00000004234

def bucle(contador,numero):
    contador += 1
    if contador % 100 == 0:
        print("ok la cosa va bien")
    numero = numero*1.2
    time.sleep(0.0001)
    bucle(contador,numero)

time.sleep(1)
bucle(contador,numero)
