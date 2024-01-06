#include <stdio.h>


int main(int argc,char *argv[]){
    char* agenda[10][5];
    
    agenda[0][0] = "Jose Vicente";
    agenda[0][1] = "123456";
    agenda[0][2] = "La calle de Jose Vicente";
    agenda[0][3] = "josevicente@email.com";
    agenda[0][4] = "Garcia";
    
    agenda[1][0] = "Paco";
    agenda[1][1] = "987654";
    agenda[1][2] = "La calle de Juan";
    agenda[1][3] = "paco@email.com";
    agenda[1][4] = "Gomez";
    
    agenda[2][0] = "Juan José";
    agenda[2][1] = "654987";
    agenda[2][2] = "La calle de Jaime";
    agenda[2][3] = "juanjose@email.com";
    agenda[2][4] = "Santiago";
  
    agenda[3][0] = "Jose Vicente";
    agenda[3][1] = "123456";
    agenda[3][2] = "La calle de Jose Vicente";
    agenda[3][3] = "josevicente@email.com";
    agenda[3][4] = "Lopez";
    
    agenda[4][0] = "Paco";
    agenda[4][1] = "987654";
    agenda[4][2] = "La calle de Juan";
    agenda[4][3] = "paco@email.com";
    agenda[4][4] = "Marquez";
    
    agenda[5][0] = "Juan José";
    agenda[5][1] = "654987";
    agenda[5][2] = "La calle de Jaime";
    agenda[5][3] = "juanjose@email.com";
    agenda[5][3] = "Galan";
    
    
    for(int registro = 0;registro <=5;registro = registro + 1){
        for(int campo = 0;campo<=4;campo = campo + 1){
            printf("-%s \n",agenda[registro][campo + 1]);
                
        }
        printf("\n");  
    }
    printf("\n");
    return 0;
  
    
}