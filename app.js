// Paso 1: Inicializamos un contador para asignar un ID único a cada pedido.
let contador = 1;

/**
 * Función principal que se ejecuta al hacer clic en un botón de café.
 * Recibe el tipo de café como parámetro y crea un nuevo pedido en la columna "En Espera".
 * Luego, lo mueve automáticamente a "En Progreso" y después a "Finalizado".
 * 
 * @param {string} tipoCafe - El nombre del café seleccionado (ej. Espresso, Latte)
 */
function agregarPedido(tipoCafe) {
  // Paso 2: Asignamos un ID único al nuevo pedido.
  const pedidoId = contador++;

  // Paso 3: Creamos un nuevo elemento <div> para representar visualmente el pedido.
  const pedido = document.createElement("div");

  // Paso 4: Le añadimos la clase CSS 'pedido' para darle estilos generales.
  pedido.classList.add("pedido");

  // Paso 5: Le asignamos un ID único al div, como "pedido-1", "pedido-2", etc.
  pedido.id = `pedido-${pedidoId}`;

  // Paso 6: Definimos el texto visible que se mostrará en el pedido.
  pedido.innerText = `${tipoCafe} - Pedido #${pedidoId}`;

  // Paso 7: Agregamos el pedido a la columna de "En Espera" (pendientes).
  document.getElementById("pendientes").appendChild(pedido);

  // Paso 8: Iniciamos la función que simula el procesamiento asincrónico del pedido.
  procesarPedido(pedidoId, tipoCafe);
}

/**
 * Función que simula el procesamiento del pedido usando asincronía.
 * Utiliza dos llamadas a `setTimeout` para simular el cambio de estado:
 * primero a "En Progreso", luego a "Finalizado" después de un tiempo aleatorio.
 * 
 * @param {number} id - ID único del pedido
 * @param {string} tipoCafe - Tipo de café asociado al pedido
 */
function procesarPedido(id, tipoCafe) {
  // Paso 9: Esperamos 1 segundo antes de mover el pedido a "En Progreso"
  setTimeout(() => {
    // Paso 10: Seleccionamos el elemento del DOM que representa este pedido
    const pedido = document.getElementById(`pedido-${id}`);

    // Paso 11: Verificamos que el pedido exista antes de manipularlo
    if (pedido) {
      // Paso 12: Le añadimos la clase CSS 'progreso' para cambiar el color de fondo y estilo
      pedido.classList.add("progreso");

      // Paso 13: Movemos el pedido del contenedor de "pendientes" a "progreso"
      document.getElementById("progreso").appendChild(pedido);
    }

    // Paso 14: Definimos un tiempo de preparación aleatorio entre 2000 y 4000 milisegundos
    const tiempo = Math.floor(Math.random() * 2000) + 2000;

    // Paso 15: Esperamos ese tiempo aleatorio para mover el pedido a "Finalizado"
    setTimeout(() => {
      // Paso 16: Seleccionamos nuevamente el pedido, por si ha cambiado de estado
      const pedidoFinal = document.getElementById(`pedido-${id}`);

      // Paso 17: Verificamos que aún exista
      if (pedidoFinal) {
        // Paso 18: Removemos la clase 'progreso' ya que cambiará a finalizado
        pedidoFinal.classList.remove("progreso");

        // Paso 19: Añadimos la clase CSS 'finalizado' para indicar que está listo
        pedidoFinal.classList.add("finalizado");

        // Paso 20: Movemos el pedido al contenedor "finalizados"
        document.getElementById("finalizados").appendChild(pedidoFinal);
      }
    }, tiempo); // Fin del segundo `setTimeout`, que simula el tiempo de preparación
  }, 1000); // Fin del primer `setTimeout`, que simula el paso a "En Progreso"
}
