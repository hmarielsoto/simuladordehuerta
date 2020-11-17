
// nombre json

document.getElementById("nombreboton").addEventListener("click", guardarnombre);
function guardarnombre() {
    var usuario = textonombre.value;
    var mostrar = document.createElement("h3");
    var mostrartexto = document.createTextNode('Hola ' + usuario + ' te damos la bienvenida a nuestro simulador');
    mostrar.appendChild(mostrartexto);
    document.getElementById("textohuerta").appendChild(mostrar);
    localStorage.setItem("User", usuario);

}

//huerta soñada verano

document.getElementById("seleccionfinal").addEventListener("click", armadofinal);

function armadofinal(){
    var seleccion = [];
    $("input:checkbox[name=verdurasverano]:checked").each(function(){
        seleccion.push($(this).val());});
        if(seleccion.length < 3 ){
            var consejo = ". Con dos o tres macetas podés arrancar tu huerta";
        } else if (seleccion.length >= 3 && seleccion.length < 6){
            var consejo = ". Recomendamos usar dos canteros y dos macetas";
        } else if (seleccion.length > 6){
            var consejo = ". Elegiste muchas opciones, necesitas asesoramiento personalizado. Contactanos!";
        } else{
            var consejo = ". Error desconocido, no podemos precisar lo que necesitás según tus verduras elegidas"
        }
    var huertanodo = document.createElement("h3");
    var huertatexto = document.createTextNode('Tu huerta soñada tendría ' + seleccion + consejo);
    huertanodo.appendChild(huertatexto);
    document.getElementById("huertasoñada").appendChild(huertanodo);
}

//huerta soñada otoño

document.getElementById("seleccionfinal2").addEventListener("click", armadofinal2);

function armadofinal2() {
    var seleccion2 = [];
    $("input:checkbox[name=verdurasotoño]:checked").each(function(){
        seleccion2.push($(this).val());});
    if(seleccion2.length < 3 ){
        var consejo2 = ". Con dos o tres macetas podés arrancar tu huerta";
    } else if (seleccion2.length >= 3 && seleccion2.length < 6){
        var consejo2 = ". Recomendamos usar dos canteros y dos macetas";
    } else if (seleccion2.length > 6){
        var consejo2 = ". Elegiste muchas opciones, necesitas asesoramiento personalizado. Contactanos!";
    } else{
        var consejo2 = ". Error desconocido, no podemos precisar lo que necesitás según tus verduras elegidas"
    }
    var huertanodo2 = document.createElement("h3");
    var huertatexto2 = document.createTextNode('Tu huerta soñada tendría ' + seleccion2 + consejo2);
    huertanodo2.appendChild(huertatexto2);
    document.getElementById("huertasoñada2").appendChild(huertanodo2);
}


//buscarviveros

function Locales(nombre, dirección, localidad){
    this.nombre = nombre;
    this.dirección = dirección;
    this.localidad = localidad;
}

var zonaSur1 = new Locales("El vivero de helga", "Pasco 1160", "Temperley");
var zonaSur2 = new Locales("Vivero Rootsverde", "Cochabamba 238", "Banfield");
var zonaNorte1 = new Locales("Vivero Marisel", "Viamonte 26", "Vicente López");
var zonaNorte2 = new Locales("Vivero Galante", "Sarmiento 670", "Tigre");
var zonaOeste1 = new Locales("Vivero Las Acacias", "Av. Belgrano 124", "Ramos Mejía");
var zonaOeste2 = new Locales("Vivero El bosque", "Zuviria 4532", "Castelar");
var zonaCABA1 = new Locales("Vivero Mario", "Bolívar 150", "Flores");
var zonaCABA2 = new Locales("Vivero Bambú", "Av Frías 1236", "Chacarita");


$("#viverosboton2").click(zonas2);

