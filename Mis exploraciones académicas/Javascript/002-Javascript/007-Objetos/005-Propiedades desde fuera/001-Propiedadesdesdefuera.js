class Persona{
    constructor(){
        this.edad = 0
        this.nombre = "";
    }
    saluda(){
        console.log("Hola, me llamo "+this.nombre+" y tengo "+this.edad)
    }
}

var persona1 = new Persona();
persona1.edad = 34;
persona1.nombre = "Juan Jose";
console.log(persona1);
persona1.saluda();