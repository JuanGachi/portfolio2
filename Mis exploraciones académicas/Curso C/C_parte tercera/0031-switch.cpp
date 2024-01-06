#include <iostream>
using namespace std;


int  main(){
    int diadelasemana = 1;
    
    switch(diadelasemana){
        case 1:
        cout << "hoy es el peor dia de la semana\n";
        break;
        case 2:
         cout << "hoy es el segundo peor dia de la semana\n";
        break;
        case 3:
         cout << "ya estamos a mitad de semana\n";
        break;
        case 4:
        cout << "hoy es juernes\n";
        break;
        case 5:
         cout << "ya se acaba la semana\n";
        break;
        case 6:
         cout << "hoy es el mejor dia de la semana\n";
        break;
        case 7:
         cout << "parece mentira que mañana ya sea lunes\n";
        break;
        case 8:
         cout << "Lo que has introducido no es un dia de la semana\n";
        break;
    }
    return 0;
}