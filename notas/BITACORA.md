# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                     | Se mantiene al recargar (Si/No) |
| :--------------------------- | :-------------------------------------------- | :------------------------------ |
| textContent desde la consola | Cambio el texto a un ,"Hola desde la consola" | NO                              |
| textContent desde app.js     | El titulo ahora dice "Hola TECSUP"            | Si                              |
| style.color                  | El color del titulo es azul                   | SI                              |
| classList.add                | Agrega una clase                              | SI                              |
| createElement + appendChild  | Agrega una lista                              | SI                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                                 | Cuanto suma por accion |
| :------------- | :---------------------------------------------------- | :--------------------- |
| click          | al hacer click con el boton izquierdo del mouse       | 1                      |
| dblclick       | al hacer doble click con el boton izquierdo del mouse | 1                      |
| mouseover      | al pasar el cursor sobre el boton                     | 1                      |

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                                                       | Se recargo la pagina (Si/No) |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------- | :--------------------------- |
| Escribir en el campo nombre             | al mismo tiempo que iba escribiendo, se añadia el texto a la pantalla                         | no                           |
| Enviar sin preventDefault               | al momento de enviar solo se recarga la pagina y queda en blanco de nuevo el espacio de texto | si                           |
| Enviar con preventDefault, correo sin @ | da un error donde nos dice que el correo no tiene el @                                        | no                           |
| Enviar con preventDefault, correo con @ | envia con normalidad y abajo aparece un texto "enviado : tucorreo"                            | no                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()         | conDescuento(0.25) |
| :------ | :------ | :----- | :-------------------- | :----------------- |
| laptop  | laptop  | 2500   | 'Laptop - S/ 2500.00' | 1875               |
| mouse   | mouse   | 45     | 'Mouse - S/ 45.00'    |                    |
| teclado | teclado | 120    | 'Teclado - S/ 120.00' | 90                 |
| monitor | monitor | 680    | 'Monitor - S/ 680.00' | 510                |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina        | Correcto (Si/No) |
| :-------------- | :--------------------------------- | :--------------- |
| Cuaderno 12.50  | 12.50                              | Si               |
| + Lapicero 3.20 | 15.70                              | Si               |
| + Mochila 89.90 | 105.60                             | Si               |
| Sin Number()    | No muestra nada (Error en consola) | No               |

| Pieza  | Linea de tu codigo donde aparece             | Para que sirve                                                                              |
| :----- | :------------------------------------------- | :------------------------------------------------------------------------------------------ |
| DOM    | document.querySelector("#formProducto")      | Permite a JavaScript seleccionar, modificar y capturar elementos del HTML.                  |
| Evento | formProducto.addEventListener("submit", ...) | Detecta cuando el usuario interactúa con la página (en este caso, al enviar el formulario). |
| Objeto | const producto = new Producto(...)           | Instancia un elemento con propiedades y métodos únicos basándose en un molde o clase.       |

L

- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Ver la pagina en vivo](https://TU-USUARIO.github.io/lab08-dom/)
