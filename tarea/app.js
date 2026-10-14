// Clase propia con constructor, 2 atributos y 2 métodos
class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
    this.completada = false;
  }

  // Método 1: Devuelve la descripción con formato
  obtenerFormato() {
    return `[${this.prioridad}] ${this.nombre}`;
  }

  // Método 2: Cambia el estado de la tarea (completada/pendiente)
  conmutarEstado() {
    this.completada = !this.completada;
  }
}

// Array global para almacenar los objetos de las tareas
const tareasRegistradas = [];

// Selección de elementos del DOM
const formTarea = document.querySelector("#formTarea");
const tareaNombre = document.querySelector("#tareaNombre");
const tareaPrioridad = document.querySelector("#tareaPrioridad");
const listaTareas = document.querySelector("#listaTareas");
const buscador = document.querySelector("#buscador");
const mensajeError = document.querySelector("#mensajeError");

// Evento 1: Submit (Envío del Formulario)
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = tareaNombre.value.trim();
  const prioridad = tareaPrioridad.value;

  // Validación de datos visible en la página
  if (texto === "" || texto.length < 3) {
    mensajeError.textContent =
      "Error: La tarea debe tener al menos 3 caracteres.";
    mensajeError.style.display = "block";
    return;
  }

  mensajeError.style.display = "none"; // Ocultar si pasa la validación

  // Crear Instancia de Clase (Objeto) y guardarlo en el array
  const nuevaTarea = new Tarea(texto, prioridad);
  tareasRegistradas.push(nuevaTarea);

  renderizarTareas();
  formTarea.reset();
});

// Evento 2: Input (Buscador/Filtro en tiempo real)
buscador.addEventListener("input", () => {
  renderizarTareas();
});

// Función para pintar e interactuar con el DOM
function renderizarTareas() {
  listaTareas.innerHTML = ""; // Limpiar lista visualmente
  const textoFiltro = buscador.value.toLowerCase();

  tareasRegistradas.forEach((tarea, indice) => {
    // Filtrar tareas por el buscador
    if (!tarea.nombre.toLowerCase().includes(textoFiltro)) return;

    // Crear elementos dinámicos
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tarea.obtenerFormato();

    if (tarea.completada) {
      span.classList.add("completada");
    }

    // Evento 3: Click (Botones de acción dinámicos)
    const btnCheck = document.createElement("button");
    btnCheck.textContent = tarea.completada ? "Desmarcar" : "Completar";
    btnCheck.addEventListener("click", () => {
      tarea.conmutarEstado();
      renderizarTareas();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      // Eliminar elemento del array de objetos lógicos
      tareasRegistradas.splice(indice, 1);
      renderizarTareas();
    });

    // Ensamblar nodos en el DOM con appendChild
    li.appendChild(span);
    li.appendChild(btnCheck);
    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
  });
}
