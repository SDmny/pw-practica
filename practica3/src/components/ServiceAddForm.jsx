import { useState } from "react";

function ServiceAddForm() {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  const [borrarNombre, setBorrarNombre] = useState("");

  const [error, setError] = useState("");

  // Guardar
  const guardarServicio = (e) => {

    e.preventDefault();

    setError("");

    if (
      !nombre ||
      !descripcion ||
      !imagen ||
      isNaN(precio) ||
      precio <= 0
    ) {
      setError("Complete todos los campos correctamente");
      return;
    }

    const nuevo = {
      nombre: nombre,
      desc: descripcion,
      precio: parseFloat(precio),
      img: imagen,
    };

    let lista =
      JSON.parse(
        localStorage.getItem("servicios")
      ) || [];

    lista.push(nuevo);

    localStorage.setItem(
      "servicios",
      JSON.stringify(lista)
    );

    window.location.href = "/servicios";

  };

  // Borrar
  const borrarServicio = () => {

    setError("");

    if (!borrarNombre) {
      setError("Escribe el nombre");
      return;
    }

    let lista =
      JSON.parse(
        localStorage.getItem("servicios")
      ) || [];

    let nueva = [];

    let encontrado = false;

    for (let i = 0; i < lista.length; i++) {

      if (
        lista[i].nombre === borrarNombre
      ) {
        encontrado = true;
      } else {
        nueva.push(lista[i]);
      }

    }

    if (!encontrado) {
      setError("No existe ese servicio");
      return;
    }

    localStorage.setItem(
      "servicios",
      JSON.stringify(nueva)
    );

    setError("Servicio eliminado");

  };

  return (

    <>

      <h1>Alta de Servicio</h1>

      <form onSubmit={guardarServicio}>

        <label>Nombre</label>
        <input
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
        />

        <label>Descripcion</label>
        <input
          value={descripcion}
          onChange={(e) =>
            setDescripcion(e.target.value)
          }
        />

        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) =>
            setPrecio(e.target.value)
          }
        />

        <label>Imagen</label>
        <input
          value={imagen}
        onChange={(e) =>
            setImagen(e.target.value)
          }
        />

        <button type="submit">
          Guardar
        </button>

        <hr />

        <h3>Borrar servicio por nombre</h3>

        <input
          placeholder="Nombre"
          value={borrarNombre}
          onChange={(e) =>
            setBorrarNombre(e.target.value)
          }
        />

        <button
          type="button"
          onClick={borrarServicio}
        >
          Borrar
        </button>

        {error && (
          <div id="mensajeError">
            {error}
          </div>
        )}

      </form>

    </>

  );

}

export default ServiceAddForm;