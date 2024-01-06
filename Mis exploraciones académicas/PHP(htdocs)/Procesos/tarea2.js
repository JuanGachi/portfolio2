onmessage = function(){
    // Calculo 1
        console.log("vamos con el calculo")
        var numero = 0.00000423342;
        var iteraciones = 10000000;
        for(var i = 0;i<iteraciones;i++){
            numero = numero*1.00000000005435;
        }
postMessage(numero);
}