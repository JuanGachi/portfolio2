#include <stdio.h>

int main(int argc,char *argv[]){
    int numero1 = 4;
   int numero2 = 3;
    int numero3 = 2;
    int numero4 = 6;
    
    float comparacion = numero1 < numero2 || numero3 < numero4;
    printf("El resultado de la operacion es: %i \n",comparacion);
    return 0;
}