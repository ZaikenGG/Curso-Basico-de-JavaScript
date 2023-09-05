# Objetos literales y prototipos en JavaScript
JavaScript es un lenguaje basado en prototipos, por lo tanto entender el objeto prototype es uno de los conceptos más importantes que los profesionales de JavaScript necesitan saber. Este artículo te dará una breve descripción del objeto prototype a través de varios ejemplos. Antes de leer este artículo, deberás tener un entendimiento básico de la referencia this en JavaScript.

# Objeto prototype
En honor a la claridad, vamos a examinar el siguiente ejemplo:

```js
function Punto2D(x, y) {
  this.x = x;
  this.y = y;
}
```

Al declararse la función Punto2D, una propiedad predeterminada llamada prototype será creada para ella (ten en cuenta que, en JavaScript, una función es también un objeto). La propiedad prototype es un objeto que contiene una propiedad constructor y su valor es la función Punto2D: Punto2D.prototype.constructor = Punto2D. Y cuando tú llamas a Punto2D con la palabra reservada new, los objetos recién creados heredarán todas las propiedades de Punto2D.prototype. Para verificar esto, puedes agregar un método llamado mover en Punto2D.prototype de la siguiente manera:

```js
Punto2D.prototype.mover  = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

var p1 = new Point2D(1, 2);
p1.mover (3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6
```
El Point2D.prototype es llamado objeto prototipo o prototipo del objeto p1 y de cualquier otro objeto creado con la sintaxis new Point2D(…) . Puedes agregar tantas propiedades al objeto Point2D.prototype como quieras. Lo que suele hacerse es declarar métodos en Point2D.prototype y otras propiedades se declararán en la función constructora.

Los objetos integrados en JavaScript se construyen de manera similar. Por ejemplo:

El prototipo de los objetos creados con la sintaxis new Object() o {} es Object.prototype
El prototipo de los arreglos creados con la sintaxis new Array() o [] es Array.prototype
Y es igual con otros objetos integrados como Date y RegExp.
Object.prototype es heredado por todos los objetos y no tiene prototipo (su prototipo es null)

# Cadena de prototipos

El mecanismo de la cadena del prototipo es simple: cuando accede a una propiedad p en el objeto obj, el motor de JavaScript buscará esta propiedad dentro del objeto obj. Si el motor falla en la búsqueda, continúa buscando en el prototipo de objeto obj y así sucesivamente hasta llegar a Object.prototype. Si finalizada la búsqueda no se ha encontrado nada, el resultado será undefined. Por ejemplo:

```js
var obj1 = {
  a: 1,
  b: 2
};

var obj2 = Object.create(obj1);
obj2.a = 2;

console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c); // undefined
```

En el fragmento de código anterior, la declaración var obj2 = Object.create(obj1) creará el objeto obj2 con el objeto prototipo obj1. En otras palabras, obj1 se convierte en el prototipo de obj2 en lugar de Object.prototype por defecto. Como puedes ver, bno es una propiedad de obj2, pero puedes acceder a ella a través de la cadena de prototipos. Sin embargo, para la propiedad c, se obtiene un valor undefined porque no se puede encontrar en obj1 y en Object.prototype.