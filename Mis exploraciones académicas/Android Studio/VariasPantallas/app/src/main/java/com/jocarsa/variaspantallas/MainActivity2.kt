package com.jocarsa.variaspantallas

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast

class MainActivity2 : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main2)
        val intent = intent
        // Si vengo de otra pantalla a traves de un intent
        if(intent != null){

            val datosrecibidos = intent.getStringExtra("edad")
            // Compruebo di estos recibiendo datos
            if(datosrecibidos != null){
                Toast.makeText(applicationContext,"Recibo datos",Toast.LENGTH_SHORT).show()
                Toast.makeText(applicationContext,"datos recibidos: "+datosrecibidos,Toast.LENGTH_SHORT).show()

            }

        }

    }
}