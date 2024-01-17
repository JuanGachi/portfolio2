fun main(){
    val diadelasemana:Int = 3
    val resultado = when(diadelasemana){
        1 -> "Hoy es el peor dia de la semana"
        2 -> "Hoy es el segundo dia de la semana"
        3 -> "Hoy estamos a mitad de semana"
        4 -> "Ya casi es viernes"
        5 -> "Por fin es viernes"
        6 -> "Hoy es el mejor dia de la semana"
        7 -> "Y mañana ya es lunes"
        else -> "No se que has escrito"
    }
    println(resultado)
}