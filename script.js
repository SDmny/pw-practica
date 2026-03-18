var cont = document.getElementById("contenido");

//Header
var header = document.createElement("header");

header.innerHTML = `
<h1>Sistema de Servicios - Ingeniero en Sistemas</h1>

<nav>
<a href="index.html">Inicio</a>
<a href="servicios.html">Servicios</a>
</nav>
`;

document.body.prepend(header);

//Footer
var footer = document.createElement("footer");

footer.innerHTML = `
<p>2026 - ISC - Catalogo de Servicios</p>
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
nombre:"Jorge Vizaith",
area:"Desarrollo Web y Software",
exp:"Experiencia en JavaScript, HTML, CSS, C#, MySQL",
edu:"Estudiante de Ingeniería en Sistemas Computacionales",
extra:"Experiencia en mantenimiento, soporte técnico y redes"
},

{
nombre:"Sianya Demuñy",
area:"Bases de Datos",
exp:"Experiencia en SQL, modelado y diseño de BD",
edu:"Estudiante de Ingeniería en Sistemas Computacionales",
extra:"Experiencia en análisis de sistemas y documentación"
}

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

var servicios = [

{nombre:"Desarrollo Web",desc:"Paginas profesionales",precio:1500,img:"images/computadora.png"},
{nombre:"Mantenimiento",desc:"Reparacion PC",precio:500,img:"images/Mantenimiento.png"},
{nombre:"Redes",desc:"Instalacion redes",precio:2000,img:"images/Redes.png"},
{nombre:"Base de Datos",desc:"Diseño BD",precio:1200,img:"images/BD.png"},
{nombre:"Soporte",desc:"Soporte tecnico",precio:300,img:"images/Soporte.png"},
{nombre:"App Movil",desc:"Android",precio:2500,img:"images/AppMovil.png"},
{nombre:"Seguridad",desc:"Ciberseguridad",precio:1800,img:"images/Seguridad.png"},
{nombre:"Servidor",desc:"Config servidor",precio:2200,img:"images/Servidor.png"},
{nombre:"Linux",desc:"Admin Linux",precio:900,img:"images/Linux.png"},
{nombre:"Consultoria",desc:"Asesoria",precio:1100,img:"images/Consultoria.png"}

];

for (let i = 0; i < servicios.length; i++) {

let div = document.createElement("div");

if (servicios[i].precio > 1000)
{
div.className = "servicio caro";
}
else
{
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