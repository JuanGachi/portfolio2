/*int edad = 44;
if (edad<44){
    //Ejecuto este bloque  en el caso de que la expresion se a verdadera
    Console.WriteLine("Eres joven");
}else{
    //Ejecuto este bloque  en el caso de que la expresion se a falsa
    Console.WriteLine("No eres tan joven");

}*/

int edad = 44;
if (edad < 44)
{
    if (edad < 20)
    {
        Console.WriteLine("Eres muy joven");
    }
    else
    {

        Console.WriteLine("Eres joven");
    }
}
else
{
    if (edad < 60)
    {
        Console.WriteLine("Ya no eres tan joven");

    }else {
     Console.WriteLine("Definitivamente ya no eres joven");

    }
}
