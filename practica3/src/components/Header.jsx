import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Sistema de Servicios - Ingeniero en Sistemas</h1>
        <nav>
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/servicios" className="nav-link">
            Servicios
          </Link>
          <Link to="/alta" className="nav-link">
            Alta Servicio
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
