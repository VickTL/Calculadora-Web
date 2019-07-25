// Dados los datos ALTURA, MARGENES, FILAS e INTERLINEADO
 var altura = 0;
 var anchura = 0;
 var margenes = 0;
 var interlineado = 0;
 var recCreado = false;


// Medidas estandar en puntos
const a5hor = 419.528;
const a5ver = 595.276;

const a4hor = 595.276;
const a4ver = 841.89;

const a3hor = 841.89;
const a3ver = 1190.55;

const hdhor = 810;
const hdver = 1440;

//Asignar el valor de cada constante a la variable altura segun lo elegido en los puntos 1 y 2
//Si elige una altura custom, tendrá que seleccionar las unidades entre pt, px y mm
//En el caso de ser otra que no sean puntos convertir con pxtopt o mmtopt

console.log(window.innerWidth);

function pxtopt(alturaCustom) {
    return alturaCustom*0.75;
}

function mmtopt(alturaCustom) {
    return alturaCustom*2.835;
}

function calcLineasActuales() {
    var lineasActual = 0;
    var medidaMargenes = 0;

    document.interlineado = document.getElementById("interlineado").value;
    document.filas = document.getElementById("divisiones").value;

    medidaMargenes = document.altura-(2*document.margenes);
    lineasActual = medidaMargenes/document.interlineado;

    console.log(lineasActual);

    return lineasActual;
}

function menos() {
    var lineasIdeal = Math.floor(calcLineasActuales());

    // Esta funcion suma o resta lineas a las actuales hasta que de un numero entero divisible por el numero
    // de divisiones de la estructura (filas), es decir, hasta que al dividirlo el resto de 0.
    do{
        lineasIdeal = lineasIdeal - 1;
    } while((lineasIdeal-(parseInt(document.getElementById("divisiones").value)-1))%parseInt(document.getElementById("divisiones").value) != 0);

    page23();

    return lineasIdeal;
}

function mas() {
    var lineasIdeal = Math.floor(lineasActual);

    do{
        lineasIdeal = lineasIdeal + 1;
    } while((lineasIdeal-(parseInt(document.getElementById("divisiones").value)-1))%parseInt(document.getElementById("divisiones").value) != 0);
}

function showHide1() {
    var x = document.getElementById("VHdiv");
    var y = document.getElementById("Customdiv");

    if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    }
}

function showHide2() {
    var x = document.getElementById("VHdiv");
    var y = document.getElementById("Customdiv");

    document.getElementById("Hbtn").checked = false;
    document.getElementById("Vbtn").checked = false;

    x.style.display = "none";
    y.style.display = "block";
}

function page12() {
    if (document.recCreado){
        var x = document.getElementById("Pag2");
        var y = document.getElementById("Pag1");

        x.style.display = "block";
        y.style.display = "none";

        document.getElementById("numRenglones").innerHTML = calcLineasActuales().toFixed(2);
    }

    else {
        alert("No se han rellenado todos los parámetros.")
    }
}

function page21() {
    var y = document.getElementById("Pag2");
    var x = document.getElementById("Pag1");

    x.style.display = "block";
    y.style.display = "none";
}

function page23() {
    var x = document.getElementById("Pag3");
    var y = document.getElementById("Pag2");

    x.style.display = "block";
    y.style.display = "none";
}

function page31() {
    location.reload();
}

