import { useEffect, useState } from "react";
import Service from "./Service";

function Services() {

  const base = [

    {nombre:"Desarrollo Web",desc:"Paginas profesionales",precio:1500,img:"/images/Computadora.png"},
    {nombre:"Mantenimiento",desc:"Reparacion PC",precio:500,img:"/images/Mantenimiento.png"},
    {nombre:"Redes",desc:"Instalacion redes",precio:2000,img:"/images/Redes.png"},
    {nombre:"Base de Datos",desc:"Diseño BD",precio:1200,img:"/images/BD.png"},
    {nombre:"Soporte",desc:"Soporte tecnico",precio:300,img:"/images/Soporte.png"},
    {nombre:"App Movil",desc:"Android",precio:2500,img:"/images/AppMovil.png"},
    {nombre:"Seguridad",desc:"Ciberseguridad",precio:1800,img:"/images/Seguridad.png"},
    {nombre:"Servidor",desc:"Config servidor",precio:2200,img:"/images/Servidor.png"},
    {nombre:"Linux",desc:"Admin Linux",precio:900,img:"/images/Linux.png"},
    {nombre:"Consultoria",desc:"Asesoria",precio:1100,img:"/images/Consultoria.png"}

  ];

  const [services, setServices] = useState([]);

  useEffect(() => {

    let guardados =
      JSON.parse(
        localStorage.getItem("servicios")
      ) || [];

    let todos = base.concat(guardados);

    setServices(todos);

  }, []);

  return (
    <>
      <h1>Lista de Servicios</h1>

      {services.length === 0 ? (
        <p>No hay servicios</p>
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