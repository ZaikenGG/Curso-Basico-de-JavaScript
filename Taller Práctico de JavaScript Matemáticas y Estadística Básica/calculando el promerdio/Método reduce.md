# Metodo reduce()
El método **reduce()** en JavaScript se utiliza para aplicar una función a un acumulador y a cada elemento de un array (de izquierda a derecha) para reducirlo a un único valor. Básicamente, **reduce()** toma una serie de valores y los combina en uno solo.

La sintaxis básica de **reduce()** es la siguiente:

```js
array.reduce(callback[, valorInicial])
```

Donde:

* **array** es el array en el cual se aplicará el método **reduce().**

* **callback** es una función que se ejecutará en cada elemento del array. Esta función acepta cuatro parámetros: **acumulador, elementoActual, índice y array**(en ese orden).

* **valorInicial** (opcional) es un valor inicial opcional que se utiliza como primer valor del acumulador. Si se omite, el primer elemento del array se tomará como valor inicial y el proceso de reducción comenzará desde el segundo elemento.

La función callback se ejecuta en cada elemento del array, y se le pasan cuatro argumentos:

* **acumulador**: es el valor acumulado obtenido hasta el momento.

* **elementoActual:** es el elemento actual que se está procesando en el array.

* **índice (opcional):** es el índice del elemento actual en el array.

* **array (opcional):** es el array sobre el cual se está aplicando **reduce().**

El valor retornado por la función **callback** se utilizará como acumulador para la siguiente iteración. Al finalizar la reducción, **reduce()** devolverá el valor final del acumulador.

Aquí hay un ejemplo para ilustrar cómo funciona reduce():

```js
const array = [1, 2, 3, 4, 5];

const suma = array.reduce((acumulador, elementoActual) => {
  return acumulador + elementoActual;
});

console.log(suma); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

En este ejemplo, el método **reduce()** se utiliza para sumar todos los elementos del array. En cada iteración, se suma el **acumulador** actual con el **elementoActual**. Al finalizar, **reduce()** devuelve el valor total de la suma, que es 15.

**reduce()** es una función muy versátil que se puede utilizar para realizar una amplia variedad de operaciones de reducción en arrays, como sumar, restar, multiplicar, encontrar el valor máximo o mínimo, concatenar elementos, entre otros. La función **callback** le brinda flexibilidad para definir la lógica de reducción que se ajuste a tus necesidades específicas.

# ejercicio buscar la media

```js
const arraysList = [100, 400, 900, 900, 98131, 12312354, 346545664];

// contar la cantidad del array
// luego sumar los arrays
// terminando la suma va dividir la cantidad que hay en los arrays

// reduce son los que suma los arrays
// length cuenta los indices lo podemos usar como divisor

function media() {
  //suma arrays
  const sumaDeArrays = arraysList.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  }, 0);

  // despues de la suma se divide los indices de los arrays
  const resultadoMedia = sumaDeArrays / arraysList.length;
  console.log(resultadoMedia);
}
```