from PIL import Image
import math

image = Image.open("caras/caraestandard.jpg")
pixeles = image.load()
print(image.size)

print(pixeles[0,0])

altura = image.size[1]
anchura = image.size[0]

for x in range(0,anchura):
    for y in range(0,altura):
        rojo = pixeles[x,y][0]
        verde = pixeles[x,y][1]
        azul = pixeles[x,y][2]
        color = math.floor((rojo+verde+azul)/3)
        rojo = color
        verde = color
        azul = color

        pixeles[x,y] = (rojo,verde,azul)

image.save("caras/caraestandardguardado.jpg")

