const gustambitos = [
    {
        nombre: "Gustambito 1",
        imagen: "assets/images/ejemplo.png",
        categoria: 1
    },
    {
        nombre: "Gustambito 2",
        imagen: "assets/images/ejemplo.png",
        categoria: 1
    },
    {
        nombre: "Gustambito 3",
        imagen: "assets/images/ejemplo.png",
        categoria: 2
    },
    {
        nombre: "Gustambito 4",
        imagen: "assets/images/ejemplo.png",
        categoria: 2
    },
    {
        nombre: "Gustambito 5",
        imagen: "assets/images/ejemplo.png",
        categoria: 3
    },
    {
        nombre: "Gustambito 6",
        imagen: "assets/images/ejemplo.png",
        categoria: 3
    },
    {
    nombre: "Gustambito 7",
    imagen: "assets/images/ejemplo.png",
    categoria: 4
},
{
    nombre: "Gustambito 8",
    imagen: "assets/images/ejemplo.png",
    categoria: 5
}
];

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

    // Activar/desactivar
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("activa");
    });

    // Agregar al contenedor correcto
    contenedor.appendChild(tarjeta);

});