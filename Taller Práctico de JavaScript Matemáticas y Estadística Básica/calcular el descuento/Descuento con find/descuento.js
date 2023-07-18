// Obtener referencias a los elementos del DOM
const inputPrecio = document.querySelector("#precio");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

// Agregar un evento al botón para llamar a la función de cálculo de descuento
btn.addEventListener("click", calculaDescuento);

// Array de cupones con sus descuentos correspondientes
const couponList = [];

// Agregar cupones al array
couponList.push({
  name: "cuponA",
  discount: 10,
});
couponList.push({
  name: "cuponB",
  discount: 15,
});
couponList.push({
  name: "cuponC",
  discount: 20,
});
couponList.push({
  name: "cuponD",
  discount: 25,
});
couponList.push({
  name: "cuponE",
  discount: 30,
});
couponList.push({
  name: "cuponF",
  discount: 35,
});
couponList.push({
  name: "cuponG",
  discount: 40,
});
couponList.push({
  name: "cuponH",
  discount: 45,
});
couponList.push({
  name: "cuponI",
  discount: 50,
});
// ... Agregar los otros cupones

// Función para calcular el descuento
function calculaDescuento(evento) {
  evento.preventDefault(); // Evitar recargar la página

  const price = Number(inputPrecio.value); // Obtener el precio del input y convertirlo a número
  const coupon = inputCoupon.value; // Obtener el valor del input de cupón

  // Verificar si el precio o el cupón están vacíos
  if (!price || !coupon) {
    return (h1.innerHTML = `Por favor llenar todo el formulario`);
  }

  let newDiscount; // Variable para almacenar el descuento correspondiente al cupón input

  // Filtrar la lista de cupones buscando el cupón ingresado
  const validarCupon = couponList.find((codigo) => coupon === codigo.name);

  if (validarCupon) {
    // Si se encontró un cupón válido
    newDiscount = validarCupon.discount; // Obtener el descuento correspondiente
  } else {
    h1.innerHTML = `El cupón no es válido`; // Mostrar un mensaje de error si el cupón no es válido
    return;
  }

  // Calcular el precio con descuento
  const precioConDescuento = (price * (100 - newDiscount)) / 100; // 10000 * (100 - 25) / 100
  h1.innerHTML = `Precio con descuento: <br> ${precioConDescuento}`;

  // Mostrar información en la consola (puedes eliminar esto si no lo necesitas)
  console.log({
    coupon,
    validarCupon,
    newDiscount,
    precioConDescuento,
  });
}
