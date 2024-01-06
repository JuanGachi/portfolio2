#include <stdio.h>

int main(int argc, char *argv[]){
    int edad = 52;
    if(edad < 20){
        // Esto se ejecuta en el caso verdadero
        if(edad < 10){
            // Esto se ejecuta en el caso verdadero
            printf("Eres un niño \n");     
        }else{
        // Esto se ejecuta en el caso falso
            printf("Eres un adolescente \n");    
    }
    }else{
        //esto se ejecuta en caso de falso
        if(edad < 30){
            // Esto se ejecuta en el caso verdadero
        }else{
            // Esto se ejecuta en el caso falso
            printf("Ya no eres tan joven");
            
        }
    }
    return 0;
    
}