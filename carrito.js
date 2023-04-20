const KEY_PRODUCTOS_CARRITO = "productosCarrito";
let contenedorCarrito = document.getElementById("contenedor-productos-compra");
let btnFinalizar = document.getElementById("finalizar-compra");

btnFinalizar.addEventListener('click', () => {
    const PRODUCTOS_CARRITO_STR = localStorage.getItem(KEY_PRODUCTOS_CARRITO);
    if (!PRODUCTOS_CARRITO_STR) {
        Swal.fire({
            title: 'Error',
            text: 'No hay productos en el carrito!!',
            icon: 'error',
            confirmButtonText: 'volver'
        }).then(result => {
            window.location.href = 'index.html'
        })
    } else {
        localStorage.removeItem(KEY_PRODUCTOS_CARRITO)
        contenedorCarrito.innerHTML = ""
        Swal.fire({
            title: 'Gracias por su compra',
            text: 'Compra realizada correctamente!',
            icon: 'success',
            confirmButtonText: 'ok'
        }).then(result => {
            window.location.href = 'index.html'
        })
    }
})

function pintarCompra() {
    let local = localStorage.getItem(KEY_PRODUCTOS_CARRITO);
    let compras = JSON.parse(local)
    if (local) {
        for (producto of compras) {
            let column = document.createElement("div")
            column.className = "col-md-4 mt-3";
            column.innerHTML = `
            <div class ="product-container">
                <div class="card-body">
                    <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                    <p class="card-text">Precio Unitario: $<b>${producto.precio}</b></p>
                    <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                    <p class="card-text">Subtotal: $<b>${parseFloat(producto.precio) * parseFloat(producto.cantidad)}</b></p>
                    <img src="${producto.imagen}">
                <div>
            </div>    
            `;
            contenedorCarrito.append(column)
        }
    }
}

function pintarTotal() {
    let local = localStorage.getItem(KEY_PRODUCTOS_CARRITO)
    let compras = JSON.parse(local)
    if (local) {
        let total = 0
        for (producto of compras) {
            total += (parseFloat(producto.precio) * parseFloat(producto.cantidad))
        }
        let p = document.createElement('p')
        p.innerHTML = `El total es: $<b>${total}</b>`
        contenedorCarrito.append(p)
    }
}

pintarCompra()
pintarTotal()