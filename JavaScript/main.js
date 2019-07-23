// Dados los datos ALTURA, MARGENES, FILAS e INTERLINEADO
/*
 var altura = 0;
 var margenes = 0;
 var interlineado = 0;
 var filas = 0;
 bool masMenos = false;

*/


function calcLineasActuales(altura, margenes, interlineado) {
    altura = altura; margenes = margenes; interlineado = interlineado;
    var lineasActual = 0;

    lineasActual = altura-(2*margenes);
    lineasActual = lineasActual/interlineado;

    //return lineasActual; DUDA ¿Cómo puede la función calcLineasIdeales tener el valor de lineasActual si se declara en esta funcion?
}

function calcLineasIdeales(masMenos, lineasActual, filas) {
    masMenos = masMenos; filas = filas;
    var lineasIdeal = (int)lineasActual; // DUDA ¿Cómo cojo la parte entera solo de un numero?

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

    // return lineasIdeal;
}