function zonas2 (){
var barrios3 = $("input[name='zonas2']:checked").val();
if ( barrios3 == "zona sur" ){
 var barriossur3 = document.createElement("h4");
 var barriossur4 = document.createTextNode(zonaSur1.nombre + " - " + zonaSur1.dirección + " - " + zonaSur1.localidad + "//" + zonaSur2.nombre + " - " + zonaSur2.dirección + " - " + zonaSur2.localidad);
 barriossur3.appendChild(barriossur4);
 $("#detallesotoño2").append(barriossur3);
}
else if ( barrios3 == "zona norte" ){
    var barriosnorte3 = document.createElement("h4");
    var barriosnorte4 = document.createTextNode(zonaNorte1.nombre + " - " + zonaNorte1.dirección + " - " + zonaNorte1.localidad + "//" + zonaNorte2.nombre + " - " + zonaNorte2.dirección + " - " + zonaNorte2.localidad);
    barriosnorte3.appendChild(barriosnorte4);
    $("#detallesotoño2").append(barriosnorte3);
}

else if ( barrios3 == "zona oeste" ) {
    var barriosoeste3 = document.createElement("h4");
    var barriosoeste4 = document.createTextNode(zonaOeste1.nombre + " - " + zonaOeste1.dirección + " - " + zonaOeste1.localidad + "//" + zonaOeste2.nombre + " - " + zonaOeste2.dirección + " - " + zonaOeste2.localidad);
    barriosoeste3.appendChild(barriosoeste4);
    $("#detallesotoño2").append(barriosoeste3);
}

else if ( barrios3 == "caba" ){
    var barrioscaba3 = document.createElement("h4");
    var barrioscaba4 = document.createTextNode(zonaCABA1.nombre + " - "+ zonaCABA1.dirección + " - " + zonaCABA1.localidad + "//" + zonaCABA2.nombre + " - " + zonaCABA2.dirección + " - " + zonaCABA2.localidad);
    barrioscaba3.appendChild(barrioscaba4);
    $("#detallesotoño2").append(barrioscaba3);
}
else{
    var parrafo7 = document.createElement("h4");
 var parrafo8 = document.createTextNode("Error. Ingrese una zona válida");
 parrafo7.appendChild(parrafo8);
 $("#detallesotoño2").append(parrafo7);
}

}

$("#viverosboton").click(zonas);

function zonas (){
var barrios = $("input[name='zonas']:checked").val();
if ( barrios == "zona sur" ){
 var barriossur = document.createElement("h4");
 var barriossur2 = document.createTextNode(zonaSur1.nombre + " - " + zonaSur1.dirección + " - " + zonaSur1.localidad + "//" + zonaSur2.nombre + " - " + zonaSur2.dirección + " - " + zonaSur2.localidad);
 barriossur.appendChild(barriossur2);
 $("#detallesverano2").append(barriossur);
}
else if ( barrios == "zona norte" ){
    var barriosnorte = document.createElement("h4");
    var barriosnorte2 = document.createTextNode(zonaNorte1.nombre + " - " + zonaNorte1.dirección + " - " + zonaNorte1.localidad + "//" + zonaNorte2.nombre + " - " + zonaNorte2.dirección + " - " + zonaNorte2.localidad);
    barriosnorte.appendChild(barriosnorte2);
    $("#detallesverano2").append(barriosnorte);
}

else if ( barrios == "zona oeste" ) {
    var barriosoeste = document.createElement("h4");
    var barriosoeste2 = document.createTextNode(zonaOeste1.nombre + " - " + zonaOeste1.dirección + " - " + zonaOeste1.localidad + "//" + zonaOeste2.nombre + " - " + zonaOeste2.dirección + " - " + zonaOeste2.localidad);
    barriosoeste.appendChild(barriosoeste2);
    $("#detallesverano2").append(barriosoeste);
}

else if ( barrios == "caba" ){
    var barrioscaba = document.createElement("h4");
    var barrioscaba2 = document.createTextNode(zonaCABA1.nombre + " - "+ zonaCABA1.dirección + " - " + zonaCABA1.localidad + "//" + zonaCABA2.nombre + " - " + zonaCABA2.dirección + " - " + zonaCABA2.localidad);
    barrioscaba.appendChild(barrioscaba2);
    $("#detallesverano2").append(barrioscaba);
}
else{
    var parrafo5 = document.createElement("h4");
 var parrafo6 = document.createTextNode("Error. Ingrese una zona válida");
 parrafo5.appendChild(parrafo6);
 $("#detallesverano2").append(parrafo5);
}

}

