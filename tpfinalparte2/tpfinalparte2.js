//Micheli Agustina y Guadalupe Lopez
//Comision 1

let pantalla;

function preload() {
  pantalla= new Portada();
  pantalla.preload();
}

function setup() {
  createCanvas(640, 480);
  
}

function draw() {
  pantalla.mostrar();
  
}
