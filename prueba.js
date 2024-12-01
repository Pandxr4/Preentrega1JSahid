let nombreUsuario;
do {
  nombreUsuario = prompt("Ingresá tu nombre de Usuario:");
  if (nombreUsuario == "") {
    alert("Tenés que poner un nombre de usuario para continuar.");
  }
} while (nombreUsuario == "");

alert("El nombre de usuario ingresado es: " + nombreUsuario);

let cotizacionDolar = prompt("Ingresá el tipo de cambio que deseas: Oficial, Blue, Mep, Tarjeta, CCL");

const tipoDeCambio = {
  oficial: 1030,
  Blue: 1120,
  Mep: 1075,
  Tarjeta: 1649,
  CCL: 1102,
};
