//Algoritmo: hacer que cuando el boton 1 sea pulsado, cambie la foto
const images = [
    "img/barbie.jpg",
    "img/nemo.jpg",
    "img/harry.jpg",
    "img/Anillos.jpg",
    "img/superman.jpg",
    "img/simpsons.webp",
    "img/avatar.avif",
    "img/gru.jpg",
]

//1.capturar todos los elementos que van a participar en mi programa
//Capturo boton 1 
const btn1=document.querySelector ('#btn1');
const btn2=document.querySelector ('#btn2');
const btn3=document.querySelector ('#btn3');
const btn4=document.querySelector ('#btn4');
const btn5=document.querySelector ('#btn5');
const btn6=document.querySelector ('#btn6');
const btn7=document.querySelector ('#btn7');
const btn8=document.querySelector ('#btn8');


//Capturo foto
const tvImg=document.querySelector ('#tvImg');

const btnOnOff=document.querySelector('.tv__btn-on');


//2.Aplicar el evento al elemento que yo quiera o que le diga la tarea
btn1.addEventListener('click',cambiarCanal)
btn2.addEventListener('click',cambiarCanal)
btn3.addEventListener('click',cambiarCanal)
btn4.addEventListener('click',cambiarCanal)
btn5.addEventListener('click',cambiarCanal)
btn6.addEventListener('click',cambiarCanal)
btn7.addEventListener('click',cambiarCanal)
btn8.addEventListener('click',cambiarCanal)

btnOnOff.addEventListener('click',apagarTele)

//3.Definir la funcion que va a ejecutar el evento
function cambiarCanal(){
   // tvImg.src="img/barbie.jpg";
  
   tvImg.src = images[this.dataset.number]
}

function apagarTele(){
    tvImg.classList.toggle('turn-off');
    screenElement.classList.toggle('sint');

}


//Sintonizar la tv
//function sintonizar(){
   // tvImg.classList.remove('turn-off');
//}





var sintButton = document.querySelector('.tv__btn-sint');
var sintButton = document.querySelector('.tv__btn-sint');
var screenElement = document.querySelector('.tv__Screen');

sintButton.addEventListener('click', function() {
    screenElement.classList.toggle('sint');
});



//4.Dentro de la funcion programar que va a hacer la funcion sobre los elementos que yo le diga