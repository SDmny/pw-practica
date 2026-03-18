import { useState } from "react";

function ServiceAddForm() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !descripcion || !imagen || isNaN(precio) || precio <= 0) {
      setError(
        "Por favor, completa todos los campos correctamente. Ejemplo: precio mayor a 0 e imagen válida.",
      );
      return;
    }

    const nuevoServicio = {
      nombre,
      desc: descripcion,
      precio: parseFloat(precio),
      img: imagen,
    };

    let servicios = JSON.parse(localStorage.getItem("productos")) || [];
    servicios.push(nuevoServicio);
    localStorage.setItem("productos", JSON.stringify(servicios));

    // Redirigir a servicios
    window.location.href = "/servicios";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <label htmlFor="descripcion">Descripción:</label>
      <textarea
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />

      <label htmlFor="precio">Precio:</label>
      <input
        type="number"
        id="precio"
        min="1"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />

      <label htmlFor="imagen">Imagen (URL):</label>
      <input
        type="text"
        id="imagen"
        placeholder="images/default.png"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        required
      />

      <button type="submit">Guardar</button>

      {error && <div id="mensajeError">{error}</div>}
    </form>
  );
}

export default ServiceAddForm;
