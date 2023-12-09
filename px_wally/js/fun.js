//variables
//var userName = "Leo";
//var userName = "Pepita pulgarcita"; reasignar, lo que hago abajo sobreescribe a lo de arriba, como en css.
//pepita pulgarcita es un scrim, cuerda, maya...

//var nombreUsuario = 5; 
//console.log(nombreUsuario);


//palabras reservadas: var, function, event, for...
//las variables son var y const, var si se puede reasignar pero const no.


var userName = "Leo";
var userSurname = "Soriano";

//var message = "mi nombre es " +userName + "" + userSurname;
//var message = `mi nombre es ${userName}  ${userSurname}`; //template literal

var message = "mi nombre es Leo";

//PROPIEDADES
message.length

//METODOS
message = message.replace("Leo", "Alicia");
console.log(message);

//message.replace("Leo", "Pepa");
//console.log(message. length);













/* 
ELEMENTOS:

PRIMITIVOS: son inmutables, capacidad de cambiar el valor interno de una variable sin reasignarla.
para cambiar el valor hay que reasignarlo.

string
    var name  = "leo"; 
se pueden concatenar con un +
    var userName = "Leonor" + "Soriano";
    console.log(userName);

PROPIEDADES
message.length

METODOS
message = message.replace("leo", "Alicia");
console.log(message);

Number
var numerAmigos = 2354*pepe;
console.log(numerAmigos);

 */


//BOOLEAN siempre empieza por is y es verdadero o falso. Si lleva ! es lo contrario, negacion ! y doble negacion !! vuelve
var isJavascriptTheTrueHapiness = true;
//console.log(isJavascriptTheTrueHapiness);
//console.log( !isJavascriptTheTrueHapiness );


if(isJavascriptTheTrueHapiness) {
console.log('estoy dentro');
}

