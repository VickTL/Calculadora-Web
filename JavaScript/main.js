// Dados los datos ALTURA, MARGENES, FILAS e INTERLINEADO
 var altura = 0;
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

var alturaCustom = 0;

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
