# Tarea: Mi componente interactivo

## Componente elegido

## Version 1: solo DOM

- **Qué agregué:** Creación de un elemento manual con `document.createElement`.
- **Por qué:** Para comprobar la vinculación del script y la inserción básica en el árbol HTML.
- **Qué cambió:** Muestra una tarea fija al cargar la página; no hay interacción del usuario.

```javascript
const listaTareas = document.querySelector("#listaTareas");
const liPrueba = document.createElement("li");
liPrueba.textContent = "[Alta] Estudiar para el examen de interfaces";
listaTareas.appendChild(liPrueba);
```

---

## Version 2: con eventos

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que diseñe asi mi clase