//slidetoggle

$("#lechugadetalles").click(mostrarDetalles)

function mostrarDetalles(){
    $("#infolechuga").slideToggle(1000)
}


$("#kaledetalles").click(mostrarDetallesKale)

function mostrarDetallesKale(){
    $("#infokale").slideToggle(1000)
}

$("#pakchoidetalles").click(mostrarDetallesPakchoi)

function mostrarDetallesPakchoi(){
    $("#infopakchoi").slideToggle(1000)
}

$("#acelgadetalles").click(mostrarDetallesAcelga)

function mostrarDetallesAcelga(){
    $("#infoacelga").slideToggle(1000)
}

$("#quinotosdetalles").click(mostrarDetallesQuinotos)

function mostrarDetallesQuinotos(){
    $("#infoquinotos").slideToggle(1000)
}

$("#limondetalles").click(mostrarDetallesLimon)

function mostrarDetallesLimon(){
    $("#infolimon").slideToggle(1000)
}

$("#batatasdetalles").click(mostrarDetallesBatata)

function mostrarDetallesBatata(){
    $("#infobatata").slideToggle(1000)
}

$("#zanahoriadetalles").click(mostrarDetallesZanahoria)

function mostrarDetallesZanahoria(){
    $("#infozanahoria").slideToggle(1000)
}


$("#papadetalles").click(mostrarDetallesPapa)

function mostrarDetallesPapa(){
    $("#infopapa").slideToggle(1000)
}


$("#tomatedetalles").click(mostrarDetallesTomate)

function mostrarDetallesTomate(){
    $("#infotomate").slideToggle(1000)
}

$("#lechugadetalles2").click(mostrarDetallesLechuga)

function mostrarDetallesLechuga(){
    $("#infolechuga2").slideToggle(1000)
}

$("#acelgadetalles2").click(mostrarDetallesAcelga2)

function mostrarDetallesAcelga2(){
    $("#infoacelga2").slideToggle(1000)
}

$("#uvasdetalles").click(mostrarDetallesUvas)

function mostrarDetallesUvas(){
    $("#infouvas").slideToggle(1000)
}

$("#frutilladetalles").click(mostrarDetallesFrutillas)

function mostrarDetallesFrutillas(){
    $("#infofrutilla").slideToggle(1000)
}

$("#pepinodetalles").click(mostrarDetallesPepino)

function mostrarDetallesPepino(){
    $("#infopepino").slideToggle(1000)
}

$("#berenjenadetalles").click(mostrarDetallesBerenjena)

function mostrarDetallesBerenjena(){
    $("#infoberenjena").slideToggle(1000)
}

$("#zanahoriadetalles2").click(mostrarDetallesZanahoria2)

function mostrarDetallesZanahoria2(){
    $("#infozanahoria2").slideToggle(1000)
}

$("#chauchadetalles").click(mostrarDetallesChaucha)

function mostrarDetallesChaucha(){
    $("#infochaucha").slideToggle(1000)
}

$("#rabanitosdetalles").click(mostrarDetallesRabanitos)

function mostrarDetallesRabanitos(){
    $("#inforabanitos").slideToggle(1000)
}

//scroll

$("#aotoño").click(scrollear)

function scrollear() {
    $("html, body").animate(
        {
            scrollTop: $("#otoño").offset().top
        },
        2000
    )
}

$("#averano").click(scrollear2)

function scrollear2() {
    $("html, body").animate(
        {
            scrollTop: $("#verano").offset().top
        },
        2000
    )
}

//botones plagas




$("#botonplagas").click(plagasdetalles)

