# ES10: try catch y fromEntries
Las siguientes características de ES10 o ES2019 que aprenderás son: parámetro opcional de catch y un método para tranformar arrays a objetos

# Parámetro opcional de catch
El parámetro opcional de catch permite omitir el error si es necesario.

```js
try {
  // Manejar el código
} catch (err) {
  // Se utiliza el parámetro `err`
}

try {
  // Manejar el código
} catch {
  // Manejar el error sin el parámetro.
}
```

Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.

# Cómo transformar un array de arrays en un objeto
