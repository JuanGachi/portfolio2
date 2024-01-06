#include <iostream>
using namespace std;


int  main(){
    float operando1 = 4;
    float operando2 = 3;

    float suma = operando1 + operando2;
    cout << "La suma entre los dos operandos es: " << suma << " \n";
    
    float resta = operando1 - operando2;
    cout << "La resta entre los dos operandos es: " << resta << " \n";
    
    float multiplicacion = operando1 * operando2;
    cout << "La multiplicacion entre los dos operandos es: " << multiplicacion << " \n";
    
    float division = operando1 / operando2;
    cout << "La division entre los dos operandos es: " << division << " \n";
    
    int restoentero = operando1 % operando2;
    cout << "El resto entero de la division entre los dos operandos es: " << restoentero << " \n";
    
    return 0;
}