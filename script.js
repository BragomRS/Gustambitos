const seleccionados = JSON.parse(localStorage.getItem("gustambitos")) || [];

const gustambitos = [
{
    id: 1,
    nombre: "Espíritu de Agua",
    imagen: "assets/images/base/1.png",
    categoria: 1
},
{
    id: 19,
    nombre: "Espíritu de Agua Dorado",
    imagen: "assets/images/gold/1.png",
    categoria: 2
},
{
    id: 36,
    nombre: "Espíritu de Agua de Golosina",
    imagen: "assets/images/gummy/1.png",
    categoria: 3
},
{
    id: 53,
    nombre: "Espíritu de Agua Galáctico",
    imagen: "assets/images/galaxy/1.png",
    categoria: 4
},

{
    id: 2,
    nombre: "Espíritu de Tierra",
    imagen: "assets/images/base/2.png",
    categoria: 1
},
{
    id: 20,
    nombre: "Espíritu de Tierra Dorado",
    imagen: "assets/images/gold/2.png",
    categoria: 2
},
{
    id: 37,
    nombre: "Espíritu de Tierra de Golosina",
    imagen: "assets/images/gummy/2.png",
    categoria: 3
},
{
    id: 54,
    nombre: "Espíritu de Tierra Galáctico",
    imagen: "assets/images/galaxy/2.png",
    categoria: 4
},

{
    id: 3,
    nombre: "Espíritu de Fuego",
    imagen: "assets/images/base/3.png",
    categoria: 1
},
{
    id: 21,
    nombre: "Espíritu de Fuego Dorado",
    imagen: "assets/images/gold/3.png",
    categoria: 2
},
{
    id: 38,
    nombre: "Espíritu de Fuego de Golosina",
    imagen: "assets/images/gummy/3.png",
    categoria: 3
},
{
    id: 55,
    nombre: "Espíritu de Fuego Galáctico",
    imagen: "assets/images/galaxy/3.png",
    categoria: 4
},

{
    id: 6,
    nombre: "Espíritu Patito",
    imagen: "assets/images/base/6.png",
    categoria: 1
},
{
    id: 24,
    nombre: "Espíritu Patito Dorado",
    imagen: "assets/images/gold/6.png",
    categoria: 2
},
{
    id: 41,
    nombre: "Espíritu Patito de Golosina",
    imagen: "assets/images/gummy/6.png",
    categoria: 3
},
{
    id: 58,
    nombre: "Espíritu Patito Galáctico",
    imagen: "assets/images/galaxy/6.png",
    categoria: 4
},

{
    id: 8,
    nombre: "Espíritu Fantasma",
    imagen: "assets/images/base/8.png",
    categoria: 1
},
{
    id: 26,
    nombre: "Espíritu Fantasma Dorado",
    imagen: "assets/images/gold/8.png",
    categoria: 2
},
{
    id: 43,
    nombre: "Espíritu Fantasma de Golosina",
    imagen: "assets/images/gummy/8.png",
    categoria: 3
},
{
    id: 60,
    nombre: "Espíritu Fantasma Galáctico",
    imagen: "assets/images/galaxy/8.png",
    categoria: 4
},

{
    id: 13,
    nombre: "Espíritu Dormilón",
    imagen: "assets/images/base/13.png",
    categoria: 1
},
{
    id: 31,
    nombre: "Espíritu Dormilón Dorado",
    imagen: "assets/images/gold/13.png",
    categoria: 2
},
{
    id: 48,
    nombre: "Espíritu Dormilón de Golosina",
    imagen: "assets/images/gummy/13.png",
    categoria: 3
},
{
    id: 65,
    nombre: "Espíritu Dormilón Galáctico",
    imagen: "assets/images/galaxy/13.png",
    categoria: 4
},

{
    id: 7,
    nombre: "Espíritu Demoníaco",
    imagen: "assets/images/base/7.png",
    categoria: 1
},
{
    id: 25,
    nombre: "Espíritu Demoníaco Dorado",
    imagen: "assets/images/gold/7.png",
    categoria: 2
},
{
    id: 42,
    nombre: "Espíritu Demoníaco de Golosina",
    imagen: "assets/images/gummy/7.png",
    categoria: 3
},
{
    id: 59,
    nombre: "Espíritu Demoníaco Galáctico",
    imagen: "assets/images/galaxy/7.png",
    categoria: 4
},

{
    id: 12,
    nombre: "Espíritu Punk",
    imagen: "assets/images/base/12.png",
    categoria: 1
},
{
    id: 30,
    nombre: "Espíritu Punk Dorado",
    imagen: "assets/images/gold/12.png",
    categoria: 2
},
{
    id: 47,
    nombre: "Espíritu Punk de Golosina",
    imagen: "assets/images/gummy/12.png",
    categoria: 3
},
{
    id: 64,
    nombre: "Espíritu Punk Galáctico",
    imagen: "assets/images/galaxy/12.png",
    categoria: 4
},

{
    id: 9,
    nombre: "Espíritu Monarca",
    imagen: "assets/images/base/9.png",
    categoria: 1
},
{
    id: 27,
    nombre: "Espíritu Monarca Dorado",
    imagen: "assets/images/gold/9.png",
    categoria: 2
},
{
    id: 44,
    nombre: "Espíritu Monarca de Golosina",
    imagen: "assets/images/gummy/9.png",
    categoria: 3
},
{
    id: 61,
    nombre: "Espíritu Monarca Galáctico",
    imagen: "assets/images/galaxy/9.png",
    categoria: 4
},

{
    id: 16,
    nombre: "Espíritu del Punto Cero",
    imagen: "assets/images/base/16.png",
    categoria: 1
},
{
    id: 34,
    nombre: "Espíritu del Punto Cero Dorado",
    imagen: "assets/images/gold/16.png",
    categoria: 2
},
{
    id: 51,
    nombre: "Espíritu del Punto Cero de Golosina",
    imagen: "assets/images/gummy/16.png",
    categoria: 3
},
{
    id: 68,
    nombre: "Espíritu del Punto Cero Galáctico",
    imagen: "assets/images/galaxy/16.png",
    categoria: 4
},
{
    id: 5,
    nombre: "Espíritu Palito de Pez",
    imagen: "assets/images/base/5.png",
    categoria: 1
},
{
    id: 23,
    nombre: "Espíritu Palito de Pez Dorado",
    imagen: "assets/images/gold/5.png",
    categoria: 2
},
{
    id: 40,
    nombre: "Espíritu Palito de Pez de Golosina",
    imagen: "assets/images/gummy/5.png",
    categoria: 3
},
{
    id: 57,
    nombre: "Espíritu Palito de Pez Galáctico",
    imagen: "assets/images/galaxy/5.png",
    categoria: 4
},

{
    id: 10,
    nombre: "Espíritu Goleador",
    imagen: "assets/images/base/10.png",
    categoria: 1
},
{
    id: 28,
    nombre: "Espíritu Goleador Dorado",
    imagen: "assets/images/gold/10.png",
    categoria: 2
},
{
    id: 45,
    nombre: "Espíritu Goleador de Golosina",
    imagen: "assets/images/gummy/10.png",
    categoria: 3
},
{
    id: 62,
    nombre: "Espíritu Goleador Galáctico",
    imagen: "assets/images/galaxy/10.png",
    categoria: 4
},

{
    id: 11,
    nombre: "Espíritu de Aura",
    imagen: "assets/images/base/11.png",
    categoria: 1
},
{
    id: 29,
    nombre: "Espíritu de Aura Dorado",
    imagen: "assets/images/gold/11.png",
    categoria: 2
},
{
    id: 46,
    nombre: "Espíritu de Aura de Golosina",
    imagen: "assets/images/gummy/11.png",
    categoria: 3
},
{
    id: 63,
    nombre: "Espíritu de Aura Galáctico",
    imagen: "assets/images/galaxy/11.png",
    categoria: 4
},

{
    id: 14,
    nombre: "Espíritu Jefe",
    imagen: "assets/images/base/14.png",
    categoria: 1
},
{
    id: 32,
    nombre: "Espíritu Jefe Dorado",
    imagen: "assets/images/gold/14.png",
    categoria: 2
},
{
    id: 49,
    nombre: "Espíritu Jefe de Golosina",
    imagen: "assets/images/gummy/14.png",
    categoria: 3
},
{
    id: 66,
    nombre: "Espíritu Jefe Galáctico",
    imagen: "assets/images/galaxy/14.png",
    categoria: 4
},

{
    id: 18,
    nombre: "Maní Quemado",
    imagen: "assets/images/base/18.png",
    categoria: 1
},


/* Para futuras activaciones de gustambitos, hay que buscarles lugar */
/*
{
    id: 4,
    nombre: "Espíritu de Aire",
    imagen: "assets/images/base/4.png",
    categoria: 1
},
{
    id: 22,
    nombre: "Espíritu de Aire Dorado",
    imagen: "assets/images/gold/4.png",
    categoria: 2
},
{
    id: 39,
    nombre: "Espíritu de Aire de Golosina",
    imagen: "assets/images/gummy/4.png",
    categoria: 3
},
{
    id: 56,
    nombre: "Espíritu de Aire Galáctico",
    imagen: "assets/images/galaxy/4.png",
    categoria: 4
},

{
    id: 15,
    nombre: "Espíritu Siete",
    imagen: "assets/images/base/15.png",
    categoria: 1
},
{
    id: 33,
    nombre: "Espíritu de los Siete Dorado",
    imagen: "assets/images/gold/15.png",
    categoria: 2
},
{
    id: 50,
    nombre: "Espíritu de los Siete de Golosina",
    imagen: "assets/images/gummy/15.png",
    categoria: 3
},
{
    id: 67,
    nombre: "Espíritu de los Siete Galáctico",
    imagen: "assets/images/galaxy/15.png",
    categoria: 4
},
*/

/* Para futuras categorias */

{
    id: 999,
    nombre: "Próximamente",
    imagen: "assets/images/ejemplo.png",
    categoria: 5
}
];


