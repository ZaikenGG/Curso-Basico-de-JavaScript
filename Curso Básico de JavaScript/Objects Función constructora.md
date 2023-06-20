# Objects: Función constructora

Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.

**Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.**

# Cómo generar varios objetos a partir de una función constructora

Para crear una función constructora, debemos **definir los parámetros** correspondientes, que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto **this.**

Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.

```js
function Auto(brand, model, year){
    this.marca = brand
    this.modelo = model
    this.año = year
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}
```

Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new

```js
var miAuto = new Auto("Toyota", "Corolla", 2020)
/* Auto {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ ()
}*/
```

De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.

```js
var otroAuto = new Auto("Tesla", "Model 3", 2021)
var otroAuto2 = new Auto("Suzuki", "K-20", 2019)
var otroAuto3 = new Auto("Ferrari", "Model N", 2018)
```