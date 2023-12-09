//CONDICIONAL
                //const userName = "Bertold";

//FALSY VALUES:              
//false, 0, "", '', undefined, null, NaN, todo lo que no sea esto devuelve value.


//if( userName ) {
    //fragmento sucede
   // console.log("estoy dentro, el condicional evalua el true");
//} 

//else{
   // console.log("evaluo en false");
//}


//si es esto haz esto, si no haz esto.

/*const numberOfCubatas = document.querySelector('input');
const btnCalcular = document.querySelector('button');
const resultSlot = document.querySelector('.resultado');

btnCalcular.addEventListener('click', function(){


//condicional ternario, no se recomienda anidarlos:
    numberOfCubatas.value == 0
    ? resultSlot.innerHTML="persona sana" //si es verdad hago esto
    : resultSlot.innerHTML="depúrate" ; //sino, hago esto
})*/







/* forma 1:

const numberOfCubatas = document.querySelector('input');
const btnCalcular = document.querySelector('button');
const resultSlot = document.querySelector('.resultado');

btnCalcular.addEventListener('click', function(){
    if(numberOfCubatas.value==0) {
        resultSlot.innerHTML = "<p>Llegas hecho un pincel, amigo</p>";
    }

    else if (numberOfCubatas.value>0 && numberOfCubatas.value<4){
        resultSlot.innerHTML = "boca de alpargata";
    }

    else if (numberOfCubatas.value>=4 && numberOfCubatas.value<10){
        resultSlot.innerHTML = "mutas albóndiga";
    } 

    else {
        resultSlot.innerHTML = "llama a una ambulancia";
    } 
})
 */




/* Forma 2:
btnCalcular.addEventListener('click', function(){

    switch (numberOfCubatas.value) {
        case "0":
            resultSlot.innerHTML="Estas hecho un pincel";
            break;

        case "1":
            resultSlot.innerHTML="Alpargata";
            break;

        default:
            resultSlot.innerHTML="deja de castigarte";

    }
 
})
 */


/*forma 3
//condicional ternario, no se recomienda anidarlos:
    numberOfCubatas.value == 0
    ? resultSlot.innerHTML="persona sana" //si es verdad hago esto
    : resultSlot.innerHTML="depúrate" ; //sino, hago esto
}) */




/*
OPERADORES:

Aritmeticos
        + suma y concatena
        - resta
        * multiplicacion
        / division
        % el resto de la división, para saber si es par o impar
        ** potencia, esponencial, elevado
        ++ incremento de 1, muy importante. edad++ = edad+1
        -- incremento menos

Asignación
        = igual
        +=
        -=
        *=
        /=
        %=
        ??= si es null o indefined le pones lo que yo diga, si viene vacia la casilla pues pongo algo predefinido.


lógicos: actuan dentro de la condicion sobre todo: if (condition) 
>     mayor que
<     menor que
<=
>=
!     inversión de booleano o negación
!!    si hago doble negación de algo que no es booleano me devuelve true o false, me lo convierte en un booleano en su valor true o false.
&&    and es concatenacion
||     doble barra es or
==    es igual a
!=    no igual a
===   igual el valor y igual el tipo de dato
!== la variante de antes, distinto tipo o dato



 */



//const miAmorPorJS = 2/0; es infinito



const botella = {
        forma: "larga y estrecha",
        color: "verde como el amor de un elfo",
        isTapon: true,
        capacidad: undefined,
        desperfectos: 0,
        edad: "3"
        }

        //console.log(botella.isTapon);// da true por que es booleano y por que es verdad
       //console.log(!!botella.color);// da true aun que no es booleano pero lo convertimos con !!


       //botella.forma && console.log("hola"); //da hola por que botella forma es true entonces sucede
       //botella.capacidad && console.log("hola"); //da no ussues por que botella capacidad es indefinido entonces no sucede
 






        //si se cumple: true
        if (botella.color == "verde como el amor de un elfo") {
            console.log("es la botella de Alexandra");
        }

        //false
        else{
            console.log("no es mi botella");
        }

        //no se cumple
       // if (botella.color == "roja como el diablo") {
       //     console.log("es la botella de Alexandra");
       // }



       if (botella.edad !== "3") {
        //true
        console.log("es la botella de Alexandra");
    }

        //false
        else{
        console.log("no es mi botella");
    }
    //en este caso evalua en false si se cumple que botella edad no es igual que 3







