
const inputPrecio = document.querySelector("#precio");
const inputDescuento = document.querySelector("#descuento");
const btn = document.querySelector("button")
const h1 = document.querySelector("h1")

btn.addEventListener("click", calculaDescuento)

// codigo de cupones disponibles
const couponsObj = {
    codeWithe: 10,
    codeBlack: 20,
    codeLuf: 30,
    codeChif: 40,
    codeLunar: 50
}

function calculaDescuento(evento) {
    // para que no ser recargue la pagina
    evento.preventDefault()

    const price = Number(inputPrecio.value)
    const coupon = inputDescuento.value

    // verificamos si el coupon esta en couponsObj para aplicar el descuento y si no hay va retornar que el coupon es invalido
    let discount;

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon]
    } else (
        h1.innerHTML = `el cupon es invalido`
    )

    // verificamos si el usuario relleno todo el formulario
    if (!price || !coupon) {
        h1.innerHTML = `Por favor llenar todo el formulario`;
    }


    // si el coupon fue verificado va retornar este campo de operaciones que va calcular el descuento
    const precioConDescuento = price * (100 - discount) / 100;
    h1.innerHTML = `Precio con descuento: <br> ${precioConDescuento}`;
};