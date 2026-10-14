// 1. Selección de elementos del DOM
const formTarea = document.querySelector("#formTarea");
const tareaNombre = document.querySelector("#tareaNombre");
const tareaPrioridad = document.querySelector("#tareaPrioridad");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");

// 2. Escuchador del evento Submit del Formulario
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Detiene la recarga automática de la página

  const texto = tareaNombre.value.trim();
  const prioridad = tareaPrioridad.value;

  // Validación de datos visible en pantalla (sin usar alert)
  if (texto === "" || texto.length < 3) {
    mensajeError.textContent =
      "Error: La tarea debe tener al menos 3 caracteres.";
    mensajeError.style.display = "block";
    return; // Detiene la ejecución si hay error
  }

  mensajeError.style.display = "none"; // Oculta el mensaje si todo es correcto

  // 3. Creación y manipulación dinámica de elementos del DOM
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = `[${prioridad}] ${texto}`;

  // Creamos el botón para borrar la tarea de la pantalla
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";

  // Escuchador del evento Click en el botón dinámico
  btnBorrar.addEventListener("click", () => {
    li.remove(); // Elimina el elemento del HTML al hacer clic
  });

  // 4. Inyección de nodos en el DOM con appendChild
  li.appendChild(span);
  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);

  formTarea.reset(); // Limpia los campos del formulario
});
