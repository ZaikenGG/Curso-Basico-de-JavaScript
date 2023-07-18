# Calculando la media
La media es otra forma de referirse al promedio. En JavaScript, el cálculo de la media se realiza utilizando la misma fórmula que se utiliza para calcular el promedio. Aquí tienes un ejemplo de cómo calcular la media en JavaScript:
```js
// Definir una matriz de valores
var valores = [2, 4, 6, 8, 10];

// Calcular la suma de los valores
var suma = 0;
for (var i = 0; i < valores.length; i++) {
  suma += valores[i];
}

// Calcular la media
var media = suma / valores.length;

// Imprimir la media
console.log("La media es: " + media);
```

En este ejemplo, la matriz "valores" contiene los números que deseamos promediar. Usamos un bucle "for" para recorrer cada elemento de la matriz y sumar sus valores. Luego, dividimos la suma total entre la longitud de la matriz para obtener la media.

Finalmente, imprimimos la media utilizando la función "console.log()".

Recuerda que la media se calcula sumando todos los valores y dividiendo entre la cantidad de valores. Es importante tener en cuenta que esta fórmula asume que todos los valores en la matriz son números válidos. Si tienes casos especiales, como valores no numéricos o una matriz vacía, puedes agregar comprobaciones adicionales en tu código para manejar esos casos de manera adecuada.