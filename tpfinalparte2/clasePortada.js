class Portada {
  constructor() {
    this.juego = new Principal();
    this.botonIniciar = new Botones(440, 380, 100, 50, "Iniciar", 465, 410);
    this.botonCreditos = new Botones(100, 380, 100, 50, "Creditos", 115, 410);
    this.botonReiniciar = new Botones(250, 250, 100, 50, "Reiniciar", 230, 230);
    this.botonVolver = new Botones(285, 380, 100, 50, "Volver", 310, 410);
    this.estado = "Portada";
    this.desplazamiento= 0;
  }

  preload() {
    this.juego.preload();
  }


  mostrar() {
    console.log(this.estado);
    if (this.estado==="Portada") {
      background(101, 192, 209);
      textSize(48);
      fill(255);
      text("La isla a Mediodia", 120, 100);
      this.botonCreditos.mostrar();
      this.botonIniciar.mostrar();

      if (this.botonIniciar.detectar()) {
        this.estado="Juego";
      } else if (this.botonCreditos.detectar()) {
        this.estado="Creditos";
      }
    }


    if (this.estado==="Creditos") {
      background(101, 192, 209);
      fill(255);
      textSize(25);
      text("Creado y programado por:", 180, 50);
      text("Imagenes creadas por:", 200, 150);
      textSize(18);
      text("Micheli Agustina y Lopez Guadalupe", 175, 100);
      text("Adobe", 310, 200);
      this.botonVolver.mostrar();
      if (this.botonVolver.detectar()) {
        this.estado="Portada";
      }
    }

    if (this.estado==="Juego") {
      if(this.juego.finalizado){
        if(this.juego.resultado === "gana"){
          this.estado="Ganar";
        }else{
          this.estado="Perder";
        }
        this.reiniciar();
      }else{
        //CONTENIDO DEL JUEGO
        background(255);
        this.juego.mostrar();
        if (keyIsPressed === true) {
          this.juego.teclaPresionada(keyCode);
        }
        this.desplazamiento++;
        this.juego.iniciar(this.desplazamiento);
      }
    }

     if (this.estado==="Perder") {
       background(0);
       text("GAME OVER", this.CENTER, this.CENTER);
       this.botonReiniciar.mostrar();
       if (this.botonReiniciar.detectar()) {
         this.estado="Portada";
       }
     }
     
     if (this.estado==="Ganar") {
       background(0);
       text("ganaste", 100,100);
       this.botonReiniciar.mostrar();
       if (this.botonReiniciar.detectar()) {
         this.estado="Portada";
       }
     }
  }
  
  reiniciar(){
      this.desplazamiento= 0;
      this.juego.reiniciar();
  }
}
