let usuarios = [
    {
        id:1,
        nombre:'Juan',
        apellido:'Juarez',
        edad:25
    },
    {
        id:2,
        nombre:'Ana',
        apellido:'Banana',
        edad:28
    },
    {
        id:3,
        nombre:'Torito',
        apellido:'vazquez',
        edad:24
    },
    {
        id:4,
        nombre:'Martha',
        apellido:'Jimenez',
        edad:45
    },
    {
        id:5,
        nombre:'Martin',
        apellido:'Alvarez',
        edad:32
    },
    {
        id:6,
        nombre:'Laura',
        apellido:'Gonzalez',
        edad:16
    },
    {
        id:7,
        nombre:'Juan',
        apellido:'Dominguez',
        edad:19
    },
    {
        id:8,
        nombre:'Alberto',
        apellido:'Jimenez',
        edad:23
    },
    {
        id:9,
        nombre:'Jazmin',
        apellido:'Montes',
        edad:24
    },
    {
        id:10,
        nombre:'Alex',
        apellido:'Marin',
        edad:36
    },
];

/* funcion map: la funcion map retorna un numero total de elementos igual 
al del arreglo iterado.


*/
let nuevoArreglo = usuarios.map((item) => {
    if (item.id == 5) {
        return "cualquier cosa";
    }
    return item;
})

console.log(nuevoArreglo);


let arreglofiltrado = usuarios.filter((x) =>{
    if (x.edad >= 19 ) {
        return x;
    }
});

let filterArray = usuarios.filter((y) => (y.edad > 20));

console.log(arreglofiltrado);