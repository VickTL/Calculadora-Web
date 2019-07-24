// Dados los datos ALTURA, MARGENES, FILAS e INTERLINEADO
 var altura = 0;
 var anchura = 0;
 var margenes = 0;
 var interlineado = 0;
 var filas = 0;
 var masMenos = false;

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


function pxtopt(alturaCustom) {
    return alturaCustom*0.75;
}

function mmtopt(alturaCustom) {
    return alturaCustom*2.835;
}

function calcLineasActuales(altura, margenes, interlineado) {
    altura = altura; margenes = margenes; interlineado = interlineado;
    var lineasActual = 0;

    lineasActual = altura-(2*margenes);
    return lineasActual/interlineado;
}

function calcLineasIdeales(masMenos, lineasActual, filas) {
    masMenos = masMenos; filas = filas;
    var lineasIdeal = floor(lineasActual);

    // Esta funcion suma o resta lineas a las actuales hasta que de un numero entero divisible por el numero
    // de divisiones de la estructura (filas), es decir, hasta que al dividirlo el resto de 0.

    if(masMenos == true) { // Mas filas
        do{
            lineasIdeal = lineasIdeal + 1;
        } while((lineasIdeal-(filas-1))%filas != 0);
    }

    else if(masMenos == false) { // Menos filas
        do{
            lineasIdeal = lineasIdeal - 1;
        } while((lineasIdeal-(filas-1))%filas != 0);
    }

    return lineasIdeal;
}

function showHide1() {
    var x = document.getElementById("VHdiv");
    var y = document.getElementById("Customdiv")

    if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    }
}

function showHide2() {
    var x = document.getElementById("VHdiv");
    var y = document.getElementById("Customdiv")

    document.getElementById("Hbtn").checked = false;
    document.getElementById("Vbtn").checked = false;

    x.style.display = "none";
    y.style.display = "block";
}

function medidas() {
    if(document.getElementById("Vbtn").checked) {
        if (document.getElementById("A5btn").checked) {
            document.altura = a5ver;
            document.anchura = a5hor;
        } else if(document.getElementById("A4btn").checked) {
            document.altura = a4ver;
            document.anchura = a4hor;
        } else if(document.getElementById("A3btn").checked) {
            document.altura = a3ver;
            document.anchura = a3hor;
        } else if (document.getElementById("HDbtn").checked) {
            document.altura = hdver;
            document.anchura = hdhor;
        }
    } else if (document.getElementById("Hbtn").checked) {
        if (document.getElementById("A5btn").checked) {
            document.altura = a5hor;
            document.anchura = a5ver;
        } else if(document.getElementById("A4btn").checked) {
            document.altura = a4hor;
            document.anchura = a4ver;
        } else if(document.getElementById("A3btn").checked) {
            document.altura = a3hor;
            document.anchura = a3ver;
        } else if (document.getElementById("HDbtn").checked) {
            document.altura = hdhor;
            document.anchura = hdver;
        }
    } else if (document.getElementById("Othbtn").checked) {
        document.altura = document.getElementById("CustomV").value;
        document.anchura = document.getElementById("CustomH").value;
    }

    console.log("Altura: "+document.altura);
    console.log("Anchura: "+document.anchura);

    rectangulo();
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
    var x = document.getElementById("canvas");

    x.style.width = document.anchura+"px";
    x.style.height = document.altura+"px";


}

//document.getElementById("Listobtn").onclick = medidas();
//document.getElementById("Listobtn").onclick = rectangulo();
