fun main(){
    val nombre:String = "Jose Vicente"
    val nombre2:String = "Jose Vicente"
    val solo_nombre:String = "Vicente"
    val apellidos:String = "Carratala Sanchis"
    println(nombre.length)
    println(nombre.uppercase())
    println(nombre.lowercase())
    println(nombre.compareTo(nombre2))
    println(nombre.indexOf(solo_nombre))
    println(nombre+" "+apellidos)
    println(nombre.plus(apellidos))
    println("Mi nombre es: $nombre $apellidos")
}