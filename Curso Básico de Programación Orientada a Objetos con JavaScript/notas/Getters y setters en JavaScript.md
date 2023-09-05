# Qué son los getters y setters
Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.

Esta característica a sido implementada en ES2015, pudiendo modificar el funcionamiento normal de establecer u obtener el valor de una propiedad, a estas se les conoce como accessor properties.

Funcionamiento
En ocasiones queremos valores basados en otros valores, para esto los data accessors son bastante útiles.

Para crearlos usamos los keywords get y set

```js
const obj = {
  get prop() {
    return this.__prop__;
  },
  set prop(value) {
    this.__prop__ = value * 2;
  },
};

obj.prop = 12;

console.log(obj.prop); //24
```

Creamos un objeto, con una única propiedad, que tiene un getter y un setter. de esta manera cada vez que establezcamos un valor para prop se multiplicará por dos.

Nota: utilice prop por convención, pero no implica que es un valor especial, este es un valor normal.

Otra manera de crear un accessor properties es de manera explícita usando Object.defineProperty

```js
const obj = {};

Object.defineProperty(obj, //objeto target
  'prop', //nombre propiedad
  {
    enumerable: true,
    configurable: true,
    get prop() { //getter
      return this.__prop__;
    },
    set prop(value) { //setter
      this.__prop__ = value * 2;
    },
  });
obj.prop = 12;

var atr = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(atr); 
```