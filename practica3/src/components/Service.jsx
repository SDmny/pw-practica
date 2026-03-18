function Service({ nombre, desc, precio, img }) {
  const tipo = precio > 1000 ? "servicio caro" : "servicio";
  return (
    <>
      <div className={tipo}>
        <h2>{nombre}</h2>
        <p>{desc}</p>
        <p>{precio}</p>
        <img src={img} alt={nombre} className="servicio-img" />
      </div>
    </>
  );
}

export default Service;
