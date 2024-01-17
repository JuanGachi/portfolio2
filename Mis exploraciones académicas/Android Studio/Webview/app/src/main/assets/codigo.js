window.onload =function(){
    document.getElementById("empezar").onclick = function(){
        let tiradajugador = document.getElementsByName("jugador");

        let seleccionado = null;

        for(let radio of tiradajugador){
            if(radio.checked){
                seleccionado = radio.value
                break;
            }
        }
        if(seleccionado != null){
            console.log(seleccionado)
        }
        let aleatorio = Math.floor(Math.random()*3)

        switch(aleatorio){
            case 0:tiradamaquina = "piedra";break;
            case 1:tiradamaquina = "papel";break;
            case 2:tiradamaquina = "tijera";break;
        }
        document.getElementById("tiradamaquina").innerHTML = "Maquina tira: "+tiradamaquina;

        if(seleccionado == "piedra" && tiradamaquina == "piedra"){
            document.getElementById("resultado").innerHTML = "Empate";
        }else if(seleccionado == "piedra" && tiradamaquina == "papel"){
            document.getElementById("resultado").innerHTML = "Maquina gana";
        }else if(seleccionado == "piedra" && tiradamaquina == "Tijera"){
            document.getElementById("resultado").innerHTML = "Usuario gana";
        }else if(seleccionado == "papel" && tiradamaquina == "piedra"){
                 document.getElementById("resultado").innerHTML = "Usuario gana";
             }else if(seleccionado == "papel" && tiradamaquina == "papel"){
                 document.getElementById("resultado").innerHTML = "Empate";
             }else if(seleccionado == "papel" && tiradamaquina == "Tijera"){
                 document.getElementById("resultado").innerHTML = "Maquina gana";
             }else if(seleccionado == "tijera" && tiradamaquina == "piedra"){
                 document.getElementById("resultado").innerHTML = "Maquina gana";
             }else if(seleccionado == "tijera" && tiradamaquina == "papel"){
                 document.getElementById("resultado").innerHTML = "Usuario gana";
             }else if(seleccionado == "tijera" && tiradamaquina == "Tijera"){
                 document.getElementById("resultado").innerHTML = "Empate";

                }
                }
                }
