# engine

como funciona Js

entidades lógicas
    - scope, contexto de ejecucion y pila de ejecución
    (scope, execution content, call stack)

cada vez que carga el navegador el fichero se producen 3 fases:
    -creación
    -ejecucion
    -finalizacion


FASE DE CREACIÓN
 realiza el proceso en varios pasos:

    1. se crea el objeto window
        -dentro de el existen muchos objetos de la api dom (document)

    2. se crea el valor de referencia this (hace referencia al objeto) 
        -En este caso this es window
       - y cambiara el valor dependiendo de que se esta ejecutando en cada momento.

    3. js recorre el codigo en busca de variables y funciones y las alamacena en el componente de memoria.
        .guarda las variables con valor undefined,
        .guara las funciones con su contenido de código. (por eso las funciones guardadas en una variable no experimentan hoisting o experimentan hoisting parcial.)
        -variables y funciones se colocan al principio del script.

FASE DE EJECUCIÓN
    1. se resuelven referencias a variables y funciones:
        -JS utiliza el scope para ello. scope informa si se puede usar o no.
        -saltan los errores de referencia

    2. añade cada contexto de ejecución a la pila LIFO.
    se crea el contexto cuando llamo a la funcion. el primero en la pila es window. IMPORTANTEEE


FASE DE FINALIZACIÓN
   1. se eliminan las variables
   2. se eliminan las funciones locales
   3. el contexto de ejecucion sale de la pila LIFO
   4. se restaura el contexto de ejecución anterior



   el motor de chrome se llama v8
