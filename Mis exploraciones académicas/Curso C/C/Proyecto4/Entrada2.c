#include <stdio.h>

int main(int argc,char *argv[]){
    printf("Introduce un nombre: \n");
    char nombre[100];
    scanf("%s",nombre);
    printf("El nombre que has introducido  es: %s \n",nombre);
    return 0;
}