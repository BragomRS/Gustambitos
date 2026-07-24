// ================================
// ESTADOS de gustambos
// ================================
const DISPONIBILIDAD = {

    DISPONIBLE: "disponible",

    PROXIMAMENTE: "proximamente",

    NO_EXISTE: "no-existe"

};


const gustambitos = [

{
    id: 1,
    familia: "agua",
    categoria: "base",
    nombre: "Espíritu de Agua",
    imagen: "assets/images/base/1.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 19,
    familia: "agua",
    categoria: "oro",
    nombre: "Espíritu de Agua Dorado",
    imagen: "assets/images/gold/1.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 36,
    familia: "agua",
    categoria: "gominola",
    nombre: "Espíritu de Agua de Golosina",
    imagen: "assets/images/gummy/1.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 53,
    familia: "agua",
    categoria: "galaxy",
    nombre: "Espíritu de Agua Galáctico",
    imagen: "assets/images/galaxy/1.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 70,
    familia: "agua",
    categoria: "holografico",
    nombre: "Espíritu de Agua Holográfico",
    imagen: "assets/images/holofoil/1.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

{
    id: 2,
    familia: "tierra",
    categoria: "base",
    nombre: "Espíritu de Tierra",
    imagen: "assets/images/base/2.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 20,
    familia: "tierra",
    categoria: "oro",
    nombre: "Espíritu de Tierra Dorado",
    imagen: "assets/images/gold/2.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 37,
    familia: "tierra",
    categoria: "gominola",
    nombre: "Espíritu de Tierra de Golosina",
    imagen: "assets/images/gummy/2.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 54,
    familia: "tierra",
    categoria: "galaxy",
    nombre: "Espíritu de Tierra Galáctico",
    imagen: "assets/images/galaxy/2.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 85,
    familia: "tierra",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 3,
    familia: "fuego",
    categoria: "base",
    nombre: "Espíritu de Fuego",
    imagen: "assets/images/base/3.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 21,
    familia: "fuego",
    categoria: "oro",
    nombre: "Espíritu de Fuego Dorado",
    imagen: "assets/images/gold/3.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 38,
    familia: "fuego",
    categoria: "gominola",
    nombre: "Espíritu de Fuego de Golosina",
    imagen: "assets/images/gummy/3.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 55,
    familia: "fuego",
    categoria: "galaxy",
    nombre: "Espíritu de Fuego Galáctico",
    imagen: "assets/images/galaxy/3.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 72,
    familia: "fuego",
    categoria: "holografico",
    nombre: "Espíritu de Fuego Holográfico",
    imagen: "assets/images/holofoil/3.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

{
    id: 6,
    familia: "patito",
    categoria: "base",
    nombre: "Espíritu Patito",
    imagen: "assets/images/base/6.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 24,
    familia: "patito",
    categoria: "oro",
    nombre: "Espíritu Patito Dorado",
    imagen: "assets/images/gold/6.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 41,
    familia: "patito",
    categoria: "gominola",
    nombre: "Espíritu Patito de Golosina",
    imagen: "assets/images/gummy/6.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 58,
    familia: "patito",
    categoria: "galaxy",
    nombre: "Espíritu Patito Galáctico",
    imagen: "assets/images/galaxy/6.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 74,
    familia: "patito",
    categoria: "holografico",
    nombre: "Espíritu Patito Holográfico",
    imagen: "assets/images/holofoil/6.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 8,
    familia: "fantasma",
    categoria: "base",
    nombre: "Espíritu Fantasma",
    imagen: "assets/images/base/8.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 26,
    familia: "fantasma",
    categoria: "oro",
    nombre: "Espíritu Fantasma Dorado",
    imagen: "assets/images/gold/8.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 43,
    familia: "fantasma",
    categoria: "gominola",
    nombre: "Espíritu Fantasma de Golosina",
    imagen: "assets/images/gummy/8.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 60,
    familia: "fantasma",
    categoria: "galaxy",
    nombre: "Espíritu Fantasma Galáctico",
    imagen: "assets/images/galaxy/8.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 75,
    familia: "fantasma",
    categoria: "holografico",
    nombre: "Espíritu Fantasma Holográfico",
    imagen: "assets/images/holofoil/8.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

{
    id: 13,
    familia: "dormilon",
    categoria: "base",
    nombre: "Espíritu Dormilón",
    imagen: "assets/images/base/13.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 31,
    familia: "dormilon",
    categoria: "oro",
    nombre: "Espíritu Dormilón Dorado",
    imagen: "assets/images/gold/13.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 48,
    familia: "dormilon",
    categoria: "gominola",
    nombre: "Espíritu Dormilón de Golosina",
    imagen: "assets/images/gummy/13.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 65,
    familia: "dormilon",
    categoria: "galaxy",
    nombre: "Espíritu Dormilón Galáctico",
    imagen: "assets/images/galaxy/13.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 71,
    familia: "dormilon",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 7,
    familia: "demoniaco",
    categoria: "base",
    nombre: "Espíritu Demoníaco",
    imagen: "assets/images/base/7.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 25,
    familia: "demoniaco",
    categoria: "oro",
    nombre: "Espíritu Demoníaco Dorado",
    imagen: "assets/images/gold/7.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 42,
    familia: "demoniaco",
    categoria: "gominola",
    nombre: "Espíritu Demoníaco de Golosina",
    imagen: "assets/images/gummy/7.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 59,
    familia: "demoniaco",
    categoria: "galaxy",
    nombre: "Espíritu Demoníaco Galáctico",
    imagen: "assets/images/galaxy/7.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 76,
    familia: "demoniaco",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 12,
    familia: "punk",
    categoria: "base",
    nombre: "Espíritu Punk",
    imagen: "assets/images/base/12.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 30,
    familia: "punk",
    categoria: "oro",
    nombre: "Espíritu Punk Dorado",
    imagen: "assets/images/gold/12.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 47,
    familia: "punk",
    categoria: "gominola",
    nombre: "Espíritu Punk de Golosina",
    imagen: "assets/images/gummy/12.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 64,
    familia: "punk",
    categoria: "galaxy",
    nombre: "Espíritu Punk Galáctico",
    imagen: "assets/images/galaxy/12.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 77,
    familia: "punk",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 9,
    familia: "monarca",
    categoria: "base",
    nombre: "Espíritu Monarca",
    imagen: "assets/images/base/9.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 27,
    familia: "monarca",
    categoria: "oro",
    nombre: "Espíritu Monarca Dorado",
    imagen: "assets/images/gold/9.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 44,
    familia: "monarca",
    categoria: "gominola",
    nombre: "Espíritu Monarca de Golosina",
    imagen: "assets/images/gummy/9.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 61,
    familia: "monarca",
    categoria: "galaxy",
    nombre: "Espíritu Monarca Galáctico",
    imagen: "assets/images/galaxy/9.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 79,
    familia: "monarca",
    categoria: "holografico",
    nombre: "Espíritu Monarca Holográfico",
    imagen: "assets/images/holofoil/9.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

{
    id: 16,
    familia: "puntocero",
    categoria: "base",
    nombre: "Espíritu del Punto Cero",
    imagen: "assets/images/base/16.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 34,
    familia: "puntocero",
    categoria: "oro",
    nombre: "Espíritu del Punto Cero Dorado",
    imagen: "assets/images/gold/16.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 51,
    familia: "puntocero",
    categoria: "gominola",
    nombre: "Espíritu del Punto Cero de Golosina",
    imagen: "assets/images/gummy/16.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 68,
    familia: "puntocero",
    categoria: "galaxy",
    nombre: "Espíritu del Punto Cero Galáctico",
    imagen: "assets/images/galaxy/16.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 78,
    familia: "puntocero",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 5,
    familia: "palitodepez",
    categoria: "base",
    nombre: "Espíritu Palito de Pez",
    imagen: "assets/images/base/5.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 23,
    familia: "palitodepez",
    categoria: "oro",
    nombre: "Espíritu Palito de Pez Dorado",
    imagen: "assets/images/gold/5.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 40,
    familia: "palitodepez",
    categoria: "gominola",
    nombre: "Espíritu Palito de Pez de Golosina",
    imagen: "assets/images/gummy/5.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 57,
    familia: "palitodepez",
    categoria: "galaxy",
    nombre: "Espíritu Palito de Pez Galáctico",
    imagen: "assets/images/galaxy/5.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 80,
    familia: "palitodepez",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 10,
    familia: "goleador",
    categoria: "base",
    nombre: "Espíritu Goleador",
    imagen: "assets/images/base/10.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 28,
    familia: "goleador",
    categoria: "oro",
    nombre: "Espíritu Goleador Dorado",
    imagen: "assets/images/gold/10.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 45,
    familia: "goleador",
    categoria: "gominola",
    nombre: "Espíritu Goleador de Golosina",
    imagen: "assets/images/gummy/10.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 62,
    familia: "goleador",
    categoria: "galaxy",
    nombre: "Espíritu Goleador Galáctico",
    imagen: "assets/images/galaxy/10.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 82,
    familia: "goleador",
    categoria: "holografico",
    nombre: "Espíritu Goleador Holográfico",
    imagen: "assets/images/holofoil/10.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

{
    id: 11,
    familia: "aura",
    categoria: "base",
    nombre: "Espíritu de Aura",
    imagen: "assets/images/base/11.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 29,
    familia: "aura",
    categoria: "oro",
    nombre: "Espíritu de Aura Dorado",
    imagen: "assets/images/gold/11.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 46,
    familia: "aura",
    categoria: "gominola",
    nombre: "Espíritu de Aura de Golosina",
    imagen: "assets/images/gummy/11.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 63,
    familia: "aura",
    categoria: "galaxy",
    nombre: "Espíritu de Aura Galáctico",
    imagen: "assets/images/galaxy/11.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 81,
    familia: "aura",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 14,
    familia: "jefe",
    categoria: "base",
    nombre: "Espíritu Jefe",
    imagen: "assets/images/base/14.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 32,
    familia: "jefe",
    categoria: "oro",
    nombre: "Espíritu Jefe Dorado",
    imagen: "assets/images/gold/14.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 49,
    familia: "jefe",
    categoria: "gominola",
    nombre: "Espíritu Jefe de Golosina",
    imagen: "assets/images/gummy/14.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 66,
    familia: "jefe",
    categoria: "galaxy",
    nombre: "Espíritu Jefe Galáctico",
    imagen: "assets/images/galaxy/14.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 83,
    familia: "jefe",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 17,
    familia: "siniestro",
    categoria: "base",
    nombre: "Espíritu Siniestro",
    imagen: "assets/images/base/17.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 35,
    familia: "siniestro",
    categoria: "oro",
    nombre: "Espíritu Siniestro Dorado",
    imagen: "assets/images/gold/17.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 52,
    familia: "siniestro",
    categoria: "gominola",
    nombre: "Espíritu Siniestro de Golosina",
    imagen: "assets/images/gummy/17.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 69,
    familia: "siniestro",
    categoria: "galaxy",
    nombre: "Espíritu Siniestro Galáctico",
    imagen: "assets/images/galaxy/17.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
/*{
    id: 85,
    familia: "siniestro",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    disponibilidad: DISPONIBILIDAD.PROXIMAMENTE
},*/

{
    id: 18,
    familia: "maniquemado",
    categoria: "base",
    nombre: "Maní Quemado",
    imagen: "assets/images/base/18.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

/* Para futuras activaciones de Gustambitos */


{
    id: 4,
    familia: "aire",
    categoria: "base",
    nombre: "Espíritu de Aire",
    imagen: "assets/images/base/4.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 22,
    familia: "aire",
    categoria: "oro",
    nombre: "Espíritu de Aire Dorado",
    imagen: "assets/images/gold/4.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 39,
    familia: "aire",
    categoria: "gominola",
    nombre: "Espíritu de Aire de Golosina",
    imagen: "assets/images/gummy/4.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 56,
    familia: "aire",
    categoria: "galaxy",
    nombre: "Espíritu de Aire Galáctico",
    imagen: "assets/images/galaxy/4.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 73,
    familia: "aire",
    categoria: "holografico",
    nombre: "Espíritu de Aire Holográfico",
    imagen: "assets/images/holofoil/4.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},



{
    id: 15,
    familia: "siete",
    categoria: "base",
    nombre: "Espíritu Siete",
    imagen: "assets/images/base/15.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 33,
    familia: "siete",
    categoria: "oro",
    nombre: "Espíritu de los Siete Dorado",
    imagen: "assets/images/gold/15.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 50,
    familia: "siete",
    categoria: "gominola",
    nombre: "Espíritu de los Siete de Golosina",
    imagen: "assets/images/gummy/15.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 67,
    familia: "siete",
    categoria: "galaxy",
    nombre: "Espíritu de los Siete Galáctico",
    imagen: "assets/images/galaxy/15.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 84,
    familia: "siete",
    categoria: "holografico",
    nombre: "Espíritu de los Siete Holográfico",
    imagen: "assets/images/holofoil/15.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 85,
    familia: "vini",
    categoria: "base",
    nombre: "Espíritu Vini Jr",
    imagen: "assets/images/base/vini.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 86,
    familia: "pollo",
    categoria: "base",
    nombre: "Espíritu Pollo FNCS",
    imagen: "assets/images/base/pollo.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

/* Variantes futuras de Maní Quemado */

/*{
    id: 200,
    familia: "maniquemado",
    categoria: "oro",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 201,
    familia: "maniquemado",
    categoria: "gominola",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 202,
    familia: "maniquemado",
    categoria: "galaxy",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 203,
    familia: "maniquemado",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},*/

/* Variantes futuras de Vini */

/*{
    id: 204,
    familia: "vini",
    categoria: "oro",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 205,
    familia: "vini",
    categoria: "gominola",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 206,
    familia: "vini",
    categoria: "galaxy",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 207,
    familia: "vini",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},*/

/* Variantes futuras de Pollo */

/*{
    id: 208,
    familia: "pollo",
    categoria: "oro",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 209,
    familia: "pollo",
    categoria: "gominola",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 210,
    familia: "pollo",
    categoria: "galaxy",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},
{
    id: 211,
    familia: "pollo",
    categoria: "holografico",
    nombre: "Próximamente",
    imagen: "assets/images/x.png",
    disponibilidad: DISPONIBILIDAD.NO_EXISTE
},*/
{
    id: 15,
    familia: "batman",
    categoria: "base",
    nombre: "Batman",
    imagen: "assets/images/base/batman.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 33,
    familia: "batman",
    categoria: "oro",
    nombre: "Batman Dorado",
    imagen: "assets/images/gold/batman.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 50,
    familia: "batman",
    categoria: "gominola",
    nombre: "Batman de Golosina",
    imagen: "assets/images/gummy/batman.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 67,
    familia: "batman",
    categoria: "galaxy",
    nombre: "Batman Galáctico",
    imagen: "assets/images/galaxy/batman.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 84,
    familia: "batman",
    categoria: "holografico",
    nombre: "Batman Holográfico",
    imagen: "assets/images/holofoil/batman.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
}, 
/* ======== CUBO ======== */

{
    id: 212,
    familia: "tierra",
    categoria: "cubo",
    nombre: "Espíritu de Tierra Cubo",
    imagen: "assets/images/cubo/tierra.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 213,
    familia: "fuego",
    categoria: "cubo",
    nombre: "Espíritu de Fuego Cubo",
    imagen: "assets/images/cubo/fuego.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 214,
    familia: "dormilon",
    categoria: "cubo",
    nombre: "Espíritu Dormilón Cubo",
    imagen: "assets/images/cubo/dormilon.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 215,
    familia: "punk",
    categoria: "cubo",
    nombre: "Espíritu Punk Cubo",
    imagen: "assets/images/cubo/punk.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 216,
    familia: "palitodepez",
    categoria: "cubo",
    nombre: "Espíritu Palito de Pez Cubo",
    imagen: "assets/images/cubo/palitodepez.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 217,
    familia: "jefe",
    categoria: "cubo",
    nombre: "Espíritu Jefe Cubo",
    imagen: "assets/images/cubo/jefe.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 218,
    familia: "siniestro",
    categoria: "cubo",
    nombre: "Espíritu Siniestro Cubo",
    imagen: "assets/images/cubo/siniestro.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},
{
    id: 219,
    familia: "batman",
    categoria: "cubo",
    nombre: "Espíritu Batman Cubo",
    imagen: "assets/images/cubo/batman.png",
    disponibilidad: DISPONIBILIDAD.DISPONIBLE
},

];