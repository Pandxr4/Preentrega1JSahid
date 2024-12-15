//variables
const tiposDeCambio = [
  { tipo: 'oficial', valor: 1000 },
  { tipo: 'blue', valor: 1085 },
  { tipo: 'mep', valor: 1071 },
  { tipo: 'tarjeta', valor: 1600 },
  { tipo: 'ccl', valor: 1089 },
];

// Funciones esenciales del proceso a simular

/**
 * Función para convertir ARS a USD según el tipo de cambio.
 * @param {number} cantidad - La cantidad de ARS a convertir.
 * @param {string} tipoDeCambio - El tipo de cambio a utilizar.
 * @returns {string|number} - El resultado de la conversión o un mensaje de error.
 */
function convertirARS(cantidad, tipoDeCambio) {
  const cambio = tiposDeCambio.find(cambio => cambio.tipo === tipoDeCambio);
  if (cambio) {
    const resultado = cantidad / cambio.valor;
    return resultado.toFixed(2);
  } else {
    return 'Tipo de cambio no válido';
  }
}

// Objeto para gestionar la interacción con el usuario
const conversor = {
  nombreUsuario: '',

  /**
   * Pedir el nombre del usuario.
   */
  solicitarNombre: function() {
    do {
      this.nombreUsuario = prompt("Ingresá tu nombre de Usuario:");
      if (this.nombreUsuario === "") {
        alert("Tenés que poner un nombre de usuario para continuar.");
      }
    } while (this.nombreUsuario === "");
    alert("El nombre de usuario ingresado es: " + this.nombreUsuario);
  },

  /**
   * Pedir el tipo de cambio que el usuario desea utilizar.
   * @returns {string} - El tipo de cambio elegido por el usuario.
   */
  solicitarTipoDeCambio: function() {
    let cotizacionDolar;
    do {
      cotizacionDolar = prompt("Ingresá el tipo de cambio que deseas (oficial, blue, mep, tarjeta, ccl):").toLowerCase();
      if (!tiposDeCambio.some(cambio => cambio.tipo === cotizacionDolar)) {
        alert("Tipo de cambio no válido. Por favor, ingresá uno de los siguientes: oficial, blue, mep, tarjeta, ccl.");
      }
    } while (!tiposDeCambio.some(cambio => cambio.tipo === cotizacionDolar));
    return cotizacionDolar;
  },

  /**
   * Pedir la cantidad en ARS que el usuario desea convertir.
   * @returns {number} - La cantidad en ARS.
   */
  solicitarCantidad: function() {
    return parseFloat(prompt("Ingresá la cantidad en ARS que deseas convertir:"));
  },

  /**
   * Inicia el proceso de conversión.
   */
  iniciarConversor: function() {
    this.solicitarNombre();
    const cotizacionDolar = this.solicitarTipoDeCambio();
    const cantidad = this.solicitarCantidad();
    const resultado = convertirARS(cantidad, cotizacionDolar);
    alert(`${cantidad} ARS son equivalentes a ${resultado} USD según el tipo de cambio ${cotizacionDolar} al día de hoy.`);
  }
};

// Iniciar el conversor
conversor.iniciarConversor();
