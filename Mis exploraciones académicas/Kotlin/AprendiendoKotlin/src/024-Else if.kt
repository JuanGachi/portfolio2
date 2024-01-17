fun main(){
    val edad:Int = 45
    if(edad < 10){
        println("Eres un niño")
    }else if(edad >=10 && edad < 30){
        println("Eres un joven")

    }else if (edad >=30 && edad > 70){
        println("Ya no eres tan joven")
    }else{
        println("Eres un senior")
    }
}