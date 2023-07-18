
const inputPrecio = document.querySelector("#precio");
const inputDescuento = document.querySelector("#descuento");
const btn = document.querySelector("button")
const h1 = document.querySelector("h1")

btn.addEventListener("click", calculaDescuento)

function calculaDescuento(evento) {
    // para que no ser recargue la pagina
    evento.preventDefault()

    const precio = Number(inputPrecio.value)
    const descuento = Number(inputDescuento.value)

    // mensaje si no llenan el formulario
    if (!precio || !descuento) {
        h1.innerText = `Por favor rellanar el formulario`;
        return
    }

    // mensaje si pasan de 50
    if (descuento > 50) {
        h1.innerText = `El descuento no puede ser mayor de 50%`;
        return;
    }

    // calculamos el descuento (Precio * (100 - D)] / 100)
    const precioConDescuento = precio * (100 - descuento) / 100;
    h1.innerHTML = `Precio con descuento: <br> ${precioConDescuento}`;
};