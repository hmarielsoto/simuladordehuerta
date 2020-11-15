


document.getElementById("nombreboton").addEventListener("click", guardarnombre);
function guardarnombre() {
    var usuario = textonombre.value;
    var mostrar = document.createElement("h3");
    var mostrartexto = document.createTextNode('Hola ' + usuario + ' te damos la bienvenida a nuestro simulador');
    mostrar.appendChild(mostrartexto);
    document.getElementById("textohuerta").appendChild(mostrar);
    localStorage.setItem("User", usuario);

}

function Verduleria(distancia, riego, cuidados){
    this.distancia = distancia;
    this.riego = riego;
    this.cuidados = cuidados;
}


var cultivoLechuga = new Verduleria("20cm", "abundante", "cosechar de afuera hacia adentro");


var cultivoKale = new Verduleria("30cm", "medio", "eliminar hojas amarillas");


var cultivoPakchoi = new Verduleria("30cm", "medio", "rápida cosecha");


var cultivoAcelga = new Verduleria("30cm", "medio", "cosechar permanentemente");


var cultivoRabanito = new Verduleria("5cm", "medio", "siembra directa");


var cultivoZanahoria = new Verduleria("5cm", "medio", "siembra de semillas");


var cultivoPapa = new Verduleria("40cm", "medio", "siembra directa");


var cultivoBatata = new Verduleria("40cm", "medio", "siembra por gajos");


var cultivoTomate = new Verduleria("40cm", "abundante", "utilizar tutores");


var cultivoPepino = new Verduleria("60cm", "abundante", "cosechar rápidamente");


var cultivoChaucha = new Verduleria("30cm", "abundante", "regar más con la floración");


var cultivoFrutilla = new Verduleria("30cm", "abundante", "evitar contacto de la fruta con el suelo");


var cultivoBerenjena = new Verduleria("50cm", "abundante", "usar tutores");


var cultivoUva = new Verduleria("80cm", "medio", "utilizar enrejados para apoyo");


var cultivoLimón = new Verduleria("200cm", "medio", "podar ramas frecuentemente");


var cultivoQuinoto = new Verduleria("100cm", "medio", "plantar en maceta");






