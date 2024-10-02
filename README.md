# Condicionales

Este es un proyecto para aprender a usar condicionales.

Adicionalmente hemos aprendido a usar el CDN de P5, incluyendo el siguiente código dentro del `<head>` del archivo index.html de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.0/lib/p5.min.js"></script>
```

En p5 se usan estas herramientas para condicionar comportamientos gráficos como el cambio del color, tamaño, movimiento, distancia, etc.

# If / if-else / else-if

Estas condicionales permiten controlar el flujo del programa en función de si una condición es verdadera o falsa.

### If

Forma básica de sentencia condicional, compruba una condición y la ejecuta si es verdadera, si es falsa se ignora.

### If-else

Ejecuta un bloque de código si la condición es verdadera, y un segundo bloque si la condición es falsa.

### Else-if

Comprobar múltiples condiciones en secuencia, si la primera condición es falsa, comprobará la siguiente, es posible tener tantas como se las necesite.

## Expresión Booleana

Expresión que se evalúa como verdadera o falsa, se utilizan en las estructuras de control. Los resultados siempre serán `true`o `false`.

Es posible cambiar el color de una forma si el mouse está en una posición determinada.

## Operadores de Comparación

Se utilizan para comparar dos valores y devolver una expresión booleana.

Permiten realizar evaluaciones comparando dos valores.

## Variables booleanas integradas

Permiten detectar eventos de usuario

### mouseIsPressed

`true` si se presiona algún botón del mouse
`false` si no se presiona

### keyIsPressed

`true` si se presiona alguna tecla
`false` si no

Se usó la condicional `if` para cambiar el color del círculo según la posición del mouse de la siguiente manera, para dividir el canvas en tres cuadrantes:

```js
if (mouseX < width / 3)
```

Se utilizó la variable `mouseIsPressed` , con las condicionales `if` y `else` para cambiar la forma a un cuadrado al hacer clic y que regrese a la forma original de la siguiente manera:

```js
if (mouseIsPressed) {
  rect(mouseX - 25, mouseY - 25, 100, 100);
} else {
  ellipse(mouseX, mouseY, 50, 50); // regresa a la forma original
}
```
