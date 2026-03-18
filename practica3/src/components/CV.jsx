function CV({ nombre, area, exp, edu, extra }) {
  return (
    <>
      <div className="card">
        <h2>{nombre}</h2>
        <p>{area}</p>
        <p>{exp}</p>
        <p>{edu}</p>
        <p>{extra}</p>
      </div>
    </>
  );
}

export default CV;
