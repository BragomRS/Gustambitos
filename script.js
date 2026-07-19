// ================================
// Gustambitos v3
// ================================

// Contenedor principal del álbum
let album;

// Índice para acceso rápido a los Gustambitos
let indice = {};

// Constante para el almacenamiento local 
const STORAGE_KEY = "gustambitos_2";

//para el progeso
let contador;
let porcentaje;
let barraProgreso;


// ================================
// ESTADOS de tarjetas
// ================================

const ESTADOS = {

    INACTIVO: 0,

    ACTIVO: 1,

    CORONADO: 2

};



// ================================
// ALMACENAMIENTO
// ================================
function guardarEstado() {

    const datos = {};

    document.querySelectorAll(".tarjeta").forEach(tarjeta => {

        if (!tarjeta.dataset.id) return;

        datos[tarjeta.dataset.id] = Number(tarjeta.dataset.estado);

    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(datos));

}
function cargarEstado() {

    const datos = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!datos) return;

    document.querySelectorAll(".tarjeta").forEach(tarjeta => {

        if (!tarjeta.dataset.id) return;

        const estado = datos[tarjeta.dataset.id];

        if (estado === undefined) return;

        tarjeta.dataset.estado = estado;

        actualizarVisualTarjeta(tarjeta);

    });

}

// ================================
// INICIO
// ================================

document.addEventListener("DOMContentLoaded", iniciar);



function iniciar() {

    console.clear();

    console.log("=================================");
    console.log("   Gustambitos v3 iniciado");
    console.log("=================================");

    // Obtener elementos del DOM
    obtenerElementos();

    // Ordenar la información
    ordenarDatos();

    // Crear índice de búsqueda
    crearIndice();

    // Calcular categorías visibles
    const categoriasVisibles = categorias.filter(c => c.visible);

    document.documentElement.style.setProperty(
        "--columnas-categorias",
        categoriasVisibles.length
    );

    // Dibujar el álbum
    dibujarAlbum();

    // Carga informacion guardada en cache sobre data storage
    cargarEstado();

    // Para la barra de estado
    actualizarProgreso();

    // Registra eventos del click
    registrarEventos();

}
// ================================
// ELEMENTOS
// ================================

function obtenerElementos() {

    album = document.getElementById("album");
    
    contador = document.getElementById("contador");

    porcentaje = document.getElementById("porcentaje");

    barraProgreso = document.getElementById("barra-progreso");

}

// ================================
// EVENTOS
// ================================

function registrarEventos() {

    album.addEventListener("click", manejarClickAlbum);

}
// MANEJADOR del click
function manejarClickAlbum(evento) {

    const tarjeta = evento.target.closest(".tarjeta");

    if (!tarjeta) return;

    console.log(tarjeta.dataset);

    cambiarEstadoTarjeta(tarjeta);

}


// ================================
// DATOS
// ================================

function ordenarDatos() {

    familias.sort((a, b) => a.orden - b.orden);

    categorias.sort((a, b) => a.orden - b.orden);

}

function crearIndice() {

    indice = {};

    gustambitos.forEach(gustambito => {

        const clave = `${gustambito.familia}-${gustambito.categoria}`;

        indice[clave] = gustambito;

    });

    // Verificar que el índice se creó correctamente
    console.log("Índice creado:");
    console.table(indice);

}

// ================================
// INTERFAZ
// ================================

function dibujarAlbum() {

    album.innerHTML = "";

    crearEncabezado();

    crearFilas();

}

function crearEncabezado() {

    const fila = document.createElement("div");

    fila.className = "fila encabezado";

    // Esquina superior izquierda
    const esquina = document.createElement("div");
    esquina.className = "celda esquina";
    fila.appendChild(esquina);

    categorias
    .filter(c => c.visible)
    .forEach(categoria => {

        const celda = document.createElement("div");

        celda.className = "celda titulo";

        celda.textContent = categoria.nombre;

        fila.appendChild(celda);

    });

    album.appendChild(fila);

}

function crearFilas() {

    familias.forEach(familia => {

        const fila = document.createElement("div");

        fila.className = "fila";

        // Nombre de la familia
        const nombre = document.createElement("div");

        nombre.className = "celda familia";

        nombre.textContent = familia.nombre;

        fila.appendChild(nombre);

categorias
    .filter(c => c.visible)
    .forEach(categoria => {

        const celda = document.createElement("div");

        celda.className = "celda";

        const clave = `${familia.id}-${categoria.id}`;

        const gustambito = indice[clave];

        const tarjeta = crearTarjeta(gustambito);

        celda.appendChild(tarjeta);

        fila.appendChild(celda);

    });

        album.appendChild(fila);

    });

}


