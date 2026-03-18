var cont = document.getElementById("contenido");

//Header
var header = document.createElement("header");

header.innerHTML = `
<h1>Sistema de Servicios - Ingeniero en Sistemas</h1>

<nav>
  <a href="index.html">Inicio</a>
  <a href="servicios.html">Servicios</a>
  <a href="alta.html">Alta Producto</a>
</nav>
`;

document.body.prepend(header);

//Footer
var footer = document.createElement("footer");

footer.innerHTML = `
<p>2026 - ISC - Catalogo de Servicios</p>
<a href="https://validator.w3.org/nu/#textarea" target="_blank">
  <img src="https://www.w3.org/Icons/valid-html401" alt="Valid HTML 5.0" class="validator-badge">
</a>
<a href="https://jigsaw.w3.org/css-validator/#validate-by-input" target="_blank">
  <img src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS" class="validator-badge">
</a>
`;

document.body.appendChild(footer);

//Pagina
var pagina = window.location.pathname;

//Index

if (pagina.includes("index")) {
  let titulo = document.createElement("h2");
  titulo.textContent = "Curriculum del Equipo";

  cont.appendChild(titulo);

  var equipo = [
    {
      nombre: "Jorge Vizaith",
      area: "Desarrollo Web y Software",
      exp: "Experiencia en JavaScript, HTML, CSS, C#, MySQL",
      edu: "Estudiante de Ingeniería en Sistemas Computacionales",
      extra: "Experiencia en mantenimiento, soporte técnico y redes",
    },

    {
      nombre: "Sianya Demuñy",
      area: "Bases de Datos",
      exp: "Experiencia en SQL, modelado y diseño de BD",
      edu: "Estudiante de Ingeniería en Sistemas Computacionales",
      extra: "Experiencia en análisis de sistemas y documentación",
    },
  ];

  for (let i = 0; i < equipo.length; i++) {
    let div = document.createElement("div");
    div.className = "card";

    let h = document.createElement("h2");
    h.textContent = equipo[i].nombre;

    let p1 = document.createElement("p");
    p1.innerHTML = "<b>Área:</b> " + equipo[i].area;

    let p2 = document.createElement("p");
    p2.innerHTML = "<b>Experiencia:</b> " + equipo[i].exp;

    let p3 = document.createElement("p");
    p3.innerHTML = "<b>Educación:</b> " + equipo[i].edu;

    let p4 = document.createElement("p");
    p4.innerHTML = "<b>Habilidades:</b> " + equipo[i].extra;

    div.appendChild(h);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    cont.appendChild(div);
  }

  // Descripcion general
  let info = document.createElement("p");

  info.textContent =
    "Equipo de Ingenieros en Sistemas Computacionales con experiencia en desarrollo de software, mantenimiento de equipos, redes, bases de datos, soporte técnico y seguridad informática.";

  cont.appendChild(info);
}

// Servicios
if (pagina.includes("servicios")) {
  // Primero obtenemos productos guardados en localStorage
  var servicios = JSON.parse(localStorage.getItem("servicios")) || [];

  if (servicios.length === 0) {
    // Si no hay productos guardados, usamos el array por defecto
    servicios = [
      {
        nombre: "Desarrollo Web",
        desc: "Paginas profesionales",
        precio: 1500,
        img: "images/computadora.png",
      },
      {
        nombre: "Mantenimiento",
        desc: "Reparacion PC",
        precio: 500,
        img: "images/Mantenimiento.png",
      },
      {
        nombre: "Redes",
        desc: "Instalacion redes",
        precio: 2000,
        img: "images/Redes.png",
      },
      {
        nombre: "Base de Datos",
        desc: "Diseño BD",
        precio: 1200,
        img: "images/BD.png",
      },
      {
        nombre: "Soporte",
        desc: "Soporte tecnico",
        precio: 300,
        img: "images/Soporte.png",
      },
      {
        nombre: "App Movil",
        desc: "Android",
        precio: 2500,
        img: "images/AppMovil.png",
      },
      {
        nombre: "Seguridad",
        desc: "Ciberseguridad",
        precio: 1800,
        img: "images/Seguridad.png",
      },
      {
        nombre: "Servidor",
        desc: "Config servidor",
        precio: 2200,
        img: "images/Servidor.png",
      },
      {
        nombre: "Linux",
        desc: "Admin Linux",
        precio: 900,
        img: "images/Linux.png",
      },
      {
        nombre: "Consultoria",
        desc: "Asesoria",
        precio: 1100,
        img: "images/Consultoria.png",
      },
    ];
  }

  for (let i = 0; i < servicios.length; i++) {
    let div = document.createElement("div");

    if (servicios[i].precio > 1000) {
      div.className = "servicio caro";
    } else {
      div.className = "servicio";
    }

    let h = document.createElement("h2");
    h.textContent = servicios[i].nombre;

    let p1 = document.createElement("p");
    p1.textContent = servicios[i].desc;

    let p2 = document.createElement("p");
    p2.textContent = "Precio: $" + servicios[i].precio;

    let img = document.createElement("img");
    img.src = servicios[i].img;

    div.appendChild(h);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(img);

    cont.appendChild(div);
  }
}

// Alta

if (pagina.includes("alta")) {
  let titulo = document.createElement("h2");
  titulo.textContent = "Alta de Servicio";
  cont.appendChild(titulo);

  let form = document.createElement("form");
  form.id = "formServicio";
  form.innerHTML = `
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" required>

    <label for="descripcion">Descripción:</label>
    <textarea id="descripcion" required></textarea>

    <label for="precio">Precio:</label>
    <input type="number" id="precio" min="1" required>

    <label for="imagen">Imagen (URL):</label>
    <input type="text" id="imagen" placeholder="images/default.png" required>

    <button type="submit">Guardar</button>
    <div id="mensajeError"></div>
  `;
  cont.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const imagen = document.getElementById("imagen").value.trim();
    const mensajeError = document.getElementById("mensajeError");

    // Validaciones
    if (!nombre || !descripcion || isNaN(precio) || precio <= 0 || !imagen) {
      mensajeError.textContent =
        "Por favor, completa todos los campos correctamente. Ejemplo: precio mayor a 0 e imagen válida.";
      return;
    }

    // Crear objeto servicio
    const nuevoServicio = {
      nombre,
      desc: descripcion,
      precio,
      img: imagen,
    };

    // Obtener servicios existentes
    let servicios = JSON.parse(localStorage.getItem("productos")) || [];

    // Agregar nuevo servicio
    servicios.push(nuevoServicio);

    // Guardar en localStorage
    localStorage.setItem("productos", JSON.stringify(servicios));

    // Redirigir a servicios.html
    window.location.href = "servicios.html";
  });
}
