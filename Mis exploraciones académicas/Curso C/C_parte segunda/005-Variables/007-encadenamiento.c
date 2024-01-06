#include <stdio.h>
#include <string.h>

int main(int argc,char *argv[]){
    
    int edad = 45;
        char nombre[] = "Juan Jose";
        char apellidos[] = "Galan Chilet";
    
        strcat(nombre,apellidos);
        printf("Mi nombre completo es: %s",nombre);
              

    return 0;
}