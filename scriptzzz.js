const categorias = [
    { id: 1, nombre: "Base" },
    { id: 2, nombre: "Oro" },
    { id: 3, nombre: "Gominola" },
    { id: 4, nombre: "Galaxy" },
    { id: 5, nombre: "Holográfico" }
];

// Pega aquí el arreglo gustambitos completo

const gustambitos = [{
    id: 1,
    nombre: "Espíritu de Agua",
    imagen: "assets/images/base/1.png",
    categoria: 1,
    familia: "Agua",
    orden: 1
},
{
    id: 19,
    nombre: "Espíritu de Agua Dorado",
    imagen: "assets/images/gold/1.png",
    categoria: 2,
    familia: "Agua",
    orden: 1
},
{
    id: 36,
    nombre: "Espíritu de Agua de Golosina",
    imagen: "assets/images/gummy/1.png",
    categoria: 3,
    familia: "Agua",
    orden: 1
},
{
    id: 53,
    nombre: "Espíritu de Agua Galáctico",
    imagen: "assets/images/galaxy/1.png",
    categoria: 4,
    familia: "Agua",
    orden: 1
},
{
    id: 70,
    nombre: "Espíritu de Agua Holográfico",
    imagen: "assets/images/holofoil/1.png",
    categoria: 5,
    familia: "Agua",
    orden: 1
},

{
    id: 2,
    nombre: "Espíritu de Tierra",
    imagen: "assets/images/base/2.png",
    categoria: 1,
    familia: "Tierra",
    orden: 2
},
{
    id: 20,
    nombre: "Espíritu de Tierra Dorado",
    imagen: "assets/images/gold/2.png",
    categoria: 2,
    familia: "Tierra",
    orden: 2
},
{
    id: 37,
    nombre: "Espíritu de Tierra de Golosina",
    imagen: "assets/images/gummy/2.png",
    categoria: 3,
    familia: "Tierra",
    orden: 2
},
{
    id: 54,
    nombre: "Espíritu de Tierra Galáctico",
    imagen: "assets/images/galaxy/2.png",
    categoria: 4,
    familia: "Tierra",
    orden: 2
},
{
    id: 85,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Tierra",
    orden:2
},

{
    id: 3,
    nombre: "Espíritu de Fuego",
    imagen: "assets/images/base/3.png",
    categoria: 1,
    familia: "Fuego",
    orden: 3
},
{
    id: 21,
    nombre: "Espíritu de Fuego Dorado",
    imagen: "assets/images/gold/3.png",
    categoria: 2,
    familia: "Fuego",
    orden: 3
},
{
    id: 38,
    nombre: "Espíritu de Fuego de Golosina",
    imagen: "assets/images/gummy/3.png",
    categoria: 3,
    familia: "Fuego",
    orden: 3
},
{
    id: 55,
    nombre: "Espíritu de Fuego Galáctico",
    imagen: "assets/images/galaxy/3.png",
    categoria: 4,
    familia: "Fuego",
    orden: 3
},
{
    id: 72,
    nombre: "Espíritu de Fuego Holográfico",
    imagen: "assets/images/holofoil/3.png",
    categoria: 5,
    familia: "Fuego",
    orden: 3
},

{
    id: 6,
    nombre: "Espíritu Patito",
    imagen: "assets/images/base/6.png",
    categoria: 1,
    familia: "Patito",
    orden: 4
},
{
    id: 24,
    nombre: "Espíritu Patito Dorado",
    imagen: "assets/images/gold/6.png",
    categoria: 2,
    familia: "Patito",
    orden: 4
},
{
    id: 41,
    nombre: "Espíritu Patito de Golosina",
    imagen: "assets/images/gummy/6.png",
    categoria: 3,
    familia: "Patito",
    orden: 4
},
{
    id: 58,
    nombre: "Espíritu Patito Galáctico",
    imagen: "assets/images/galaxy/6.png",
    categoria: 4,
    familia: "Patito",
    orden: 4
},
{
    id: 74,
    nombre: "Espíritu Patito Holográfico",
    imagen: "assets/images/holofoil/6.png",
    categoria: 5,
    familia: "Patito",
    orden: 4
},

{
    id: 8,
    nombre: "Espíritu Fantasma",
    imagen: "assets/images/base/8.png",
    categoria: 1,
    familia: "Fantasma",
    orden: 5
},
{
    id: 26,
    nombre: "Espíritu Fantasma Dorado",
    imagen: "assets/images/gold/8.png",
    categoria: 2,
    familia: "Fantasma",
    orden: 5
},
{
    id: 43,
    nombre: "Espíritu Fantasma de Golosina",
    imagen: "assets/images/gummy/8.png",
    categoria: 3,
    familia: "Fantasma",
    orden: 5
},
{
    id: 60,
    nombre: "Espíritu Fantasma Galáctico",
    imagen: "assets/images/galaxy/8.png",
    categoria: 4,
    familia: "Fantasma",
    orden: 5
},
{
    id: 75,
    nombre: "Espíritu Fantasma Holográfico",
    imagen: "assets/images/holofoil/8.png",
    categoria: 5,
    familia: "Fantasma",
    orden: 5
},

{
    id: 13,
    nombre: "Espíritu Dormilón",
    imagen: "assets/images/base/13.png",
    categoria: 1,
    familia: "Dormilón",
    orden: 6
},
{
    id: 31,
    nombre: "Espíritu Dormilón Dorado",
    imagen: "assets/images/gold/13.png",
    categoria: 2,
    familia: "Dormilón",
    orden: 6
},
{
    id: 48,
    nombre: "Espíritu Dormilón de Golosina",
    imagen: "assets/images/gummy/13.png",
    categoria: 3,
    familia: "Dormilón",
    orden: 6
},
{
    id: 65,
    nombre: "Espíritu Dormilón Galáctico",
    imagen: "assets/images/galaxy/13.png",
    categoria: 4,
    familia: "Dormilón",
    orden: 6
},
{
    id: 71,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Dormilón",
    orden: 6
},
{
    id: 7,
    nombre: "Espíritu Demoníaco",
    imagen: "assets/images/base/7.png",
    categoria: 1,
    familia: "Demoníaco",
    orden: 7
},
{
    id: 25,
    nombre: "Espíritu Demoníaco Dorado",
    imagen: "assets/images/gold/7.png",
    categoria: 2,
    familia: "Demoníaco",
    orden: 7
},
{
    id: 42,
    nombre: "Espíritu Demoníaco de Golosina",
    imagen: "assets/images/gummy/7.png",
    categoria: 3,
    familia: "Demoníaco",
    orden: 7
},
{
    id: 59,
    nombre: "Espíritu Demoníaco Galáctico",
    imagen: "assets/images/galaxy/7.png",
    categoria: 4,
    familia: "Demoníaco",
    orden: 7
},
{
    id: 76,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Demoníaco",
    orden: 7
},
{
    id: 12,
    nombre: "Espíritu Punk",
    imagen: "assets/images/base/12.png",
    categoria: 1,
    familia: "Punk",
    orden: 8
},
{
    id: 30,
    nombre: "Espíritu Punk Dorado",
    imagen: "assets/images/gold/12.png",
    categoria: 2,
    familia: "Punk",
    orden: 8
},
{
    id: 47,
    nombre: "Espíritu Punk de Golosina",
    imagen: "assets/images/gummy/12.png",
    categoria: 3,
    familia: "Punk",
    orden: 8
},
{
    id: 64,
    nombre: "Espíritu Punk Galáctico",
    imagen: "assets/images/galaxy/12.png",
    categoria: 4,
    familia: "Punk",
    orden: 8
},
{
    id: 77,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Punk",
    orden: 8
},
{
    id: 9,
    nombre: "Espíritu Monarca",
    imagen: "assets/images/base/9.png",
    categoria: 1,
    familia: "Monarca",
    orden: 9
},
{
    id: 27,
    nombre: "Espíritu Monarca Dorado",
    imagen: "assets/images/gold/9.png",
    categoria: 2,
    familia: "Monarca",
    orden: 9
},
{
    id: 44,
    nombre: "Espíritu Monarca de Golosina",
    imagen: "assets/images/gummy/9.png",
    categoria: 3,
    familia: "Monarca",
    orden: 9
},
{
    id: 61,
    nombre: "Espíritu Monarca Galáctico",
    imagen: "assets/images/galaxy/9.png",
    categoria: 4,
    familia: "Monarca",
    orden: 9
},
{
    id: 79,
    nombre: "Espíritu Monarca Holográfico",
    imagen: "assets/images/holofoil/9.png",
    categoria: 5,
    familia: "Monarca",
    orden: 9
},

{
    id: 16,
    nombre: "Espíritu del Punto Cero",
    imagen: "assets/images/base/16.png",
    categoria: 1,
    familia: "Punto Cero",
    orden: 10
},
{
    id: 34,
    nombre: "Espíritu del Punto Cero Dorado",
    imagen: "assets/images/gold/16.png",
    categoria: 2,
    familia: "Punto Cero",
    orden: 10
},
{
    id: 51,
    nombre: "Espíritu del Punto Cero de Golosina",
    imagen: "assets/images/gummy/16.png",
    categoria: 3,
    familia: "Punto Cero",
    orden: 10
},
{
    id: 68,
    nombre: "Espíritu del Punto Cero Galáctico",
    imagen: "assets/images/galaxy/16.png",
    categoria: 4,
    familia: "Punto Cero",
    orden: 10
},
{
    id: 78,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Punto Cero",
    orden: 10
},
{
    id: 5,
    nombre: "Espíritu Palito de Pez",
    imagen: "assets/images/base/5.png",
    categoria: 1,
    familia: "Palito de Pez",
    orden: 11
},
{
    id: 23,
    nombre: "Espíritu Palito de Pez Dorado",
    imagen: "assets/images/gold/5.png",
    categoria: 2,
    familia: "Palito de Pez",
    orden: 11
},
{
    id: 40,
    nombre: "Espíritu Palito de Pez de Golosina",
    imagen: "assets/images/gummy/5.png",
    categoria: 3,
    familia: "Palito de Pez",
    orden: 11
},
{
    id: 57,
    nombre: "Espíritu Palito de Pez Galáctico",
    imagen: "assets/images/galaxy/5.png",
    categoria: 4,
    familia: "Palito de Pez",
    orden: 11
},
{
    id: 80,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Palito de Pez",
    orden: 11
},
{
    id: 10,
    nombre: "Espíritu Goleador",
    imagen: "assets/images/base/10.png",
    categoria: 1,
    familia: "Goleador",
    orden: 12
},
{
    id: 28,
    nombre: "Espíritu Goleador Dorado",
    imagen: "assets/images/gold/10.png",
    categoria: 2,
    familia: "Goleador",
    orden: 12
},
{
    id: 45,
    nombre: "Espíritu Goleador de Golosina",
    imagen: "assets/images/gummy/10.png",
    categoria: 3,
    familia: "Goleador",
    orden: 12
},
{
    id: 62,
    nombre: "Espíritu Goleador Galáctico",
    imagen: "assets/images/galaxy/10.png",
    categoria: 4,
    familia: "Goleador",
    orden: 12
},
{
    id: 82,
    nombre: "Espíritu Goleador Holográfico",
    imagen: "assets/images/holofoil/10.png",
    categoria: 5,
    familia: "Goleador",
    orden: 12
},

{
    id: 11,
    nombre: "Espíritu de Aura",
    imagen: "assets/images/base/11.png",
    categoria: 1,
    familia: "Aura",
    orden: 13
},
{
    id: 29,
    nombre: "Espíritu de Aura Dorado",
    imagen: "assets/images/gold/11.png",
    categoria: 2,
    familia: "Aura",
    orden: 13
},
{
    id: 46,
    nombre: "Espíritu de Aura de Golosina",
    imagen: "assets/images/gummy/11.png",
    categoria: 3,
    familia: "Aura",
    orden: 13
},
{
    id: 63,
    nombre: "Espíritu de Aura Galáctico",
    imagen: "assets/images/galaxy/11.png",
    categoria: 4,
    familia: "Aura",
    orden: 13
},
{
    id: 81,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Aura",
    orden: 13
},
{
    id: 14,
    nombre: "Espíritu Jefe",
    imagen: "assets/images/base/14.png",
    categoria: 1,
    familia: "Jefe",
    orden: 14
},
{
    id: 32,
    nombre: "Espíritu Jefe Dorado",
    imagen: "assets/images/gold/14.png",
    categoria: 2,
    familia: "Jefe",
    orden: 14
},
{
    id: 49,
    nombre: "Espíritu Jefe de Golosina",
    imagen: "assets/images/gummy/14.png",
    categoria: 3,
    familia: "Jefe",
    orden: 14
},
{
    id: 66,
    nombre: "Espíritu Jefe Galáctico",
    imagen: "assets/images/galaxy/14.png",
    categoria: 4,
    familia: "Jefe",
    orden: 14
},
{
    id: 83,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Jefe",
    orden: 14
},
{
    id: 17,
    nombre: "Espíritu Siniestro",
    imagen: "assets/images/base/17.png",
    categoria: 1,
    familia: "Siniestro",
    orden: 15
},
{
    id: 35,
    nombre: "Espíritu Siniestro Dorado",
    imagen: "assets/images/gold/17.png",
    categoria: 2,
    familia: "Siniestro",
    orden: 15
},
{
    id: 52,
    nombre: "Espíritu Siniestro de Golosina",
    imagen: "assets/images/gummy/17.png",
    categoria: 3,
    familia: "Siniestro",
    orden: 15
},
{
    id: 69,
    nombre: "Espíritu Siniestro Galáctico",
    imagen: "assets/images/galaxy/17.png",
    categoria: 4,
    familia: "Siniestro",
    orden: 15
},
{
    id: 85,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5,
    familia: "Siniestro",
    orden: 15
},
{
    id: 18,
    nombre: "Maní Quemado",
    imagen: "assets/images/base/18.png",
    categoria: 1,
    familia: "Maní Quemado",
    orden: 16
},

/* Para futuras activaciones de gustambitos, hay que buscarles lugar */

 /*
{
    id: 4,
    nombre: "Espíritu de Aire",
    imagen: "assets/images/base/4.png",
    categoria: 1,
    familia: "Aire",
    orden: 17
},
{
    id: 22,
    nombre: "Espíritu de Aire Dorado",
    imagen: "assets/images/gold/4.png",
    categoria: 2,
    familia: "Aire",
    orden: 17
},
{
    id: 39,
    nombre: "Espíritu de Aire de Golosina",
    imagen: "assets/images/gummy/4.png",
    categoria: 3,
    familia: "Aire",
    orden: 17
},
{
    id: 56,
    nombre: "Espíritu de Aire Galáctico",
    imagen: "assets/images/galaxy/4.png",
    categoria: 4,
    familia: "Aire",
    orden: 17
},
*/







/*
{
    id: 15,
    nombre: "Espíritu Siete",
    imagen: "assets/images/base/15.png",
    categoria: 1,
    familia: "Siete",
    orden: 18
},
{
    id: 33,
    nombre: "Espíritu de los Siete Dorado",
    imagen: "assets/images/gold/15.png",
    categoria: 2,
    familia: "Siete",
    orden: 18
},
{
    id: 50,
    nombre: "Espíritu de los Siete de Golosina",
    imagen: "assets/images/gummy/15.png",
    categoria: 3,
    familia: "Siete",
    orden: 18
},
{
    id: 67,
    nombre: "Espíritu de los Siete Galáctico",
    imagen: "assets/images/galaxy/15.png",
    categoria: 4,
    familia: "Siete",
    orden: 18
},


{
    id: 84,
    nombre: "Espíritu de los Siete Holográfico",
    imagen: "assets/images/holofoil/15.png",
    categoria: 5,
    familia: "Siete",
    orden: 18
},

*/

];

const album = document.getElementById("album");

const encabezado = document.createElement("div");
encabezado.className = "fila encabezado";

const vacia = document.createElement("div");
vacia.className = "celda esquina";
encabezado.appendChild(vacia);

categorias.forEach(categoria => {

    const celda = document.createElement("div");

    celda.className = "celda titulo";

    celda.textContent = categoria.nombre;

    encabezado.appendChild(celda);

});

album.appendChild(encabezado);

const familias = [...new Map(

    gustambitos
        .filter(g => g.familia !== "Proximamente")
        .map(g => [g.familia, g])

).values()]

.sort((a,b)=>a.orden-b.orden);

familias.forEach(familia => {

    const fila = document.createElement("div");

    fila.className = "fila";

    // nombre familia

    const nombre = document.createElement("div");

    nombre.className = "celda familia";

    nombre.textContent = familia.familia;

    fila.appendChild(nombre);

    categorias.forEach(categoria=>{

        const celda = document.createElement("div");

        celda.className="celda tarjeta";

        celda.textContent="□";

        fila.appendChild(celda);

    });

    album.appendChild(fila);

});