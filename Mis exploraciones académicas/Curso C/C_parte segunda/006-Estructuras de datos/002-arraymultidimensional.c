#include <stdio.h>
#include <string.h>

int main(int argc,char *argv[]){
    
 char * agenda[10][4];
    agenda[0][0] = "Juan Jose";
    agenda[0][1] = "Galan Chilet";          
    agenda[0][2] = "12345";
    agenda[0][3] = "info@juanjosegalan.com";
    
    agenda[1][0] = "Juan ";
    agenda[1][1] = "Lopez Garcia";
    agenda[1][2] = "654654";
    agenda[1][3] = "juan@org.com";
    
    printf("El correo del segundo registro de la agenda es: %s \n", agenda[1][3]);
    return 0;
}