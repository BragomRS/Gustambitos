const seleccionados = JSON.parse(localStorage.getItem("gustambitos")) || [];

const gustambitos = [
    {
    id: 1,
    nombre: "Gustambito 1",
    imagen: "assets/images/ejemplo.png",
    categoria: 1
},
    {
    id: 2,
    nombre: "Gustambito 2",
    imagen: "assets/images/ejemplo.png",
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