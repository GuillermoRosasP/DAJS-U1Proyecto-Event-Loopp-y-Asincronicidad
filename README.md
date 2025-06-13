# ☕ CAFE CACAO - Simulación de Pedidos en una Cafetería

Este proyecto es una simulación interactiva inspirada en el entorno de trabajo de una cafetería moderna como Starbucks. Permite a los usuarios generar pedidos de diferentes tipos de café y visualiza el flujo del pedido desde su creación hasta su finalización, utilizando lógica asincrónica.

---

## 🎯 Objetivo

Simular el proceso de atención en una cafetería, donde los clientes hacen pedidos y los baristas los preparan de forma asincrónica. El sistema actualiza visualmente el estado de cada pedido en tiempo real.

---

## 🧩 Características

- Interfaz gráfica con columnas: **En Espera**, **En Progreso**, **Finalizado**.
- Botones para diferentes tipos de café: *Espresso*, *Latte*, *Capuccino*, *Americano*.
- Cambio automático de estado de cada pedido con tiempos de preparación aleatorios.
- Diseño visual moderno, inspirado en los colores y estilo de Starbucks.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
  - `setTimeout`
  - `async/await`
  - Promesas

---

## 🧪 ¿Cómo funciona?

1. El usuario hace clic en un botón para pedir un tipo de café.
2. El pedido aparece en la columna **"En Espera"** con un número único.
3. Después de 1 segundo, el pedido se mueve automáticamente a **"En Progreso"**.
4. Tras un tiempo aleatorio de 2 a 4 segundos, el pedido pasa a **"Finalizado"**.
5. Todo el proceso se maneja de forma asincrónica para simular la experiencia real en una cafetería.

---

## 📂 Estructura del proyecto
📁 cafe-cacao/
├── index.html # Estructura de la interfaz
├── style.css # Estilos visuales tipo Starbucks
├── app.js # Lógica del sistema de pedidos con asincronía
└── README.md # Descripción general del proyecto


---

## 💡 Ideas para mejorar

- Añadir sonidos cuando un pedido esté listo.
- Agregar una barra de progreso visual en cada pedido.
- Permitir cancelar o modificar pedidos.
- Persistencia de estado con `localStorage` o una base de datos.

---

## 👨‍💻 Autor

Desarrollado como una simulación educativa del manejo de asincronía en JavaScript, Event Loop y Promesas, con una interfaz inspirada en el estilo de Starbucks.

---