document.getElementById("pepinolechugaboton").addEventListener("click", cultivar);
function cultivar() {

    var consulta = pepinolechuga.value;

    if (consulta == "PEPINO") {
        var pepino1 = document.createElement("h3");
        var pepinotexto = document.createTextNode("El pepino se planta a una distancia de " + cultivoPepino.distancia + " necesita riego " + cultivoPepino.riego + " " + "y sus cuidados especiales son " + cultivoPepino.cuidados);
        pepino1.appendChild(pepinotexto);
        document.getElementById("detallesverano").appendChild(pepino1);
    } else if (consulta == "LECHUGA") {
        var lechuga1 = document.createElement("h3");
        var lechugatexto = document.createTextNode("La lechuga se planta a una distancia de " + cultivoLechuga.distancia + " necesita riego " + cultivoLechuga.riego + " " + "y sus cuidados especiales son " + cultivoLechuga.cuidados);
        lechuga1.appendChild(lechugatexto);
        document.getElementById("detallesverano").appendChild(lechuga1);
    }
    else if (consulta == "TOMATE") {
        var tomate1 = document.createElement("h3");
        var tomatetexto = document.createTextNode("El tomate se planta a una distancia de " + cultivoTomate.distancia + " necesita riego " + cultivoTomate.riego + " " + "y sus cuidados especiales son " + cultivoTomate.cuidados);
        tomate1.appendChild(tomatetexto);
        document.getElementById("detallesverano").appendChild(tomate1);
    }
    else if (consulta == "FRUTILLA") {
        var frutilla1 = document.createElement("h3");
        var frutillatexto = document.createTextNode("La frutilla se planta a una distancia de " + cultivoFrutilla.distancia + " necesita riego " + cultivoFrutilla.riego + " " + "y sus cuidados especiales son " + cultivoFrutilla.cuidados);
        frutilla1.appendChild(frutillatexto);
        document.getElementById("detallesverano").appendChild(frutilla1);
    }
    else if (consulta == "UVA") {
        var uva1 = document.createElement("h3");
        var uvatexto = document.createTextNode("La uva se planta a una distancia de " + cultivoUva.distancia + " necesita riego " + cultivoUva.riego + " " + "y sus cuidados especiales son " + cultivoUva.cuidados);
        uva1.appendChild(uvatexto);
        document.getElementById("detallesverano").appendChild(frutilla1);
    }
    else if (consulta == "ACELGA") {
        var acelga1 = document.createElement("h3");
        var acelgatexto = document.createTextNode("La acelga se planta a una distancia de " + cultivoAcelga.distancia + " necesita riego " + cultivoAcelga.riego + " " + "y sus cuidados especiales son " + cultivoAcelga.cuidados);
        acelga1.appendChild(acelgatexto);
        document.getElementById("detallesverano").appendChild(acelga1);
    }
    else if (consulta == "BERENJENA") {
        var berenjena1 = document.createElement("h3");
        var berenjenatexto = document.createTextNode("La berenjena se planta a una distancia de " + cultivoBerenjena.distancia + " necesita riego " + cultivoBerenjena.riego + " " + "y sus cuidados especiales son " + cultivoBerenjena.cuidados);
        berenjena1.appendChild(berenjenatexto);
        document.getElementById("detallesverano").appendChild(berenjena1);
    }
    else if (consulta == "CHAUCHA") {
        var chaucha1 = document.createElement("h3");
        var chauchatexto = document.createTextNode("La chaucha se planta a una distancia de " + cultivoChaucha.distancia + " necesita riego " + cultivoChaucha.riego + " " + "y sus cuidados especiales son " + cultivoChaucha.cuidados);
        chaucha1.appendChild(chauchatexto);
        document.getElementById("detallesverano").appendChild(chaucha1);
    }
    else if (consulta == "RABANITO") {
        var rabanito1 = document.createElement("h3");
        var rabanitotexto = document.createTextNode("El rabanito se planta a una distancia de " + cultivoRabanito.distancia + " necesita riego " + cultivoRabanito.riego + " " + "y sus cuidados especiales son " + cultivoRabanito.cuidados);
        rabanito1.appendChild(rabanitotexto);
        document.getElementById("detallesverano").appendChild(rabanito1);
    }
    else if (consulta == "PAPA") {
        var papa1 = document.createElement("h3");
        var papatexto = document.createTextNode("La papa se planta a una distancia de " + cultivoPapa.distancia + " necesita riego " + cultivoPapa.riego + " " + "y sus cuidados especiales son " + cultivoPapa.cuidados);
        papa1.appendChild(papatexto);
        document.getElementById("detallesverano").appendChild(papa1);
    }
    else if (consulta == "ZANAHORIA") {
        var zanahoria1 = document.createElement("h3");
        var zanahoriatexto = document.createTextNode("La zanahoria se planta a una distancia de " + cultivoZanahoria.distancia + " necesita riego " + cultivoZanahoria.riego + " " + "y sus cuidados especiales son " + cultivoZanahoria.cuidados);
        zanahoria1.appendChild(zanahoriatexto);
        document.getElementById("detallesverano").appendChild(zanahoria1);
    }
    else {
        var otros = document.createElement("h3");
        var otrostexto = document.createTextNode('Ingrese una verdura válida');
        otros.appendChild(otrostexto);
        document.getElementById("detallesverano").appendChild(otros);
    }



}
var seleccion = [];


document.getElementById("elegirtomatesv").addEventListener("click", agregartomates);

function agregartomates() {
    seleccion.push(elegirtomatesv.value);
}

document.getElementById("elegirpepinov").addEventListener("click", agregarpepino);

function agregarpepino() {
    seleccion.push(elegirpepinov.value);
}

document.getElementById("elegirberenjenav").addEventListener("click", agregarberenjena);

function agregarberenjena() {
    seleccion.push(elegirberenjenav.value);
}

