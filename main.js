// Objeto con los tipos de cambio actuales
const tiposDeCambio = {
  oficial: 1030,
  blue: 1120,
  mep: 1075,
  tarjeta: 1649,
  ccl: 1102,
};

// Función para convertir ARS a USD según el tipo de cambio
function convertirARS(cantidad, tipoDeCambio) {
  if (tiposDeCambio[tipoDeCambio]) {
    const tasa = tiposDeCambio[tipoDeCambio];
    const resultado = cantidad / tasa;
    return resultado.toFixed(2);
  } else {
    return 'Tipo de cambio no válido';
  }
}

// Función principal que interactúa con el usuario
function iniciarConversor() {
  let nombreUsuario;

  // Bucle para asegurar que se ingrese un nombre de usuario válido
  do {
    nombreUsuario = prompt("Ingresá tu nombre de Usuario:");
    if (nombreUsuario == "") {
      alert("Tenés que poner un nombre de usuario para continuar.");
    }
  } while (nombreUsuario == "");

  alert("El nombre de usuario ingresado es: " + nombreUsuario);

  // Bucle para asegurar que se ingrese un tipo de cambio válido
  let cotizacionDolar;
  do {
    cotizacionDolar = prompt("Ingresá el tipo de cambio que deseas (oficial, blue, mep, tarjeta, ccl):").toLowerCase();
    if (!tiposDeCambio[cotizacionDolar]) {
      alert("Tipo de cambio no válido. Por favor, ingresá uno de los siguientes: oficial, blue, mep, tarjeta, ccl.");
    }
  } while (!tiposDeCambio[cotizacionDolar]);

  // Solicitar cantidad a convertir
  const cantidad = parseFloat(prompt("Ingresá la cantidad en ARS que deseas convertir:"));

  // Convertir y mostrar el resultado
  const resultado = convertirARS(cantidad, cotizacionDolar);
  alert(`${cantidad} ARS son equivalentes a ${resultado} USD según el tipo de cambio ${cotizacionDolar} al día de hoy.`);
}

// Iniciar el conversor
iniciarConversor();
