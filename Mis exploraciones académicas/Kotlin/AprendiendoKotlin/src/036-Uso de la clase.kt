fun main(){
    val persona = Persona2()
    persona.nombre = "Jose Vicente"
    persona.apellidos = "Carratala Sanchis"
    persona.edad = 45

    val persona2 = Persona2()
    persona2.nombre = "Juan"
    persona.apellidos = "Lopez Gomez"
    persona.edad = 46

    println(persona.nombre)
    println(persona2.nombre)
}
class Persona2{
    var nombre :String = ""
    var apellidos:String = ""
    var edad:Int = 0
}