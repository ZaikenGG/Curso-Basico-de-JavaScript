// cualcular el cuadrado
console.group('Cuadrado')

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado + 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

// convertir en funciones
function CalculaAreaCuadrado(lado) {
    return {
        perimetroCuadrado: ladoCuadrado + 4,
        areaCuadrado: lado * lado
    }
}
console.log(CalculaAreaCuadrado(5, 4));
console.groupEnd('Cuadrado')


// calcular el triangulo
console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})

// convertir en funciones
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetroTriangulo: lado1 + lado2 + base,
        areaTriangulo: (base * altura) / 2
    }
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 === base) {
        console.warn("Este no es un triangulo isoseles")
    } else {
        // h = raizcuadrada(lado1 ** 2 - (base ** 2)/4)
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4))
    }
}

function calculaTrianguloEscaleno(lado1, lado2, lado3){
    let a = lado1;
    let b = lado2;
    let c = lado3;

    // Si no es escaleno, no continuamos
    if(a == b || b == c || c == a){
        return false
    }

    // Si es escaleno, calculamos primero su area
    const p = (a + b + c) / 2;

    // raizcuadrada (P(P-lado1) (P-lado2) (P-base))
    const area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)))
    // floor para redondear el numero
    const altura_a = Math.floor(2 * area / a)
    return altura_a
}

console.log(calcularTriangulo(6, 6, 4, 5.5));
console.groupEnd('Triangulo')


// circulo
console.group('circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415

const circuferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circuferencia,
    areaCirculo
});

// funciones

function calculaCirculo(radio) {
    const diametroCirculo = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)

    return {
        circuferencia: diametroCirculo * Math.PI,
        area: (radioAlCuadrado ** 2) * Math.PI
    }
}


console.groupEnd('circulo');