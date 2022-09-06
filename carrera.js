let readlineSync = require('readline-sync');
let vuelta1 = readlineSync.questionFloat("Tiempo Vuelta 1: ");
let vuelta2 = readlineSync.questionFloat("Tiempo Vuelta 2: ");
let vuelta3 = readlineSync.questionFloat("Tiempo Vuelta 3: ");
let vuelta4 = readlineSync.questionFloat("Tiempo Vuelta 4: ");
mostrarTiempo();

function mostrarTiempo(){
    console.log (" ");
    console.log ("------ Total de Tiempo ----------");
    console.log(tiempoTotal());
    console.log ("------ Promedio de Tiempo -------");
    console.log (promedioVuelta());
    console.log ("---------------------------------");
}

function tiempoTotal(){
    return vuelta1 + vuelta2 + vuelta3 + vuelta4;
}

function promedioVuelta(){
    return (tiempoTotal()/4);
}

