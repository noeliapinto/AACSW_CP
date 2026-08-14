/* eslint complexity: ["error", 5] */

function calcularDescuento(cliente, totalCompra, cupon, productos) {
    let descuento = 0;

    if (cliente.esVip) {
        descuento += 15;
    } else if (cliente.antiguedadAnios > 5) {
        descuento += 10;
    }

    if (totalCompra > 100000) {
        descuento += 5;
    }

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].stock === 0) {
            console.log("Producto sin stock: " + productos[i].nombre);
        }
    }

    switch (cupon) {
        case "BIENVENIDA":
            descuento += 10;
            break;
        case "FRECUENTE":
            descuento += 5;
            break;
        default:
            console.log("Cupón no válido");
    }

    return descuento;
}
