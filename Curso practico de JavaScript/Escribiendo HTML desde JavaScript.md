# Escribiendo HTML desde JavaScript

## 1. innerHTML
Inserta codigo HTML en tu HTML

```js
elemento.innerHTML = 'Nuevo Texto';
```

## 2. innerText
Inserta Texto plano en tu HTML

```js
elemento.innerText = 'Nuevo texto';
```

## 3. getAttribute()
Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en parentesis

```js
elemento.getAttribute('pantalla')
```

## 4. setAttribute()
Cambia el valor de un atributo que tiene un elemento cuando le indicamos su nuevo valor en parentesis

```js
elemento.setAttribute('class', 'nuevo-valor')
```

## 5. classList.add()
Para agregar un valor a una clase existente en un elemento

```js
elemento.classList.add('nuevo-valor1')
```

## 6. classList.remove()
Para eliminar el valor descrito en parentesis a la clase de un elemento

```js
elemento.classList.remove('nuevo-valor')
```

## 7. classList.toggle(‘titulo’)
Si tiene un valor descrito entre parentesis se lo quita, o si no lo tiene se lo coloca:

```js
elemento.classList.toggle('valor')
```

## 8. classList.contains(‘titulo’)
Devuelve true o false Si una propiedad tiene un valor descrito entre parentesis

```js
elemento.classList.contains('valor')
```

## 9. .value = ‘valor’
Colocarle un valor a un elemento, usualmente colocado en inputs

```js
elemento.value = '12345'
```

## 10. .createElement()
Crea un elemento HTML ( < img >, < section >, < header >, < div >, etc )

```js
// creamos el variable con el selector de id donde meteremos el imnagen
const pid = document.querySelector('#pid')

//creamos una imagen document.createElement
const img = document.createElement('img')

// a esa imagen le pusimos los atributos
img.setAttribute('src', 'https://i.pinimg.com/236x/73/17/e1/7317e1312bc79d47ed02a392a0c9aec9.jpg')

// luego estamos insertando esta imgen dentro de un contenedor dentro de otro elemento que ya existia
// en html le estamos diciendo que por dentro va tener a la imagen
pid.append(img)
```

## 11. .append()
Puede agregar al documento uno o varios elementos creado previamente al agregarlo entre parentesis

```js
elemento.append(img, img2);
```

## 12. .appendChild()
Puede agregar al documento solo un elemento creado previamente al agregarlo entre parentesis

```js
elemento.append(img);
```