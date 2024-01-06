/*
Programa agenda
v1
por Jose Vicente Carratala
*/

#include <stdio.h>
#define pi 3.1415
#define NOMBREPROGRAMA "Programa agenda"
#define VERSION "1.3"
#define AUTOR "Jose Vicente Carratala"


int main(int argc,char *argv[]){
    // Mensaje de Bienvenida
    printf("%s v%s \n", NOMBREPROGRAMA, VERSION);
    printf("por %s\n",AUTOR);
    printf("\t 1- Listado de registros \n");
    printf("\t 2- Introducir un registro \n");
    printf("\t 3- Eliminar un registro \n");
    printf("\t 4- Buscar un registro \n");
    printf("\t 5- Actualizar un registro \n");
    printf("Tu opcion: \n");
    char opcion = getchar();
    printf("La opcion que has seleccionado es: %c \n",opcion);
    // Vamos a decidir que hacemos en cada parte del programa
    switch(opcion){
        case '1':
            printf("A continuacion ote ofrezco un listado de registros \n");
            break;
        case '2':
            printf("Ahora vamos a introducir un registro \n");
            break;
        case '3':
            printf("Vamos a eliminar un registro \n");
            break;
        case '4':
            printf("Buscamos entre los registros \n");
            break;
        case '5':
            printf("Actualizaremos los datos del programa \n");
            break;
        default:
            printf("La accion que has seleccionado no es valida \n");
            
    }
    printf("Finalizando la ejecucion del programa... \n");
    printf("\n");
    return 0;
}