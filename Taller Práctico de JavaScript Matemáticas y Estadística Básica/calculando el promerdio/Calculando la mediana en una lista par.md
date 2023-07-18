# Calculando la mediana en una lista par
Este código realiza el cálculo de la mediana de una lista de números. A continuación, explicaré cada una de las funciones y proporcionaré comentarios dentro del código:

```js
function esPar(array) {
  return array.length % 2 === 0;
}
```
Esta función llamada **esPar** recibe un arreglo **array** como parámetro y devuelve **true** si la longitud del arreglo es par (contiene un número par de elementos) o **false** si la longitud es impar. Esto se determina calculando el residuo de la división entre la longitud del arreglo y 2.

```js
function calcularMediana(array) {
  const listaEsPar = esPar(array);
  console.log(listaEsPar);

  if (listaEsPar) {
    const indexMitadPar1 = array.length / 2 - 1;
    const indexMitadPar2 = array.length / 2;

    let agregarArrayMitad = [];

    agregarArrayMitad.push(array[indexMitadPar1]);
    agregarArrayMitad.push(array[indexMitadPar2]);

    const medianaListaPar = calcularPromedio(agregarArrayMitad);
    console.log(medianaListaPar);
    console.log(agregarArrayMitad);
  } else {
    const indexMitadInPar = Math.floor(array.length / 2);
    const medianaLista = array[indexMitadInPar];

    console.log(indexMitadInPar);
    console.log(medianaLista);
  }
}
```
La función **calcularMediana** recibe un arreglo **array** como parámetro y calcula la mediana de ese arreglo. Primero, se llama a la función **esPar** pasando el arreglo como argumento para determinar si la longitud del arreglo es par o impar. El resultado se almacena en la variable **listaEsPar.**

Si el arreglo es par, se ejecuta el bloque de código dentro del **if.** Se calculan los índices correspondientes a los dos elementos del medio del arreglo **(indexMitadPar1 e indexMitadPar2)**. Se crea un nuevo arreglo **agregarArrayMitad** y se agregan los elementos correspondientes a los índices calculados anteriormente. Luego, se llama a la función **calcularPromedio** pasando como argumento el arreglo **agregarArrayMitad** para calcular el promedio de sus elementos y se almacena en la variable **medianaListaPar.** Finalmente, se muestran en la consola la mediana calculada y el arreglo **agregarArrayMitad.**

Si el arreglo es impar, se ejecuta el bloque de código dentro del **else.** Se calcula el índice correspondiente al elemento del medio del arreglo **(indexMitadInPar)**. Se obtiene el valor de la mediana directamente accediendo al elemento en el índice calculado **(medianaLista)**. Estos valores se muestran en la consola.

```js
function calcularPromedio(array) {
  const sumarArray = array.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  });

  const dividirSuma = sumarArray / array.length;
  return dividirSuma;
}
```
La función **calcularPromedio** recibe un arreglo **array** como parámetro y calcula el promedio de sus elementos. Utiliza el método **reduce**  para sumar todos los elementos del arreglo y luego divide la suma por la longitud del arreglo para obtener el promedio. El resultado se devuelve como resultado de la función.

Por último, se llama a la función calcularMediana pasando como argumento el arreglo [40, 10, 30, 20]. Esto ejecutará el cálculo de la mediana y mostrará los resultados en la consola.

Espero que esta explicación y los comentarios dentro del código te ayuden a comprender cómo funciona el código y qué hace cada parte. Si tienes alguna otra pregunta, no dudes en preguntar.

# Codigo comppleto

```js
function esPar(array) {
  return array.length % 2 === 0;
}

function calcularMediana(array) {
  const listaEsPar = esPar(array);
  console.log(listaEsPar);

  if (listaEsPar) {
    const indexMitadPar1 = array.length / 2 - 1;
    const indexMitadPar2 = array.length / 2;

    let agregarArrayMitad = [];

    agregarArrayMitad.push(array[indexMitadPar1]);
    agregarArrayMitad.push(array[indexMitadPar2]);

    const medianaListaPar = calcularPromedio(agregarArrayMitad);
    console.log(medianaListaPar);
    console.log(agregarArrayMitad);
  } else {
    const indexMitadInPar = Math.floor(array.length / 2);
    const medianaLista = array[indexMitadInPar];

    console.log(indexMitadInPar);
    console.log(medianaLista);
  }
}

function calcularPromedio(array) {
  const sumarArray = array.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  });

  const dividirSuma = sumarArray / array.length;
  return dividirSuma;
}

calcularMediana([40, 10, 30, 20]);
```