function medidas() {

    document.margenes = document.getElementById("margenes").value;

    if(document.getElementById("Vbtn").checked) {
        if (document.getElementById("A5btn").checked) {
            document.altura = a5ver;
            document.anchura = a5hor;
            rectangulo();
        } else if(document.getElementById("A4btn").checked) {
            document.altura = a4ver;
            document.anchura = a4hor;
            rectangulo();
        } else if(document.getElementById("A3btn").checked) {
            document.altura = a3ver;
            document.anchura = a3hor;
            rectangulo();
        } else if (document.getElementById("HDbtn").checked) {
            document.altura = hdver;
            document.anchura = hdhor;
            rectangulo();
        }
    } else if (document.getElementById("Hbtn").checked) {
        if (document.getElementById("A5btn").checked) {
            document.altura = a5hor;
            document.anchura = a5ver;
            rectangulo();
        } else if(document.getElementById("A4btn").checked) {
            document.altura = a4hor;
            document.anchura = a4ver;
            rectangulo();
        } else if(document.getElementById("A3btn").checked) {
            document.altura = a3hor;
            document.anchura = a3ver;
            rectangulo();
        } else if (document.getElementById("HDbtn").checked) {
            document.altura = hdhor;
            document.anchura = hdver;
            rectangulo();
        }
    } else if (document.getElementById("Othbtn").checked) {
        if (document.getElementById("CustomV").value>0 && document.getElementById("CustomH").value>0) {
            document.altura = document.getElementById("CustomV").value;
            document.anchura = document.getElementById("CustomH").value;
            rectangulo();
        }
    }

    //console.log("Altura: "+document.altura);
    //console.log("Anchura: "+document.anchura);

}

function switchValues() {
    var x = document.getElementById("CustomV").value;
    var y = document.getElementById("CustomH").value;
    var pp = 0;

    pp = y;
    document.getElementById("CustomH").value = x;
    document.getElementById("CustomV").value = pp;
}

function rectangulo() {
    if(document.getElementById("splitRight").style.display != "none") {
        
        while(document.anchura>0.8*pxtopt(document.getElementById("mediapantalla").clientWidth) || document.altura>0.8*pxtopt(document.getElementById("mediapantalla").clientHeight)){
            document.anchura=document.anchura*0.99;
            document.altura=document.altura*0.99;

            document.margenes=document.margenes*0.99;

            //console.log("Altura: "+document.altura+", Anchura: "+document.anchura+", Margenes: "+document.margenes);
        }


        var x = document.getElementById("canvas");

        x.style.width = document.anchura+"pt";
        x.style.height = document.altura+"pt";
        x.style.opacity = 100;

        var y = document.getElementById("margins");

        y.style.width = (document.anchura-document.margenes-document.margenes)+"pt";
        y.style.height = (document.altura-document.margenes-document.margenes)+"pt";
        y.style.opacity = 100;

        var z = document.getElementById("margins2");

        z.style.width = (document.anchura-document.margenes-document.margenes)+"pt";
        z.style.height = (document.altura-document.margenes-document.margenes)+"pt";
        z.style.opacity = 100;

        var z2 = document.getElementById("margins3");

        z2.style.width = (document.anchura-document.margenes-document.margenes)+"pt";
        z2.style.height = (document.altura-document.margenes-document.margenes)+"pt";
        z2.style.opacity = 100;

        clearBox("margins");
        clearBox("margins3");

        var divs = parseInt(document.getElementById("divisiones").value);
        for(var i=0; i<divs+1; i++) {
            var linea = document.createElement("div");
            linea.setAttribute("class","lineaEstructura");
            linea.style.opacity = 100;
            var margins = document.getElementById("margins");
            margins.appendChild(linea);

            var linea = document.createElement("div");
            linea.setAttribute("class","lineaEstructuraV");
            linea.style.opacity = 100;
            var margins3 = document.getElementById("margins3");
            margins3.appendChild(linea);
        }

        clearBox("margins2");

        var renglones = parseInt(Math.floor(calcLineasActuales()))+1;
        //console.log("Aparecen: "+ renglones);

        for(var i2=0; i2<renglones; i2++) {

            var renglon = document.createElement("div");
            renglon.setAttribute("class","renglon");
            renglon.style.opacity = 100;
            var margins2 = document.getElementById("margins2");
            margins2.appendChild(renglon);

            var separacion = document.createElement("div");
            separacion.setAttribute("class","separacion");
            separacion.style.height = document.getElementById("interlineado").value+"pt";
            var margins2 = document.getElementById("margins2");
            margins2.appendChild(separacion);
            //console.log(i2);
        }
    }

    document.recCreado = true;
}

function clearBox(elementID) {
    var div = document.getElementById(elementID);

    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
