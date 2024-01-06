function saluda(nombre,edad,email){
    cadena = "";
    cadena += "Me llamo "+nombre+".\n";
    cadena += "Tengo "+edad+" años\n"
    cadena += "Mi correo es "+email+"\n"
    return cadena;
}


console.log(saluda("Jose Vicente",45,"info@jocarsa.com"));
console.log(saluda("Juan",46,"info@juan.com"));
console.log(saluda("Jose",26,"info@jose.com"));
