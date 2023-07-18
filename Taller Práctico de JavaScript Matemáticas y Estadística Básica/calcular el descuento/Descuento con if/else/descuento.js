
const inputPrecio = document.querySelector("#precio");
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("button")
const h1 = document.querySelector("h1")

btn.addEventListener("click", calculaDescuento)

// codigo de cupones disponibles
// const couponsObj = {
//     codeWithe: 10,
//     codeBlack: 20,
//     codeLuf: 30,
//     codeChif: 40,
//     codeLunar: 50
// }

function calculaDescuento(evento) {
    // para que no ser recargue la pagina
    evento.preventDefault()

    const price = Number(inputPrecio.value)
    const coupon = inputCoupon.value

    if (!price || !coupon) {
        return h1.innerHTML = `Por favor llenar todo el formulario`;
    }

    let discount // nueva variable que almacenara

    if (coupon === "codeWithe") {
        discount = 15
    } else if (coupon === "codeBlack") {
        discount = 20
    } else if (coupon === "codeLuf") {
        discount = 25
    } else if (coupon === "codeChif") {
        discount = 30
    } else if (coupon === "codeLunar") {
        discount = 35
    } else if (coupon === "codeJupiter") {
        discount = 40
    } else if (coupon === "codeMirror") {
        discount = 45
    } else if (coupon === "codeGold") {
        discount = 50
    } else {
       return h1.innerHTML = `Por favor ingrese un cupon valido`;
    }

    // si el coupon fue verificado va retornar este campo de operaciones que va calcular el descuento
    const precioConDescuento = price * (100 - discount) / 100; // 10000 * (100 - 25) / 100
    h1.innerHTML = `Precio con descuento: <br> ${precioConDescuento}`;
};