fun main(){
    var gato = Gato()
    println(gato.mamo())
}
open class Mamifero{
    fun mamo():String{
        return "soy un mamifero y mamo al nacer"
    }
}
class Gato: Mamifero() {
    fun maulla():String{
        return "Soy un gato y maullo"
    }
}