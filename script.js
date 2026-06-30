const seleccionados = JSON.parse(localStorage.getItem("gustambitos")) || [];

const gustambitos = [
   {
    id: 1,
    nombre: "Espíritu de Agua",
    imagen: "assets/images/base/1.png",
    categoria: 1
},
{
    id: 2,
    nombre: "Espíritu de Tierra",
    imagen: "assets/images/base/2.png",
    categoria: 1
},
{
    id: 3,
    nombre: "Espíritu de Fuego",
    imagen: "assets/images/base/3.png",
    categoria: 1
},
/*
{
    id: 4,
    nombre: "Espíritu de Aire",
    imagen: "assets/images/base/4.png",
    categoria: 1
}, */
{
    id: 5,
    nombre: "Espíritu Pez",
    imagen: "assets/images/base/5.png",
    categoria: 1
},
{
    id: 6,
    nombre: "Espíritu Pato",
    imagen: "assets/images/base/6.png",
    categoria: 1
},
{
    id: 7,
    nombre: "Espíritu Demonio",
    imagen: "assets/images/base/7.png",
    categoria: 1
},
{
    id: 8,
    nombre: "Espíritu Fantasma",
    imagen: "assets/images/base/8.png",
    categoria: 1
},
{
    id: 9,
    nombre: "Espíritu Rey",
    imagen: "assets/images/base/9.png",
    categoria: 1
},
{
    id: 10,
    nombre: "Espíritu Atacante",
    imagen: "assets/images/base/10.png",
    categoria: 1
},
{
    id: 11,
    nombre: "Espíritu del Aura",
    imagen: "assets/images/base/11.png",
    categoria: 1
},
{
    id: 12,
    nombre: "Espíritu Punk",
    imagen: "assets/images/base/12.png",
    categoria: 1
},
{
    id: 13,
    nombre: "Espíritu de los Sueños Normal",
    imagen: "assets/images/base/13.png",
    categoria: 1
},
{
    id: 14,
    nombre: "Espíritu Jefe",
    imagen: "assets/images/base/14.png",
    categoria: 1
},
/*{
    id: 15,
    nombre: "Espíritu Siete",
    imagen: "assets/images/base/15.png",
    categoria: 1
},*/
{
    id: 16,
    nombre: "Espíritu del Punto Cero Normal",
    imagen: "assets/images/base/16.png",
    categoria: 1
},
{
    id: 17,
    nombre: "Espíritu Siniestro",
    imagen: "assets/images/base/17.png",
    categoria: 1
},
{
    id: 18,
    nombre: "Maní Quemado",
    imagen: "assets/images/base/18.png",
    categoria: 1
},
{
    id: 19,
    nombre: "Espíritu de Agua Dorado",
    imagen: "assets/images/gold/1.png",
    categoria: 2
},
{
    id: 20,
    nombre: "Espíritu de Tierra Dorado",
    imagen: "assets/images/gold/2.png",
    categoria: 2
},
{
    id: 21,
    nombre: "Espíritu de Fuego Dorado",
    imagen: "assets/images/gold/3.png",
    categoria: 2
},
/*{
    id: 22,
    nombre: "Espíritu de Aire Dorado",
    imagen: "assets/images/gold/4.png",
    categoria: 2
},*/
{
    id: 23,
    nombre: "Espíritu Pez Dorado",
    imagen: "assets/images/gold/5.png",
    categoria: 2
},
{
    id: 24,
    nombre: "Espíritu Pato Dorado",
    imagen: "assets/images/gold/6.png",
    categoria: 2
},
{
    id: 25,
    nombre: "Espíritu Demonio Dorado",
    imagen: "assets/images/gold/7.png",
    categoria: 2
},
{
    id: 26,
    nombre: "Espíritu Fantasma Dorado",
    imagen: "assets/images/gold/8.png",
    categoria: 2
},
{
    id: 27,
    nombre: "Espíritu Rey Dorado",
    imagen: "assets/images/gold/9.png",
    categoria: 2
},
{
    id: 28,
    nombre: "Espíritu Atacante Dorado",
    imagen: "assets/images/gold/10.png",
    categoria: 2
},
{
    id: 29,
    nombre: "Espíritu del Aura Dorado",
    imagen: "assets/images/gold/11.png",
    categoria: 2
},
{
    id: 30,
    nombre: "Espíritu Punk Dorado",
    imagen: "assets/images/gold/12.png",
    categoria: 2
},
{
    id: 31,
    nombre: "Espíritu de los Sueños Dorado",
    imagen: "assets/images/gold/13.png",
    categoria: 2
},
{
    id: 32,
    nombre: "Espíritu Jefe Dorado",
    imagen: "assets/images/gold/14.png",
    categoria: 2
},
/*{
    id: 33,
    nombre: "Espíritu Siete Dorado",
    imagen: "assets/images/gold/15.png",
    categoria: 2
},*/
{
    id: 34,
    nombre: "Espíritu del Punto Cero Dorado",
    imagen: "assets/images/gold/16.png",
    categoria: 2
},
{
    id: 35,
    nombre: "Espíritu Siniestro Dorado",
    imagen: "assets/images/gold/17.png",
    categoria: 2
},
   {
    id: 36,
    nombre: "Espíritu de Agua Golosina",
    imagen: "assets/images/gummy/1.png",
    categoria: 3
},
{
    id: 37,
    nombre: "Espíritu de Tierra Golosina",
    imagen: "assets/images/gummy/2.png",
    categoria: 3
},
{
    id: 38,
    nombre: "Espíritu de Fuego Golosina",
    imagen: "assets/images/gummy/3.png",
    categoria: 3
},
/*{
    id: 39,
    nombre: "Espíritu de Aire Golosina",
    imagen: "assets/images/gummy/4.png",
    categoria: 3
},*/
{
    id: 40,
    nombre: "Espíritu Pez Golosina",
    imagen: "assets/images/gummy/5.png",
    categoria: 3
},
{
    id: 41,
    nombre: "Espíritu Pato Golosina",
    imagen: "assets/images/gummy/6.png",
    categoria: 3
},
{
    id: 42,
    nombre: "Espíritu Demonio Golosina",
    imagen: "assets/images/gummy/7.png",
    categoria: 3
},
{
    id: 43,
    nombre: "Espíritu Fantasma Golosina",
    imagen: "assets/images/gummy/8.png",
    categoria: 3
},
{
    id: 44,
    nombre: "Espíritu Rey Golosina",
    imagen: "assets/images/gummy/9.png",
    categoria: 3
},
{
    id: 45,
    nombre: "Espíritu Atacante Golosina",
    imagen: "assets/images/gummy/10.png",
    categoria: 3
},
{
    id: 46,
    nombre: "Espíritu del Aura Golosina",
    imagen: "assets/images/gummy/11.png",
    categoria: 3
},
{
    id: 47,
    nombre: "Espíritu Punk Golosina",
    imagen: "assets/images/gummy/12.png",
    categoria: 3
},
{
    id: 48,
    nombre: "Espíritu de los Sueños Golosina",
    imagen: "assets/images/gummy/13.png",
    categoria: 3
},
{
    id: 49,
    nombre: "Espíritu Jefe Golosina",
    imagen: "assets/images/gummy/14.png",
    categoria: 3
},
/*{
    id: 50,
    nombre: "Espíritu Siete Golosina",
    imagen: "assets/images/gummy/15.png",
    categoria: 3
},*/
{
    id: 51,
    nombre: "Espíritu del Punto Cero Golosina",
    imagen: "assets/images/gummy/16.png",
    categoria: 3
},
{
    id: 52,
    nombre: "Espíritu Siniestro Golosina",
    imagen: "assets/images/gummy/17.png",
    categoria: 3
},
    {
    id: 53,
    nombre: "Espíritu de Agua Galaxia",
    imagen: "assets/images/galaxy/1.png",
    categoria: 4
},
{
    id: 54,
    nombre: "Espíritu de Tierra Galaxia",
    imagen: "assets/images/galaxy/2.png",
    categoria: 4
},
{
    id: 55,
    nombre: "Espíritu de Fuego Galaxia",
    imagen: "assets/images/galaxy/3.png",
    categoria: 4
},
/*{
    id: 56,
    nombre: "Espíritu de Aire Galaxia",
    imagen: "assets/images/galaxy/4.png",
    categoria: 4
},*/
{
    id: 57,
    nombre: "Espíritu Pez Galaxia",
    imagen: "assets/images/galaxy/5.png",
    categoria: 4
},
{
    id: 58,
    nombre: "Espíritu Pato Galaxia",
    imagen: "assets/images/galaxy/6.png",
    categoria: 4
},
{
    id: 59,
    nombre: "Espíritu Demonio Galaxia",
    imagen: "assets/images/galaxy/7.png",
    categoria: 4
},
{
    id: 60,
    nombre: "Espíritu Fantasma Galaxia",
    imagen: "assets/images/galaxy/8.png",
    categoria: 4
},
{
    id: 61,
    nombre: "Espíritu Rey Galaxia",
    imagen: "assets/images/galaxy/9.png",
    categoria: 4
},
{
    id: 62,
    nombre: "Espíritu Atacante Galaxia",
    imagen: "assets/images/galaxy/10.png",
    categoria: 4
},
{
    id: 63,
    nombre: "Espíritu del Aura Galaxia",
    imagen: "assets/images/galaxy/11.png",
    categoria: 4
},
{
    id: 64,
    nombre: "Espíritu Punk Galaxia",
    imagen: "assets/images/galaxy/12.png",
    categoria: 4
},
{
    id: 65,
    nombre: "Espíritu de los Sueños Galaxia",
    imagen: "assets/images/galaxy/13.png",
    categoria: 4
},
{
    id: 66,
    nombre: "Espíritu Jefe Galaxia",
    imagen: "assets/images/galaxy/14.png",
    categoria: 4
},
/*{
    id: 67,
    nombre: "Espíritu Siete Galaxia",
    imagen: "assets/images/galaxy/15.png",
    categoria: 4
},*/
{
    id: 68,
    nombre: "Espíritu del Punto Cero Galaxia",
    imagen: "assets/images/galaxy/16.png",
    categoria: 4
},
{
    id: 69,
    nombre: "Espíritu Siniestro Galaxia",
    imagen: "assets/images/galaxy/17.png",
    categoria: 4
},


{   id: 999,
    nombre: "Proximamente",
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