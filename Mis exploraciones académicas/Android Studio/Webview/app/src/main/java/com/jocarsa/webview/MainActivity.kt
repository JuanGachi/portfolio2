package com.jocarsa.webview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {

    private lateinit var vista : WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        vista = findViewById(R.id.mivistaweb)

        val ajustes = vista.settings
        ajustes.javaScriptEnabled = true

        vista.webViewClient = WebViewClient()

        vista.loadUrl("file:///android_asset/index.html")
    }
}