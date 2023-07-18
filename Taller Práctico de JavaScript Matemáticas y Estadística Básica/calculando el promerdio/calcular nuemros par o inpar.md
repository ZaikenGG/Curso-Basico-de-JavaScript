# calcular numeros par o inmpar
Para determinar si un número es par o impar en un array en JavaScript, se puede utilizar el operador de módulo (%). El operador de módulo devuelve el residuo de una división entre dos números. Si el residuo es 0, entonces el número es par; de lo contrario, es impar. Aquí tienes un ejemplo de cómo hacerlo:

```js
// Definir una matriz de números
var numeros = [2, 4, 7, 8, 11];

// Recorrer cada número en la matriz
for (var i = 0; i < numeros.length; i++) {
  var numero = numeros[i];
  
  // Verificar si el número es par o impar
  if (numero % 2 === 0) {
    console.log(numero + " es par");
  } else {
    console.log(numero + " es impar");
  }
}
```

En este ejemplo, tenemos una matriz llamada "numeros" que contiene los números que queremos verificar. Utilizamos un bucle "for" para recorrer cada elemento de la matriz. Dentro del bucle, asignamos cada número a la variable "numero".

Luego, utilizamos la expresión "numero % 2" para calcular el residuo de la división entre el número y 2. Si el residuo es igual a 0, significa que el número es par y se imprime un mensaje indicándolo. De lo contrario, se imprime un mensaje diciendo que el número es impar.

Recuerda que este ejemplo asume que todos los elementos en la matriz son números enteros. Si tienes casos especiales, como valores no numéricos o decimales, puedes agregar comprobaciones adicionales en tu código para manejar esos casos de manera adecuada.