function plagasdetalles (){
    $.ajax({
        url: "json/plagas.json",
        type: "GET",
        dataType: "json"
    }

    ).done( function (resultadoJson) {
        var plagaselemento = document.createElement("h4");
        var plagastexto = document.createTextNode('Afectan mayormente ' + resultadoJson.ejemplos[0].zonas_afectadas + ', se ven como ' + resultadoJson.ejemplos[0].signos + ' y se controlan con ' + resultadoJson.ejemplos[0].control);
        plagaselemento.appendChild(plagastexto);
        $("#detallesextra").append(plagaselemento);
    }).fail( function(xhr, status, error) {          
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
    
}

$("#botonplagas2").click(plagasdetalles2)

function plagasdetalles2 (){
    $.ajax({
        url: "json/plagas.json",
        type: "GET",
        dataType: "json"
    }

    ).done( function (resultadoJson) {
        var plagaselemento2 = document.createElement("h4");
        var plagastexto2 = document.createTextNode('Afectan mayormente ' + resultadoJson.ejemplos[1].zonas_afectadas + ', se ven como ' + resultadoJson.ejemplos[1].signos + ' y se controlan con ' + resultadoJson.ejemplos[1].control);
        plagaselemento2.appendChild(plagastexto2);
        $("#detallesextra").append(plagaselemento2);
    }).fail( function(xhr, status, error) {          
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
    
}

$("#botonplagas3").click(plagasdetalles3)

function plagasdetalles3 (){
    $.ajax({
        url: "json/plagas.json",
        type: "GET",
        dataType: "json"
    }

    ).done( function (resultadoJson) {
        var plagaselemento3 = document.createElement("h4");
        var plagastexto3 = document.createTextNode('Afectan mayormente ' + resultadoJson.ejemplos[2].zonas_afectadas + ', se ven como ' + resultadoJson.ejemplos[2].signos + ' y se controlan con ' + resultadoJson.ejemplos[2].control);
        plagaselemento3.appendChild(plagastexto3);
        $("#detallesextra").append(plagaselemento3);
    }).fail( function(xhr, status, error) {          
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
    
}

//botones enfermedades

$("#botonenfermedades").click(enfermedadesdetalles)

function enfermedadesdetalles (){
    $.ajax({
        url: "json/enfermedades.json",
        type: "GET",
        dataType: "json"
    }

    ).done( function (resultadoJson) {
        var enfelemento = document.createElement("h4");
        var enftexto = document.createTextNode('Afecta mayormente ' + resultadoJson.ejemplos[0].zonas_afectadas + ', se ve como ' + resultadoJson.ejemplos[0].signos + ' y se controla ' + resultadoJson.ejemplos[0].control);
        enfelemento.appendChild(enftexto);
        $("#detallesextra").append(enfelemento);
    }).fail( function(xhr, status, error) {          
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
    
}

$("#botonenfermedades2").click(enfermedadesdetalles2)

function enfermedadesdetalles2 (){
    $.ajax({
        url: "json/enfermedades.json",
        type: "GET",
        dataType: "json"
    }

    ).done( function (resultadoJson) {
        var enfelemento2 = document.createElement("h4");
        var enftexto2 = document.createTextNode('Afecta mayormente ' + resultadoJson.ejemplos[1].zonas_afectadas + ', se ve como ' + resultadoJson.ejemplos[1].signos + ' y se controla ' + resultadoJson.ejemplos[1].control);
        enfelemento2.appendChild(enftexto2);
        $("#detallesextra").append(enfelemento2);
    }).fail( function(xhr, status, error) {          
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
    
}

$("#botonenfermedades3").click(enfermedadesdetalles3)

function enfermedadesdetalles3 (){
    $.ajax({
        url: "json/enfermedades.json",
        type: "GET",
        dataType: "json"
    }

    ).done( function (resultadoJson) {
        var enfelemento3 = document.createElement("h4");
        var enftexto3 = document.createTextNode('Afecta mayormente ' + resultadoJson.ejemplos[2].zonas_afectadas + ', se ve como ' + resultadoJson.ejemplos[2].signos + ' y se controla ' + resultadoJson.ejemplos[2].control);
        enfelemento3.appendChild(enftexto3);
        $("#detallesextra").append(enfelemento3);
    }).fail( function(xhr, status, error) {          
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
    
}



