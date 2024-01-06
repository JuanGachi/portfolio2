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
    char opcion;
    return 0;
}