document.getElementById("elegirchauchav").addEventListener("click", agregarchaucha);

function agregarchaucha() {
    seleccion.push(elegirchauchav.value);
}

document.getElementById("elegirpapasv").addEventListener("click", agregarpapas);

function agregarpapas() {
    seleccion.push(elegirpapasv.value);
}

document.getElementById("elegirlechugav").addEventListener("click", agregarlechuga);

function agregarlechuga() {
    seleccion.push(elegirlechugav.value);
}

document.getElementById("elegirlechugao").addEventListener("click", agregarlechugao);

function agregarlechugao() {
    seleccion2.push(elegirlechugao.value);
}


document.getElementById("elegirkaleo").addEventListener("click", agregarkale);

function agregarkale() {
    seleccion2.push(elegirkaleo.value);
}

document.getElementById("elegirpakchoio").addEventListener("click", agregarpakchoi);

function agregarpakchoi() {
    seleccion2.push(elegirpackhoio.value);
}

document.getElementById("elegiracelgav").addEventListener("click", agregaracelga);

function agregaracelga() {
    seleccion.push(elegiracelgav.value);
}

document.getElementById("elegiracelgao").addEventListener("click", agregaracelgao);

function agregaracelgao() {
    seleccion2.push(elegiracelgao.value);
}

document.getElementById("elegirbatataso").addEventListener("click", agregarbatatas);

function agregarbatatas() {
    seleccion.push(elegirbatataso.value);
}

document.getElementById("elegirzanahoriav").addEventListener("click", agregarzanahoria);

function agregarzanahoria() {
    seleccion.push(elegirzanahoriav.value);
}

document.getElementById("elegirzanahoriao").addEventListener("click", agregarzanahoriao);

function agregarzanahoriao() {
    seleccion2.push(elegirzanahoriao.value);
}

document.getElementById("elegirrabanitosv").addEventListener("click", agregarrabanitos);

function agregarrabanitos() {
    seleccion.push(elegirrabanitosv.value);
}


document.getElementById("elegirfrutillasv").addEventListener("click", agregarfrutillas);

function agregarfrutillas() {
    seleccion.push(elegirfrutillasv.value);
}

document.getElementById("elegirlimoneso").addEventListener("click", agregarlimones);

function agregarlimones() {
    seleccion2.push(elegirlimoneso.value);
}

document.getElementById("elegiruvasv").addEventListener("click", agregaruvas);

function agregaruvas() {
    seleccion.push(elegiruvasv.value);
}

document.getElementById("elegirquinotoso").addEventListener("click", agregarquinotos);

function agregarquinotos() {
    seleccion2.push(elegirquinotoso.value);
}


document.getElementById("seleccionfinal").addEventListener("click", armadofinal);

function armadofinal() {
    if(seleccion.length < 3 ){
        var consejo = "Con unas macetas podés arrancar tu huerta";
    } else if (seleccion.length >= 3 && seleccion.length < 6){
        var consejo = "Recomendamos usar canteros y macetas";
    } else if (seleccion.length > 6){
        var consejo = "Elegiste muchas opciones, necestiás asesoramiento personalizado. Contactanos!";
    } else{
        var consejo = "Error desconocido"
    }
    var mesa = document.createElement("h3");
    var mesatexto = document.createTextNode('Tu huerta soñada tendría ' + seleccion + consejo);
    mesa.appendChild(mesatexto);
    document.getElementById("huertasoñada").appendChild(mesa);
}


var seleccion2 = [];

document.getElementById("seleccionfinal2").addEventListener("click", armadofinal2);

function armadofinal2() {
    var mesa2 = document.createElement("h3");
    var mesatexto2 = document.createTextNode('Tu huerta soñada tendría ' + seleccion2);
    mesa2.appendChild(mesatexto2);
    document.getElementById("huertasoñada2").appendChild(mesa2);
}

document.getElementById("pepinolechugaboton1").addEventListener("click", cultivar1);

