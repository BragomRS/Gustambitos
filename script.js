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
{
    id: 4,
    nombre: "Espíritu de Aire",
    imagen: "assets/images/base/4.png",
    categoria: 1
},
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
    nombre: "Espíritu de los Sueños",
    imagen: "assets/images/base/13.png",
    categoria: 1
},
{
    id: 14,
    nombre: "Espíritu Jefe",
    imagen: "assets/images/base/14.png",
    categoria: 1
},
{
    id: 15,
    nombre: "Espíritu Siete",
    imagen: "assets/images/base/15.png",
    categoria: 1
},
{
    id: 16,
    nombre: "Espíritu del Punto Cero",
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
    id: 3,
    nombre: "Gustambito 3",
    imagen: "assets/images/ejemplo.png",
    categoria: 2
},
{
    id: 4,
    nombre: "Gustambito 4",
    imagen: "assets/images/ejemplo.png",
    categoria: 2
},
    {
        id: 5,
        nombre: "Gustambito 5",
        imagen: "assets/images/ejemplo.png",
        categoria: 3
    },
    {
        id: 6,
        nombre: "Gustambito 6",
        imagen: "assets/images/ejemplo.png",
        categoria: 3
    },
    {
    id: 7,
    nombre: "Gustambito 7",
    imagen: "assets/images/ejemplo.png",
    categoria: 4
},
{   id: 8,
    nombre: "Gustambito 8",
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