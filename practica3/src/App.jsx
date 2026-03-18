import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import ServiceAddForm from "./components/ServiceAddForm.jsx";
import Team from "./components/Team.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div id="contenido">
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/alta" element={<ServiceAddForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
