//1 capturo elementos
const startBtn = document.querySelector('.no-me-fio__start');

const subItems = document.querySelectorAll('.no-me-fio__item');

//2 genero evento
startBtn.addEventListener('click', moveItems);

//3 declarar funcion
function moveItems(){
    subItems.forEach(item =>{
        item.classList.toggle('play');
    })
}
