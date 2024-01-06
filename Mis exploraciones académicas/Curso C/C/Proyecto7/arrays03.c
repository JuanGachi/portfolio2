#include <stdio.h>


int main(int argc,char *argv[]){
    char* agenda[10][4];
    
    agenda[0][0] = "Jose Vicente";
    agenda[0][1] = "123456";
    agenda[0][2] = "La calle de Jose Vicente";
    agenda[0][3] = "josevicente@email.com";
    
    agenda[1][0] = "Paco";
    agenda[1][1] = "987654";
    agenda[1][2] = "La calle de Juan";
    agenda[1][3] = "paco@email.com";
    
    agenda[2][0] = "Juan José";
    agenda[2][1] = "654987";
    agenda[2][2] = "La calle de Jaime";
    agenda[2][3] = "juanjose@email.com";
    
    printf("La calle es %s \n",agenda[0][2]);
    
    printf("\n");
    return 0;
    
}