function cultivar1() {

    var consulta1 = pepinolechuga1.value;

    if (consulta1 == "BATATA") {
        var batata2 = document.createElement("h3");
        var batata2texto = document.createTextNode("La batata se planta a una distancia de " + cultivoBatata.distancia + " necesita riego " + cultivoBatata.riego + " " + "y sus cuidados especiales son " + cultivoBatata.cuidados);
        batata2.appendChild(batata2texto);
        document.getElementById("detallesotoño").appendChild(batata2);
    } else if (consulta1 == "LECHUGA") {
        var lechuga2 = document.createElement("h3");
        var lechuga2texto = document.createTextNode("La lechuga se planta a una distancia de " + cultivoLechuga.distancia + " necesita riego " + cultivoLechuga.riego + " " + "y sus cuidados especiales son " + cultivoLechuga.cuidados);
        lechuga2.appendChild(lechuga2texto);
        document.getElementById("detallesotoño").appendChild(lechuga2);
    }
    
    else if (consulta1 == "ACELGA") {
        var acelga2 = document.createElement("h3");
        var acelgatexto2 = document.createTextNode("La acelga se planta a una distancia de " + cultivoAcelga.distancia + " necesita riego " + cultivoAcelga.riego + " " + "y sus cuidados especiales son " + cultivoAcelga.cuidados);
        acelga2.appendChild(acelgatexto2);
        document.getElementById("detallesotoño").appendChild(acelga2);
    }
    else if (consulta1 == "PAK-CHOI") {
        var pakchoi2 = document.createElement("h3");
        var pakchoitexto2 = document.createTextNode("El pak-choi se planta a una distancia de " + cultivoPakchoi.distancia + " necesita riego " + cultivoPakchoi.riego + " " + "y sus cuidados especiales son " + cultivoPakchoi.cuidados);
        pakchoi2.appendChild(pakchoitexto2);
        document.getElementById("detallesotoño").appendChild(pakchoi2);
    }
    else if (consulta1 == "KALE") {
        var kale2 = document.createElement("h3");
        var kaletexto2 = document.createTextNode("El kale se planta a una distancia de " + cultivoKale.distancia + " necesita riego " + cultivoKale.riego + " " + "y sus cuidados especiales son " + cultivoKale.cuidados);
        kale2.appendChild(kaletexto2);
        document.getElementById("detallesotoño").appendChild(kale2);
    }
    else if (consulta1 == "ZANAHORIA") {
        var zanahoria2 = document.createElement("h3");
        var zanahoriatexto2 = document.createTextNode("La zanahoria se planta a una distancia de " + cultivoZanahoria.distancia + " necesita riego " + cultivoZanahoria.riego + " " + "y sus cuidados especiales son " + cultivoZanahoria.cuidados);
        zanahoria2.appendChild(zanahoriatexto2);
        document.getElementById("detallesotoño").appendChild(zanahoria2);
    }
    else if (consulta1 == "LIMON") {
        var limon2 = document.createElement("h3");
        var limontexto2 = document.createTextNode("El limón se planta a una distancia de " + cultivoLimón.distancia + " necesita riego " + cultivoLimón.riego + " " + "y sus cuidados especiales son " + cultivoLimón.cuidados);
        limon2.appendChild(limontexto2);
        document.getElementById("detallesotoño").appendChild(limon2);
    }
   
    else if (consulta1 == "QUINOTO") {
        var quinoto2 = document.createElement("h3");
        var quinototexto2 = document.createTextNode("El quinoto se planta a una distancia de " + cultivoQuinoto.distancia + " necesita riego " + cultivoQuinoto.riego + " " + "y sus cuidados especiales son " + cultivoQuinoto.cuidados);
        quinoto2.appendChild(quinototexto2);
        document.getElementById("detallesotoño").appendChild(quinoto2);
    }
    else {
        var otros2 = document.createElement("h3");
        var otrostexto2 = document.createTextNode('Ingrese una verdura válida');
        otros2.appendChild(otrostexto2);
        document.getElementById("detallesotoño").appendChild(otros2);
    }



}

