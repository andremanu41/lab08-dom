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

- **Qué agregué:** Eventos `submit` en el formulario, validación de texto y evento `click` para borrar.
- **Por qué:** Para permitir al usuario ingresar datos en tiempo real y eliminar filas sin refrescar la página.
- **Qué cambió:** El formulario no se recarga con `preventDefault()`, valida datos en pantalla y borra ítems con un botón.

```javascript
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (tareaNombre.value.trim().length < 3) {
    /* Muestra error en pantalla */ return;
  }
  const btnBorrar = document.createElement("button");
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });
});
```

## Version 3: con clases y objetos

- **Qué agregué:** Clase estructural `Tarea`, almacenamiento en un array global y un buscador con evento `input`.
- **Por qué:** Para separar los datos lógicos de la interfaz visual, permitiendo filtrar elementos sin destruir la información subyacente.
- **Qué cambió:** Se pueden registrar objetos reales, tachar tareas completadas mediante CSS y filtrar la lista en vivo escribiendo letras.

```javascript
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
    this.completada = false;
  }
  obtenerFormato() {
    return `[${this.prioridad}] ${this.nombre}`;
  }
  conmutarEstado() {
    this.completada = !this.completada;
  }
}
```

---

## Donde uso DOM, eventos y objetos

| Pieza      | Linea de tu codigo donde aparece          | Para que sirve                                                        |
| :--------- | :---------------------------------------- | :-------------------------------------------------------------------- |
| **DOM**    | `document.createElement("li")`            | Crea dinámicamente etiquetas HTML en la página.                       |
| **Evento** | `buscador.addEventListener("input", ...)` | Detecta cada pulsación de tecla para filtrar la lista en tiempo real. |
| **Objeto** | `const nuevaTarea = new Tarea(...)`       | Crea una instancia con los datos estructurados del usuario.           |

---

## Pruebas realizadas

| Caso / Acción         | Resultado esperado                                 | Resultado obtenido                  | ¿Cumple? (Sí/No) |
| :-------------------- | :------------------------------------------------- | :---------------------------------- | :--------------- |
| Enviar campo vacío    | Muestra aviso de error en texto rojo en pantalla.  | Bloquea y muestra el mensaje.       | Sí               |
| Agregar "Matemáticas" | Renderiza "[Alta] Matemáticas" en la lista.        | Inserta el elemento con su formato. | Sí               |
| Buscar texto "Mate"   | Oculta las demás tareas que no coincidan.          | Filtra la lista en tiempo real.     | Sí               |
| Clic en "Completar"   | Tacha el texto del elemento en pantalla.           | Añade la clase CSS y se tacha.      | Sí               |
| Clic en "Borrar"      | Elimina la tarea por completo del DOM y del array. | Desaparece la fila inmediatamente.  | Sí               |

---

## Por que diseñe asi mi clase

Estructuré la clase `Tarea` con los atributos esenciales (`nombre`, `prioridad`, `completada`) para empaquetar de forma lógica el estado de cada actividad. El método `obtenerFormato()` centraliza la presentación visual del texto y `conmutarEstado()` encapsula el cambio de estado (completado/pendiente) de manera limpia dentro del propio objeto.

- [Tarea: mi componente interactivo](notas/TAREA.md)
- [Ver la tarea en vivo](https://TU-USUARIO.github.io/lab08-dom/tarea/)
