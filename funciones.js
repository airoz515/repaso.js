/* decalrar funcion */

function hola() {
    console.log("hola y ya");
}

/* llamar funcion */


/* arrow funtions / funciones de flecha */
const hola2 = () => {
    console.log("hola 2" );
}

/* llamar funcion */
hola2();

/* funciones con paramentros/argumentos/propiedades */

const suma = (a,b) => {
    console.log( a + b );

}

suma( 23, 11.14);

/* funciones que retornan valores */

const multiplicacion = ( x, y ) => {
return x*y;
}

const result = multiplicacion (200,2);

console.log(result);