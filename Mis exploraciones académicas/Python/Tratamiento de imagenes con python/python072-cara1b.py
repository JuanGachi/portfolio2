from PIL import Image
import math

imagehorizontal = Image.open("caras/horizontal.png")
pixeleshorizontal = imagehorizontal.load()


imagen = Image.open("caras/caraestandard.jpg")
pixeles = imagen.load()


altura = imagen.size[1]
anchura = imagen.size[0]

##for x in range(0, anchura):
##    for y in range(0,altura):
##        for anchura in range(0,8):
##            for altura in range(0.8):

# Voy a asumir el pixel que esta en 0
for x in range(0,7):
    for y in range(0,7):
        print(str(pixeles[x,y][0]-pixeleshorizontal[x,y][0]))
imagen.save("caras/caraestandardguardado1.jpg")
