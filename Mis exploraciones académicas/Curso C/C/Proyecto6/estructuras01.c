#include <stdio.h>

int main(int argc, char *argv[]){
    int edad = 42;
    if(edad == 42){
        // Esto se ejecuta en el caso verdadero
        printf("es cierta la afirmación \n");     
    }else{
        // Esto se ejecuta en el caso falso
        printf("La afirmacion no es cierta \n");    
    }
    return 0;
    
}