function crearTarjeta(gustambito) {

    const tarjeta = document.createElement("div");

    tarjeta.className = "tarjeta";

    // Tarjeta vacía
    if (!gustambito) {

        tarjeta.classList.add("vacia");

        return tarjeta;

    }

    // Datos del Gustambito
    tarjeta.dataset.id = gustambito.id;
    tarjeta.dataset.familia = gustambito.familia;
    tarjeta.dataset.categoria = gustambito.categoria;
    tarjeta.dataset.nombre = gustambito.nombre;
    tarjeta.dataset.estado = ESTADOS.INACTIVO;
    tarjeta.dataset.disponibilidad = gustambito.disponibilidad;

    // Clase según categoría
    tarjeta.classList.add(`categoria-${gustambito.categoria}`);

    // Contenido
    const contenido = document.createElement("div");
    contenido.className = "contenido-tarjeta";

    contenido.appendChild(crearImagen(gustambito));

    tarjeta.appendChild(contenido);

    if(gustambito.categoria === "gominola"){

        tarjeta.appendChild(crearAzucar());

    }

    if(gustambito.categoria === "galaxy"){

        tarjeta.appendChild(crearEstrellasGalaxy());

    }

    tarjeta.appendChild(crearCorona());
    

    return tarjeta;

}

function crearImagen(gustambito) {

    const imagen = document.createElement("img");

    imagen.src = gustambito.imagen;

    imagen.alt = gustambito.nombre;

    imagen.draggable = false;

    imagen.className = "imagen-gustambito";

    return imagen;

}

// ================================
// Para ESTADOS DE LAS TARJETAS
// ================================

function cambiarEstadoTarjeta(tarjeta){

    if (
    tarjeta.dataset.disponibilidad !== DISPONIBILIDAD.DISPONIBLE
) {
    return;
}

    let estado = Number(tarjeta.dataset.estado);

    switch (estado) {

        case ESTADOS.INACTIVO:

            estado = ESTADOS.ACTIVO;
            break;

        case ESTADOS.ACTIVO:

            estado = ESTADOS.CORONADO;
            break;

        default:

            estado = ESTADOS.INACTIVO;

    }

    tarjeta.dataset.estado = estado;

    actualizarVisualTarjeta(tarjeta);

    guardarEstado();

    actualizarProgreso();

}

function actualizarVisualTarjeta(tarjeta){

    tarjeta.classList.remove("activa","coronada");

    const estado = Number(tarjeta.dataset.estado);

    if(estado === ESTADOS.ACTIVO){

        tarjeta.classList.add("activa");
        reproducirEfecto(tarjeta);

    }

    if(estado === ESTADOS.CORONADO){

        tarjeta.classList.add("coronada");
        reproducirEfecto(tarjeta);

    }

}

function crearCorona() {

    const corona = document.createElement("img");

    corona.src = "assets/images/corona.jpg";

    corona.className = "corona";

    corona.draggable = false;

    return corona;

}


// ================================
// PROGRESO
// ================================

function actualizarProgreso() {

    // Solo tarjetas disponibles
    const tarjetas = document.querySelectorAll(
        '.tarjeta[data-id][data-disponibilidad="disponible"]'
    );

    const total = tarjetas.length;

    let obtenidas = 0;

    tarjetas.forEach(tarjeta => {

        const estado = Number(tarjeta.dataset.estado);

        if (estado !== ESTADOS.INACTIVO) {

            obtenidas++;

        }

    });

    const progreso = total === 0
        ? 0
        : Math.round((obtenidas / total) * 100);

    contador.textContent = `${obtenidas} / ${total}`;

    porcentaje.textContent = `${progreso}%`;

    barraProgreso.style.width = `${progreso}%`;

}

document.addEventListener("contextmenu", (e) => {

    e.preventDefault();

});

document.addEventListener("dragstart", (e) => {

    e.preventDefault();

});

document.addEventListener("selectstart", (e) => {

    e.preventDefault();

});


function crearEstrellasGalaxy() {

    const estrellas = document.createElement("div");

    estrellas.className = "estrellas-galaxy";

    for (let i = 1; i <= 5; i++) {

        const estrella = document.createElement("span");

        estrella.className = `estrella estrella${i}`;

        estrellas.appendChild(estrella);

    }

    return estrellas;

}

function crearAzucar() {

    const azucar = document.createElement("div");

    azucar.className = "azucar";

    for(let i = 0; i < 50; i++){

        const cristal = document.createElement("span");

        cristal.className = "cristal";

const margen = 2;

cristal.style.left = (margen + Math.random() * (100 - margen * 2)) + "%";
cristal.style.top = (margen + Math.random() * (100 - margen * 2)) + "%";

        cristal.style.animationDelay = (Math.random() * 5) + "s";

        azucar.appendChild(cristal);

    }

    return azucar;

}


function reproducirEfecto(tarjeta){

    tarjeta.classList.add("animando");

    setTimeout(()=>{

        tarjeta.classList.remove("animando");

    },2400);

}