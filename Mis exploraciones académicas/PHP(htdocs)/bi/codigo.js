var peticion = " SELECT "
var columnas = " * "
var desde = " FROM "
var tabla = ""
var condiciones = " "
var limite = "LIMIT 100";
var ordenar = " ";
$(document).ready(function(){
            $( "#formulario" ).accordion({
                heightStyle: "content"
            });
            $("#seleccionatabla").load("php/cargatablas.php");
            resultadostabla()
            $("#seleccionatabla").change(function(){
                tabla = $(this).val()
                resultadostabla()
                $("#seleccionacampos").load("php/cargacampos.php?tabla="+tabla);
                $("#seleccionaordenar").load("php/cargaordenar.php?tabla="+tabla);
            })
                $("#seleccionaordenar").change(function(){
                seleccionado = []
                    $('input[name="seleccionaordenar"]').each(function(){
                    if ($(this).is(":checked")){
                        seleccionado.push($(this).val());
                    }
                })
                ordenar = " ORDER BY ";
                for(var i = 0;i<seleccionado.length;i++){
                        ordenar += seleccionado[i]+",";
                    }
                ordenar = ordenar.slice(0, -1);
                ordenar += " "
                resultadostabla()
                })
                $("#seleccionacampos").change(function(){
                seleccionado = []
                $('input[name="seleccionacampos"]').each(function(){
                    if ($(this).is(":checked")){
                        seleccionado.push($(this).val());
                    }
                })
                console.table(seleccionado)
                columnas = "";
                for(var i = 0;i<seleccionado.length;i++){
                    columnas += seleccionado[i]+" ";  
                    if($("input[alias='"+seleccionado[i]+"']").val() != ""){
                        columnas += "AS '"+$("input[alias='"+seleccionado[i]+"']").val()+"' "
                    }
                        columnas += ","
                }
                columnas = columnas.slice(0, -1);
                resultadostabla()
                // Introduzco las condiciones
                $("#seleccionacondiciones").html("")
                for(var i = 0;i<seleccionado.length;i++){
                    $("#seleccionacondiciones").append('<tr class="condicion"><td>'+seleccionado[i]+'= </td><td> <input type="text" name="" class="nuevacondicion" campo="'+seleccionado[i]+'"></td></tr>');
                }
                // Introduzco los alias
                $("#seleccionaalias").html("")
                for(var i = 0;i<seleccionado.length;i++){
                    $("#seleccionaalias").append('<tr class="alias"><td>'+seleccionado[i]+'=</td><td> <input type="text" name="" class="nuevoalias" alias="'+seleccionado[i]+'" campo="'+seleccionado[i]+'"></td></tr>');
            }
            })
            //$(".nuevacondicion").change(function(){
                $(document).on("keydown",".nuevacondicion",function(){
                condiciones = " WHERE "
                $(".nuevacondicion").each(function(){
                if($(this).val() != ""){
                    condiciones += $(this).attr('campo')+" LIKE '%"+$(this).val()+"%' &"
                }                          
                })
                condiciones = condiciones.slice(0, -1)
                resultadostabla()
            })
            $(document).on("keydown",".nuevoalias",function(){
                 seleccionado = []
            $('input[name="seleccionacampos"]').each(function(){
                if ($(this).is(":checked")){
                seleccionado.push($(this).val());
                }
            })
             //introuduzco el alias
                columnas = "";
                for(var i = 0;i<seleccionado.length;i++){
                    columnas += seleccionado[i]+" ";  
                    if($("input[alias='"+seleccionado[i]+"']").val() != ""){
                        columnas += "AS '"+$("input[alias='"+seleccionado[i]+"']").val()+"' "
                    }
                        columnas += " "
                }
                columnas = columnas.slice(0, -1);
                resultadostabla()
        
            })
            $("#limite").change(function(){
                limite = " LIMIT "+$(this).val()+" ";
                resultadostabla()
            })
        })

function resultadostabla(){
    sentencia = peticion+columnas+desde+tabla+condiciones+ordenar+limite
    $("#sql").text(sentencia)
    $("#resultadostabla").load("php/resultadostabla.php?sql="+encodeURI(sentencia))
}