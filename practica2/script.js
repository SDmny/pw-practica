document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formProducto");
  const mensajeError = document.getElementById("mensajeError");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const precio = parseFloat(document.getElementById("precio").value);
      const categoria = document.getElementById("categoria").value.trim();
      const descripcion = document.getElementById("descripcion").value.trim();

      // Validaciones
      if (
        !nombre ||
        !categoria ||
        !descripcion ||
        isNaN(precio) ||
        precio <= 0
      ) {
        mensajeError.textContent =
          "Por favor, completa todos los campos correctamente. Ejemplo: precio mayor a 0.";
        return;
      }

      // Crear objeto producto
      const nuevoProducto = { nombre, precio, categoria, descripcion };

      // Obtener productos existentes
      let productos = JSON.parse(localStorage.getItem("productos")) || [];

      // Agregar nuevo producto
      productos.push(nuevoProducto);

      // Guardar en localStorage
      localStorage.setItem("productos", JSON.stringify(productos));

      // Redirigir a servicios.html
      window.location.href = "servicios.html";
    });
  }
});
