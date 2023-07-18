# Método sort:

Ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

## Sintaxis

Este método recibe una función callback que se encargara de hacer la comparacion entre cada uno de los elementos del array.

```js
arr.sort([compareFunction]):
arrayDesordenado.sort((a, b) => a - b);
```

# Paso a paso de la clase:

Para encapsular nuestro codigo y poder reutilizarlo creamos la funcion **ordenarArray** dentro de la cual vamos a aplicar el metodo sort a nuestro array:

```js
function ordenarArray(arrayDesordenado) {
  const arrayOrdenado = arrayDesordenado.sort();

  return arrayOrdenado;
}
```

En este ejemplo creamos la función que recibe el método sort fuera del mismo, en este caso llamaremos ArraySort que recibe dos argumentos: valorAcumulado y nuevoValor. Dentro de esta funcion comparamos uno por uno los valores del array ingresando a cada una de sus posiciones de acuerdo a estos dos argumentos que recibe la funcion y retornando tres valores posibles dependiendo de la comparación realizada para cada uno:

```js
function ordenarArray(arrayDesordenado) {
  function ordenarArraySort(valorAcumulado, nuevoValor) {
    if (valorAcumulado > nuevoValor) {
      return 1;
    } else if (valorAcumulado == nuevoValor) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    }
  }

  const arrayOrdenado = arrayDesordenado.sort(ordenarArraySort);

  return arrayOrdenado;
}
```

- Se retorna **0** si queremos que el método no haga nada, pues, los valores son iguales, por ende, no importa el orden y no hace falta moverlos.

- Se retorna **1** si queremos que el **nuevoValor** (menor) pase a estar antes que el **valorAcumulado** (mayor). Esto quiere decir que el **nuevoValor** se colocará al principio, o hacia la izquierda de **valorAcumulado.**

- Se retorna **-1** si queremos que **nuevoValor** (mayor) se quede en esa posición en la que se encuentra con respecto al **valorAcumulado** (menor). O sea, si al compararlos **nuevoValor** es mayor que **valorAcumulado,** el **nuevoValor** se quedara a la derecha de valorAcumulado.

Al retornar un valor negativo, cero o positivo para cada comparación, se van ordenando/posicionando de manera correcta los elementos del array.

## Forma simplificada del código anterior:

```js
function ordenarArray(arrayDesordenado) {
  function ordenarArraySort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }

  const arrayOrdenado = arrayDesordenado.sort(ordenarArraySort);

  return arrayOrdenado;
}
```

- Si **valorAcumulado** es menor que **nuevoValor** la función va a retornar un numero negativo. Ejemplo: 5 - 10 = -5

- Si **valorAcumulado** es igual a **nuevoValor**, la función va a retornar 0. Ejemplo: 5 - 5 = 0

- Si **valorAcumulado** es mayor que **nuevoValor**, la función va a retornar un numero positivo.

# Nota:

Si queremos que el método sort ordene el contenido del array de menor a mayor (ascendente) hacemos el calculo que retorna la funcion de la siguiente manera:

```js
arrayDesordenado.sort((a, b) => a - b);
```

Si queremos que el método sort ordene el contenido del array de mayor a menor (descendente) hacemos el calculo que retorna la funcion de la siguiente manera:

```js
arrayDesordenado.sort((a, b) => b - a);
```

# Calcular mediana con el metodo sort:

```js
const arrayDesordenado = [10, 20, 60, 40];

//Funcion para identificar si un array es par o impar:
function esPar(arrayDesordenado) {
  return arrayDesordenado.length % 2 === 0;
}

//Funcion para calcular la mediana:
function calcularMediana(arrayDesordenado) {
  //Pasar como parametro el array desordenado para que la funcion ordenarArray lo ordene:
  const array = ordenarArray(arrayDesordenado);

  const arrayPar = esPar(array);

  if (arrayPar) {
    //Calcular mediana par
    const indexMitad1 = array[array.length / 2 - 1];
    const indexMitad2 = array[array.length / 2];

    const arrayMitades = [indexMitad1, indexMitad2];

    //Llamado a la funcion de calcularPromedio:
    const medianaArray = calcularPromedio(arrayMitades);

    //Retornar valor luego de calcular el promedio:
    return medianaArray;
  } else {
    //Calcular mediana impar
    const posicionNumeroIntermedio = Math.floor(array.length / 2);
    console.log(posicionNumeroIntermedio);

    //Asignar el valor del elemento intermedio encontrado a una variable:
    const medianaImpar = array[posicionNumeroIntermedio];

    //Retornar elemento:
    return medianaImpar;
  }
}

//Funcion para calcular promedio:
function calcularPromedio(arrayItem) {
  function sumarElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }
  const sumaArray = arrayItem.reduce(sumarElementos);

  const promedio = sumaArray / arrayItem.length;
  return promedio;
}

//Funcion para ordenar array:
function ordenarArray(arrayDesordenado) {
  function ordenarArraySort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }

  const arrayOrdenado = arrayDesordenado.sort(ordenarArraySort);

  return arrayOrdenado;
}

console.log(calcularMediana(arrayDesordenado));
```