function actualizarProgreso() {

    const total = gustambitos.length;
    const conseguidos = seleccionados.length;

    const porcentaje = Math.round((conseguidos / total) * 100);

    document.getElementById("contador").textContent =
        `${conseguidos} / ${total}`;

    document.getElementById("porcentaje").textContent =
        `${porcentaje}%`;

    document.getElementById("barra-progreso").style.width =
        `${porcentaje}%`;

}

// Recorremos todos los Gustambitos
gustambitos.forEach(gustambito => {

    // Buscamos el contenedor de su categoría
    const contenedor = document.getElementById(`categoria${gustambito.categoria}`);

    // Creamos la tarjeta
    const tarjeta = document.createElement("div");
    
    tarjeta.className = "tarjeta";

    tarjeta.innerHTML = `
        <img src="${gustambito.imagen}" alt="${gustambito.nombre}">
        <p>${gustambito.nombre}</p>
    `;

    // Selector del local 
    if (seleccionados.includes(gustambito.id)) {
        tarjeta.classList.add("activa");
    }

    // Activar/desactivar y guardar en localStorage
tarjeta.addEventListener("click", () => {

    tarjeta.classList.toggle("activa");

    if (tarjeta.classList.contains("activa")) {

        if (!seleccionados.includes(gustambito.id)) {
            seleccionados.push(gustambito.id);
        }

    } else {

        const indice = seleccionados.indexOf(gustambito.id);

        if (indice !== -1) {
            seleccionados.splice(indice, 1);
        }

    }

    localStorage.setItem("gustambitos", JSON.stringify(seleccionados));
    actualizarProgreso();

});

    // Agregar al contenedor correcto
    contenedor.appendChild(tarjeta);

});

// Actualizar el progreso al cargar la página
actualizarProgreso();