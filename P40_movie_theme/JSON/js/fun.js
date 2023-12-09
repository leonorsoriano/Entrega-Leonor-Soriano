const mainContainer=document.querySelector('.ranking');

//funcion looper recorre el json
function looper(jsonObj){
    jsonObj.forEach((item)=>{

        //creamos contenedor principal
        const artistItem = document.createElement('div');
        artistItem.classList.add('ranking__artist-item');
        mainContainer.appendChild(artistItem);

        //creamos contendor de foto y la foto
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('ranking__photo-container');
        artistItem.appendChild(photoContainer);

        const photo = document.createElement('img');
        photo.classList.add('ranking__photo');
        photo.src= "img/profile.jpg";
        photoContainer.appendChild(photo);

        //creo datos del artista
        const dataContainer = document.createElement('div');
        dataContainer.classList.add('ranking__data-container');
        artistItem.appendChild(dataContainer);

        //llamo a la funcion item creator 4 veces, una por cada item
        itemCreator(dataContainer, 'h2', 'Nombre: ', item.name);
        itemCreator(dataContainer, 'p', 'Nombre alternativo: ', item.alternative_name);
        itemCreator(dataContainer, 'p', 'Rating: ', item.rating);
        itemCreator(dataContainer, 'p', 'ID: ', item.objectID);

        colorRanking(artistItem, item.rating)
    })

    function itemCreator(Container, itemTag, itemLabel, itemValue) {
        const newItem = document.createElement(itemTag);
        Container.appendChild(newItem);
        const valueOfItem = itemValue ? itemValue : " no disponible";
        newItem.innerHTML = `<span class="ranking__data-item">${itemLabel}</span>${valueOfItem}`
    }

    function colorRanking(rankingItem, rating){
        if(rating>3000){
            rankingItem.classList.add('ranking1')
        }
        else if (rating>2000 && rating < 3000){
            rankingItem.classList.add('ranking2')
        }
        else if (rating>1000 && rating < 2000){
            rankingItem.classList.add('ranking3')
        }
        else if (rating>500 && rating < 1000){
            rankingItem.classList.add('ranking4')
        }
    }
}






//function initialize
function init(){
    fetch('json/movies.json')
    .then((response)=>{
        movies = response.json().then((data)=>{
          looper(data)
        })
    })
}

init();