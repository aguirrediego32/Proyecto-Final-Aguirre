let contenedorProductos = document.getElementById("page-content");
const KEY_PRODUCTOS = "productos"
const PRODUCTOS_STR = localStorage.getItem(KEY_PRODUCTOS);


function mostrarProductos(listaProductos) {
    contenedorProductos.innerHTML = ""

    for (const producto of listaProductos) {
        let column = document.createElement("div");
        column.innerHTML = `<div class ="product-container">
        <h3>${producto.nombre}<h3>
        <img src="${producto.imagen}"/>
        <h3>$${producto.precio}<h3>
        <button type="button" class="btn btn-outline-primary" id="${producto.id}">Agregar</button>
        </div>
        `
        contenedorProductos.append(column)
        document                            //para evitar el uso de 'onclick' sobre el button recupero el id luego de
            .getElementById(producto.id)        // inyectar el elemento
            .addEventListener("click", agregarACarrito)
    }
}

fetch('/productos.json') //obtengo la lista de productos mediante el archivo productos.json
    .then((resp) => resp.json())
    .then((data) => {
        mostrarProductos(data)
    })

function agregarACarrito(evento) {
    let unId = parseInt(evento.target.id)
    const KEY_PRODUCTOS_CARRITO = "productosCarrito";
    const PRODUCTOS_CARRITO_STR = localStorage.getItem(KEY_PRODUCTOS_CARRITO);
    const PRODUCTOS_CARRITO = (PRODUCTOS_CARRITO_STR && JSON.parse(PRODUCTOS_CARRITO_STR)) || [];

    fetch('/productos.json')
        .then((resp) => resp.json())
        .then((data) => {
            let productoElegido = data.find((producto) => producto.id === unId)
            let productoCarrito = PRODUCTOS_CARRITO.find(producto => producto.id === productoElegido.id)
            if(productoCarrito){
                let i = PRODUCTOS_CARRITO.indexOf(productoCarrito)
                PRODUCTOS_CARRITO.splice(i,1)
                productoCarrito.cantidad += 1
                PRODUCTOS_CARRITO.push(productoCarrito)
            }else{
                productoElegido.cantidad = 1
                PRODUCTOS_CARRITO.push(productoElegido);
            }
            
            
            localStorage.setItem(KEY_PRODUCTOS_CARRITO, JSON.stringify(PRODUCTOS_CARRITO));
        })
}    