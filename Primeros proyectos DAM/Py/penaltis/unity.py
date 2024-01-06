import pygame
import random

# Inicializar pygame
pygame.init()

# Definir tamaño de la pantalla
screen = pygame.display.set_mode((800, 600))

# Definir título de la ventana
pygame.display.set_caption("Pinball Game")

# Variables para controlar la velocidad de la bola
ball_speed_x = 3
ball_speed_y = 3

# Variables para controlar la posición de la bola
ball_x = 50
ball_y = 50

# Variables para controlar la posición de los palos
paddle1_x = 20
paddle1_y = 250

# Variables para controlar el puntaje
score1 = 0
score2 = 0

# Bucle de juego
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEMOTION:
            paddle2_y = event.pos[1]

    # Actualizar posición de la bola
    ball_x += ball_speed_x
    ball_y += ball_speed_y

    # Verificar si la bola ha golpeado los bordes de la pantalla
    if ball_y > 580 or ball_y < 20:
        ball_speed_y = -ball_speed_y
    if ball_x < 20:
        ball_x = 400
        ball_y = 300
        score2 += 1
        ball_speed_x = random.uniform(2, 4)
        ball_speed_y = random.uniform(2, 4)
    if ball_x > 780:
        ball_x = 400
        ball_y = 300
        score1 += 1
        ball_speed_x = random.uniform(-4, -2)
        ball_speed_y = random.uniform(-4, -2)

    # Verificar si la bola ha golpeado los palos
    if ball_x < 40 and ball_y > paddle1_y and ball_y < paddle1_y + 80:
        ball_speed_x = -ball_speed_x
    if ball_x > 760 and ball_y > paddle2_y and ball_y < paddle2_y + 80:
        ball_speed_x = -ball_speed_x

    # Limitar la posición de los palos dentro de la pantalla
    if paddle1_y > 500:
        paddle1_y = 500
    if paddle1_y < 0:
        paddle1_y = 0
    if paddle2_y > 500:
        paddle2_y = 500
    if paddle2_y < 0:
        paddle2_y = 0

        # Dibujar los elementos en la pantalla
    screen.fill((0, 0, 0))
    pygame.draw.rect(screen, (255, 0, 0), (paddle1_x, paddle1_y, 20, 80))
    pygame.draw.rect(screen, (0, 0, 255), (paddle2_x, paddle2_y, 20, 80))

    pygame.draw.circle(screen, (255, 255, 255), (int(ball_x), int(ball_y)), 20)

    # Mostrar el puntaje en la pantalla
    font = pygame.font.Font(None, 30)
    text = font.render("Score 1: " + str(score1), 1, (255, 255, 255))
    screen.blit(text, (20, 20))
    text = font.render("Score 2: " + str(score2), 1, (255, 255, 255))
    screen.blit(text, (650, 20))

    # Actualizar la pantalla
    pygame.display.update()

# Finalizar pygame
pygame.quit()

