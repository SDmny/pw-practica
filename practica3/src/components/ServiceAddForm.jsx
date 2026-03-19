import { useState } from "react";

function ServiceAddForm() {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const [file, setFile] = useState(null);

  const [borrarNombre, setBorrarNombre] = useState("");

  const [error, setError] = useState("");

  const base = [

    { nombre: "Desarrollo Web" },
    { nombre: "Mantenimiento" },
    { nombre: "Redes" },
    { nombre: "Base de Datos" },
    { nombre: "Soporte" },
    { nombre: "App Movil" },
    { nombre: "Seguridad" },
    { nombre: "Servidor" },
    { nombre: "Linux" },
    { nombre: "Consultoria" }

  ];

  // Guardar
  const guardarServicio = (e) => {

    e.preventDefault();

    setError("");

    if (
      nombre === "" ||
      descripcion === "" ||
      precio === "" ||
      !file
    ) {
      setError("Complete todos los campos");
      return;
    }

    if (precio <= 0) {
      setError("Precio debe ser mayor a 0");
      return;
    }


    let lista =
      JSON.parse(
        localStorage.getItem("servicios")
      ) || [];

    // Validar base
    for (let i = 0; i < base.length; i++) {

      if (
        base[i].nombre.toLowerCase() ===
        nombre.toLowerCase()
      ) {
        setError(
          "Ya existe un servicio con ese nombre"
        );
        return;
      }

    }

    // Validar guardados
    for (let i = 0; i < lista.length; i++) {

      if (
        lista[i].nombre.toLowerCase() ===
        nombre.toLowerCase()
      ) {
        setError(
          "Ya existe un servicio con ese nombre"
        );
        return;
      }

    }

    const reader = new FileReader();

    reader.onload = function (ev) {

      const nuevo = {

        nombre: nombre,
        desc: descripcion,
        precio: parseFloat(precio),
        img: ev.target.result,

      };

      lista.push(nuevo);

      localStorage.setItem(
        "servicios",
        JSON.stringify(lista)
      );

      window.location.href = "/servicios";

    };

    reader.readAsDataURL(file);

  };

  // Borrar
  const borrarServicio = () => {

    setError("");

    if (borrarNombre === "") {
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

      <h2>Alta de Servicio</h2>

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
          type="file"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <button type="submit">
          Guardar
        </button>

        <hr />

        <h3>Borrar servicio por nombre</h3>

        <input
          value={borrarNombre}
          onChange={(e) =>
            setBorrarNombre(
              e.target.value
            )
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