$("#viverosboton2").click(zonas2);

function zonas2 (){
var barrios3 = $("input[name='zonas2']:checked").val();
if ( barrios3 == "zona sur" ){
 var barriossur3 = document.createElement("h4");
 var barriossur4 = document.createTextNode("Vivero Rootsverde (Banfield) - Vivero de Helga (Temperley) - Vivero del Sur (Luis Guillón)");
 barriossur3.appendChild(barriossur4);
 $("#detallesotoño2").append(barriossur3);
}
else if ( barrios3 == "zona norte" ){
    var barriosnorte3 = document.createElement("h4");
    var barriosnorte4 = document.createTextNode("Vivero Marisel (Vicente López) - Vivero Galante (Boulogne) - Vivero jazmín (Tigre)");
    barriosnorte3.appendChild(barriosnorte4);
    $("#detallesotoño2").append(barriosnorte3);
}

else if ( barrios3 == "zona oeste" ) {
    var barriosoeste3 = document.createElement("h4");
    var barriosoeste4 = document.createTextNode("Vivero Las Acacias (San Justo) - Vivero El Bosque (Ramos Mejía) - Vivero Margaritas (Castelar)");
    barriosoeste3.appendChild(barriosoeste4);
    $("#detallesotoño2").append(barriosoeste3);
}

else if ( barrios3 == "caba" ){
    var barrioscaba3 = document.createElement("h4");
    var barrioscaba4 = document.createTextNode("Vivero Mario (Caballito) - Vivero Bambú (Flores) - Vivero del Paraíso (Parque Chacabuco)");
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
 var barriossur2 = document.createTextNode("Vivero Rootsverde (Banfield) - Vivero de Helga (Temperley) - Vivero del Sur (Luis Guillón)");
 barriossur.appendChild(barriossur2);
 $("#detallesverano2").append(barriossur);
}
else if ( barrios == "zona norte" ){
    var barriosnorte = document.createElement("h4");
    var barriosnorte2 = document.createTextNode("Vivero Marisel (Vicente López) - Vivero Galante (Boulogne) - Vivero jazmín (Tigre)");
    barriosnorte.appendChild(barriosnorte2);
    $("#detallesverano2").append(barriosnorte);
}

else if ( barrios == "zona oeste" ) {
    var barriosoeste = document.createElement("h4");
    var barriosoeste2 = document.createTextNode("Vivero Las Acacias (San Justo) - Vivero El Bosque (Ramos Mejía) - Vivero Margaritas (Castelar)");
    barriosoeste.appendChild(barriosoeste2);
    $("#detallesverano2").append(barriosoeste);
}

else if ( barrios == "caba" ){
    var barrioscaba = document.createElement("h4");
    var barrioscaba2 = document.createTextNode("Vivero Mario (Caballito) - Vivero Bambú (Flores) - Vivero del Paraíso (Parque Chacabuco)");
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











/*


document.getElementById("viverosboton2").addEventListener("click", buscarviveros2);

function buscarviveros2() {
    var preguntavivero2 = viveros2.value;
    if (preguntavivero2 == "CABA") {
        var cabaviveros2 = document.createElement("h4");
        var cabaviverostexto2 = document.createTextNode("Vivero Mario (Caballito) - Vivero Bambú (Flores) - Vivero del Paraíso (Parque Chacabuco)");
        cabaviveros2.appendChild(cabaviverostexto2);
        document.getElementById("detallesotoño2").appendChild(cabaviveros2);
    } else if (preguntavivero2 == "ZONA SUR") {
        var surviveros2 = document.createElement("h4");
        var surviverostexto2 = document.createTextNode("Vivero Rootsverde (Banfield) - Vivero de Helga (Temperley) - Vivero del Sur (Luis Guillón)");
        surviveros2.appendChild(surviverostexto2);
        document.getElementById("detallesotoño2").appendChild(surviveros2);

    } else if (preguntavivero2 == "ZONA NORTE") {
        var norteviveros2 = document.createElement("h4");
        var norteviverostexto2 = document.createTextNode("Vivero Marisel (Vicente López) - Vivero Galante (Boulogne) - Vivero jazmín (Tigre)");
        norteviveros2.appendChild(norteviverostexto2);
        document.getElementById("detallesotoño2").appendChild(norteviveros2);
    } else if (preguntavivero2 == "ZONA OESTE") {
        var oesteviveros2 = document.createElement("h4");
        var oesteviverostexto2 = document.createTextNode("Vivero Las Acacias (San Justo) - Vivero El Bosque (Ramos Mejía) - Vivero Margaritas (Castelar)");
        oesteviveros2.appendChild(oesteviverostexto2);
        document.getElementById("detallesotoño2").appendChild(oesteviveros2);
    }

    else {
        var valido2 = document.createElement("h4");
        var validotexto2 = document.createTextNode('Ingrese una zona válida');
        valido2.appendChild(validotexto2);
        document.getElementById("detallesotoño2").appendChild(valido2);
    }

}




function crearNodo() {
    if ( $("#cliente").length == 0 ) {
        var parrafo = document.createElement("p");
        parrafo.id = "cliente"
        var texto = document.createTextNode("Cliente cargado");
        parrafo.appendChild(texto);
        //document.getElementById("resultado").appendChild(parrafo);
        $("#resultado").append(parrafo);

        //$("#resultado").append("<p id='cliente'>Cliente cargado</p>");

    }
} 

var barrios = $("input[name='zonas']:checked").val();
if ( $(":checked").val == "zona sur" ){
 var parrafo2 = document.createElement("h4");
 var parrafo3 = document.createTextNode("Vivero Rootsverde (Banfield) - Vivero de Helga (Temperley) - Vivero del Sur (Luis Guillón)");
 parrafo2.appendChild(parrafo3);
 $("#detallesverano2").append(parrafo2);
}
else{
    var parrafo5 = document.createElement("h4");
 var parrafo6 = document.createTextNode("Error");
 parrafo5.appendChild(parrafo6);
 $("#detallesverano2").append(parrafo5);
}

}
document.getElementById("viverosboton").addEventListener("click", buscarviveros);

function buscarviveros() {
    var preguntavivero = viveros.value;
    if (preguntavivero == "CABA") {
        var cabaviveros = document.createElement("h4");
        var cabaviverostexto = document.createTextNode("Vivero Mario (Caballito) - Vivero Bambú (Flores) - Vivero del Paraíso (Parque Chacabuco)");
        cabaviveros.appendChild(cabaviverostexto);
        document.getElementById("detallesverano2").appendChild(cabaviveros);
    } else if (preguntavivero == "ZONA SUR") {
        var surviveros = document.createElement("h4");
        var surviverostexto = document.createTextNode("Vivero Rootsverde (Banfield) - Vivero de Helga (Temperley) - Vivero del Sur (Luis Guillón)");
        surviveros.appendChild(surviverostexto);
        document.getElementById("detallesverano2").appendChild(surviveros);

    } else if (preguntavivero == "ZONA NORTE") {
        var norteviveros = document.createElement("h4");
        var norteviverostexto = document.createTextNode("Vivero Marisel (Vicente López) - Vivero Galante (Boulogne) - Vivero jazmín (Tigre)");
        norteviveros.appendChild(norteviverostexto);
        document.getElementById("detallesverano2").appendChild(norteviveros);
    } else if (preguntavivero == "ZONA OESTE") {
        var oesteviveros = document.createElement("h4");
        var oesteviverostexto = document.createTextNode("Vivero Las Acacias (San Justo) - Vivero El Bosque (Ramos Mejía) - Vivero Margaritas (Castelar)");
        oesteviveros.appendChild(oesteviverostexto);
        document.getElementById("detallesverano2").appendChild(oesteviveros);
    }

    else {
        var valido = document.createElement("h4");
        var validotexto = document.createTextNode('Ingrese una zona válida');
        valido.appendChild(validotexto);
        document.getElementById("detallesverano2").appendChild(valido);
    }

}

*/