# Calculando el promedio
Para calcular el promedio en JavaScript, necesitas sumar todos los valores que deseas promediar y luego dividir esa suma entre la cantidad de valores. Aquí tienes un ejemplo de cómo hacerlo:

```js
(venta1 + venta2 + venta3) / cantidad de ventas
```
```js
// Definir una matriz de valores
var valores = [2, 4, 6, 8, 10];

// Calcular la suma de los valores
var suma = 0;
for (var i = 0; i < valores.length; i++) {
  suma += valores[i];
}

// Calcular el promedio
var promedio = suma / valores.length;

// Imprimir el promedio
console.log("El promedio es: " + promedio);

```

En este ejemplo, tenemos una matriz llamada "valores" que contiene los números que queremos promediar. Primero, inicializamos la variable "suma" en 0. Luego, utilizamos un bucle "for" para recorrer cada elemento de la matriz y agregar su valor a la suma.

Después de obtener la suma total, dividimos esa suma por la longitud de la matriz (la cantidad de valores) para calcular el promedio. Finalmente, imprimimos el promedio utilizando la función "console.log()".

Recuerda que este ejemplo asume que todos los valores en la matriz son números válidos. Si tienes casos especiales, como valores no numéricos o una matriz vacía, puedes agregar comprobaciones adicionales en tu código para manejar esos casos de manera adecuada.
