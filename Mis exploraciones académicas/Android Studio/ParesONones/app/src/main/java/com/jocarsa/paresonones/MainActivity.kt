package com.jocarsa.paresonones

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.TextView
import kotlin.random.Random
class MainActivity : AppCompatActivity() {

    private lateinit var radioGroup: RadioGroup
    private lateinit var lanzarBoton: Button
    private lateinit var resultadoLinea1: TextView
    private lateinit var resultadoLinea2: TextView
    private lateinit var numeroelegido: EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        radioGroup = findViewById(R.id.radioGroup)
        lanzarBoton = findViewById(R.id.botonlanzar)
        resultadoLinea1 = findViewById(R.id.resultadolinea1)
        resultadoLinea2 = findViewById(R.id.resultadolinea2)
        numeroelegido = findViewById(R.id.minumero)
        lanzarBoton.setOnClickListener {
            clickbotonlanzar()
        }
    }
    private fun clickbotonlanzar(){
        val seleccionado = radioGroup.checkedRadioButtonId
        if (seleccionado != -1){
            val radioseleccionado = findViewById<RadioButton>(seleccionado)
            val valorradioseleccionado = radioseleccionado.text.toString()
            val numeroseleccionado = numeroelegido.text.toString()
            val numerodelamaquina = Random.nextInt(10)
            resultadoLinea1.text = "Numero de la maquina: $numerodelamaquina"

            val total = numeroseleccionado.toInt() + numerodelamaquina.toInt()
            resultadoLinea2.text = "Suma total: $total"
            if(total%2 == 0 && valorradioseleccionado == "pares"){
                resultadoLinea2.text = "El jugador gana"
            }else{
                resultadoLinea2.text = "La maquina gana"
            }

        }
    }
}