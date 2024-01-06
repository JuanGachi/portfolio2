string[] ciudades = new string[10];
ciudades[0] = "Valencia";
ciudades[1] = "Madrid";
ciudades[2] = "Barcelona";
ciudades[3] = "Malaga";
ciudades[4] = "Sevilla";
ciudades[5] = "Caceres";
ciudades[6] = "Alicante";
ciudades[7] = "Castellon";
ciudades[8] = "Bilbao";

foreach(string ciudad in ciudades)
{
    Console.WriteLine(ciudad);
}

Array.Sort(ciudades);
Console.WriteLine("-------------------------------");
foreach(string ciudad in ciudades)
{
    Console.WriteLine(ciudad);
}