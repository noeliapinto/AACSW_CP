
/* eslint complexity: ["error", 5] */

function calcularCostoEnvio(paquete) {
    let costo = 2000;

    if (paquete.peso > 50) {
        costo += 5000;
    }

    switch (paquete.zona) {
        case "LOCAL":
            costo += 1000;
            break;

        case "NACIONAL":
            costo += 4000;
            break;

        case "INTERNACIONAL":
            costo += 12000;
            break;

        default:
            costo += 7000;
    }

    for (let i = 0; i < paquete.productos.length; i++) {
        if (paquete.productos[i].fragil) {
            costo += 500;
        }
    }

    if (paquete.urgente) {
        costo *= 1.5;
    }

    return costo;
}
