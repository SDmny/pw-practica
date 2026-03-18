function CV({ nombre, area, exp, edu, extra }) {
  return (
    <>
      <h2>{nombre}</h2>
      <p>{area}</p>
      <p>{exp}</p>
      <p>{edu}</p>
      <p>{extra}</p>
    </>
  );
}

export default CV;
