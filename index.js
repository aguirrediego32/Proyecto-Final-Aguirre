let contenedorProductos = document.getElementById("page-content");

const KEY_PRODUCTOS = "productos"
const PRODUCTOS_STR = localStorage.getItem(KEY_PRODUCTOS);

function cargarProductos(listaProductos) {
    localStorage.setItem(KEY_PRODUCTOS, JSON.stringify(listaProductos))
}


function mostrarProductos(listaProductos) { 
    contenedorProductos.innerHTML = ""

    for (const producto of listaProductos) {
        let column = document.createElement("div");
        column.innerHTML = `<div class ="product-container">
        <h3>${producto.nombre}<h3>
        <img src="${producto.imagen}"/>
        <h3>${producto.precio}<h3>
        <button type="button" class="btn btn-outline-primary">Agregar</button>
        </div>
        `
        contenedorProductos.append(column)
    }
}

fetch('/productos.json') //obtengo la lista de productos mediante el archivo productos.json
    .then((resp) => resp.json())
    .then((data) => {
        cargarProductos(data)
        mostrarProductos(data)
    })
