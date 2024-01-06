#include <iostream>
using namespace std;


int  main(){
    string diadelasemana = "tomate";
    if(diadelasemana == "lunes"){
        cout << "hoy es el peor dia de la semana\n"; 
    }else if(diadelasemana == "martes"){
         cout << "hoy es el segundo peor dia de la semana\n";
    }else if(diadelasemana == "miercoles"){
         cout << "ya estamos a mitad de semana\n";
    }else if(diadelasemana == "jueves"){
         cout << "hoy es juernes\n";
    }else if(diadelasemana == "viernes"){
         cout << "ya se acaba la semana\n";
    }else if(diadelasemana == "sabado"){
         cout << "hoy es el mejor dia de la semana\n";
    }else if(diadelasemana == "domingo"){
         cout << "parece mentira que mañana ya sea lunes\n";
    }else {
         cout << "Lo que has introducido no es un dia de la semana\n";
    }
    return 0;
}