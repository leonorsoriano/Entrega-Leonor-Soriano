//1. Capturar lo necesario para la interacción
const poster = document.querySelector ('.wally__poster');
        //console.log(typeof poster);
const wally = document.querySelector ('.wally');

//2.Crear funcion que va a actuar cuando haga click
function mensajeError(){
    console.log("Ahí no esta Wally")
}

//3. Crear evento
poster.addEventListener('click', mensajeError)


//2.Crear funcion que va a actuar cuando haga click
function mensajeAcierto(e){
    e.stopPropagation();
   // console.log("Ahí esta Wally!!");
   // console.log(e.pageX);

   //const flores = ["margarita", "petunia", "Rosa"];
   //console.log(flores[2])

   //const flores = ["margarita", "petunia", "Rosa", ["rosa roja", "rosa negra"]];
   //console.log(flores[3][1]);

  const coordenadas = [e.pageX, e.pageY];
  coordenadas.push ("Enhorabuena, has encontrado a Wally!! " );
    
  //const mensajeFinal= coordenadas[2] + "sus coordenadas son: " + coordenadas[0] + ","+ coordenadas[1];
 //console.log(mensajeFinal);

 const mensajeFinal2= `${coordenadas[2]} Sus coordenadas son: ${coordenadas[0]},${coordenadas[1]}`;
 console.log(mensajeFinal2);
  
}

//3. Crear evento
wally.addEventListener('click', mensajeAcierto)





//cambio de modo amateur a profesional y viceversa:
var variableVacia, level0 = document.querySelector("#level0"),
level1 = document.querySelector("#level1"),
isProfessionalMode = !0;

level0.addEventListener("click", function() {
    level0.classList.add("active"),
    level1.classList.remove("active"),
    poster.style.filter = "saturate(120%)",
    isProfessionalMode = !1
}),
level1.addEventListener("click", function() {
    level1.classList.add("active"),
    level0.classList.remove("active"),
    poster.style.filter = "saturate(0%)",
    isProfessionalMode = !0
})