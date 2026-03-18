import { useEffect, useState } from "react";
import Service from "./Service.jsx";

function Services() {
  const [services] = useState(() => {
    // Inicializar directamente desde localStorage
    const data = JSON.parse(localStorage.getItem("services"));
    if (data && data.length > 0) {
      return data;
    }
    // Si no hay nada, usar servicios por defecto
    return [
      {
        nombre: "Desarrollo Web",
        desc: "Páginas profesionles",
        precio: 1500,
        img: "/images/Computadora.png",
      },
      {
        nombre: "Mantenimiento",
        desc: "Reparación PC",
        precio: 500,
        img: "/images/Mantenimiento.png",
      },
      {
        nombre: "Redes",
        desc: "Instalación redes",
        precio: 2000,
        img: "/images/Redes.png",
      },
      {
        nombre: "Base de Datos",
        desc: "Diseño BD",
        precio: 1200,
        img: "/images/BD.png",
      },
      {
        nombre: "Soporte",
        desc: "Soporte técnico",
        precio: 300,
        img: "/images/Soporte.png",
      },
    ];
  });

  useEffect(() => {
    // Guardar cambios en localStorage cada vez que servicios cambie
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  return (
    <>
      <h1>Lista de Servicios</h1>
      {services.length === 0 ? (
        <p>No hay servicios registrados.</p>
      ) : (
        services.map((s, i) => (
          <Service
            key={i}
            nombre={s.nombre}
            desc={s.desc}
            precio={s.precio}
            img={s.img}
          />
        ))
      )}
    </>
  );
}

export default Services;
