
let productos = [
    {
        id: 1,
        nombre: "Celular",
        precio:  270000,
        imagen: "images/celular.jpg",
        stock: 20
    },
    {
        id: 2,
        nombre: "TV",
        precio: 90000,
        imagen: "images/tv.jpg",
        stock: 20
    },
    {
        id: 3,
        nombre: "Notebook",
        precio: 200000,
        imagen: "images/notebook.jpg",
        stock: 20
    },
    {
        id: 4,
        nombre: "Torre de sonido",
        precio: 180000,
        imagen: "images/audio.jpg",
        stock: 20
    },
    {
        id: 5,
        nombre: "Playstation",
        precio: 320000,
        imagen: "images/playstation.jpg",
        stock: 20
    },
    {
        id: 6,
        nombre: "Tablet",
        precio: 70000,
        imagen: "images/tablet.jpg",
        stock: 20
    },
    {
        id: 7,
        nombre: "Monitor",
        precio: 250000,
        imagen: "images/monitor.jpg",
        stock: 20
    },
    {
        id: 8,
        nombre: "Camara",
        precio: 280000,
        imagen: "images/camara.jpg",
        stock: 20
    }
]

let contenedorProductos = document.getElementById("page-content");

const KEY_PRODUCTOS = "productos"
const PRODUCTOS_STR = localStorage.getItem(KEY_PRODUCTOS);

function cargarProductos(){
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(productos))
}

cargarProductos()

function displayProductos(listaProductos,contenedor){
    let productosHTML = "";
    listaProductos.forEach(element => {
        productosHTML +=
        `<div class="product-container">
        <h3>${element.nombre}</h3>
        <img src="${element.imagen}" />
        <h3>${element.precio}</h3>
        <button type="button" class="btn btn-outline-primary">Agregar</button>
    </div>`
    });
    document.getElementById("page-content").innerHTML = productosHTML;
}

displayProductos(productos)