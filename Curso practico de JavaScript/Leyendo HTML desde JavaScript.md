# Leyendo HTML desde JavaScript

## getElementsByTagName

getElementsByTagName es un método en JavaScript que permite seleccionar elementos del DOM (Document Object Model) basándose en su etiqueta HTML.

Este método devuelve una lista de todos los elementos que coinciden con la etiqueta especificada. Por ejemplo, si utilizas document.getElementsByTagName("p"), obtendrás una lista de todos los elementos <p> en el documento.

En resumen, getElementsByTagName permite obtener una colección de elementos por su etiqueta, lo que te permite manipular o acceder a ellos de diversas maneras utilizando JavaScript.

```js
// El uso de getElements

console.log(document.getElementsByTagName('li')) // Accede al elemento por medio de la etiqueta 'li'

console.log(document.getElementsByClassName('card')) // Accede al elemento por medio de la clase 'card'

console.log(document.getElementsByName('nombre')) // Accede a los elementos por medio del atributo 'name' del documento, name se utiliza en los formularios

console.log(document.getElementById('menu')) // Accede a los elementos por medio del identificador 'menu'
```

## queryselector

querySelector es un método en JavaScript que permite seleccionar un elemento del DOM (Document Object Model) utilizando un selector CSS.

El método querySelector devuelve el primer elemento que coincide con el selector especificado. El selector puede ser una etiqueta HTML, una clase CSS, un ID o cualquier otro selector CSS válido.

Por ejemplo, si tienes un elemento <div> con el ID "miDiv", puedes seleccionarlo utilizando document.querySelector("#miDiv"). Si tienes un elemento <p> con la clase "miClase", puedes seleccionarlo utilizando document.querySelector(".miClase").

Una vez que has seleccionado un elemento con querySelector, puedes manipularlo, acceder a sus propiedades, modificar su contenido o aplicar estilos CSS utilizando las propiedades y métodos disponibles en JavaScript.

Es importante tener en cuenta que querySelector solo devuelve el primer elemento que encuentra. Si deseas seleccionar múltiples elementos que coinciden con un selector, puedes usar querySelectorAll, que devuelve una lista de todos los elementos coincidentes.

```js
// El uso de querySelector

console.log(document.querySelector('a')) // Accede al elemento por medio de la etiqueta 'a'. Accede solo a el primer elemento de tipo 'a' del documento.

console.log(document.querySelectorAll('a')) // Accede al elemento por medio de la etiqueta 'a'. Accede a todos los elemento de tipo 'a' del documento.

console.log(document.querySelector('.card')) // Accede al elemento por medio de la clase id '.card'

console.log(document.querySelector('#card')) // Accede a los elementos por medio del identificador class '#card'

console.log(document.querySelectorAll('.card')[2]) // Accede al elemento por medio de la class '.card' y busca el elemento en la posicion indicada

console.log(document.querySelectorAll('.menu li')) // Accede a todos los elementos 'li' que tengan la clase 'menu'
```