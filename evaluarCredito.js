/* eslint complexity: ["error", 5] */

function evaluarCredito(persona) {
    let resultado = "Solicitud en evaluación";

    if (persona.edad < 18) {
        return "Rechazado: edad insuficiente";
    }

    if (persona.ingresos <= 0) {
        return "Rechazado: ingresos no válidos";
    }

    if (persona.deudaMensual > persona.ingresos * 0.5) {
        return "Rechazado: nivel de endeudamiento elevado";
    }

    if (persona.puntajeCrediticio >= 800) {
        resultado = "Aprobado: riesgo bajo";
    } else if (persona.puntajeCrediticio >= 650) {
        resultado = "Aprobado con revisión";
    } else if (persona.puntajeCrediticio >= 500) {
        resultado = "Requiere garantía";
    } else {
        resultado = "Rechazado: riesgo elevado";
    }

    return resultado;
}
