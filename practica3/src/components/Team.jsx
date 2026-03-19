import CV from "./CV";

function Team() {
  return (
    <>

      <h1>Curriculum del Equipo</h1>

      <CV
        nombre={"Jorge Vizaith"}
        area={"Desarrollo Web y Software"}
        exp={"Experiencia en JavaScript, HTML, CSS, C#, MySQL"}
        edu={"Estudiante de Ingeniería en Sistemas Computacionales"}
        extra={"Experiencia en mantenimiento, soporte técnico y redes"}
      ></CV>
      <CV
        nombre={"Sianya Demuñy"}
        area={"Bases de Datos"}
        exp={"Experiencia en SQL, modelado y diseño de BD"}
        edu={"Estudiante de Ingeniería en Sistemas Computacionales"}
        extra={"Experiencia en análisis de sistemas y documentación"}
      ></CV>
    </>
  );
}

export default Team;
