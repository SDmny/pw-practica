var cont = document.getElementById("contenido");


// ===== HEADER =====

var header = document.createElement("header");

header.innerHTML = `
<h1>Sistema de Servicios - Ingeniero en Sistemas</h1>

<nav>
<a href="index.html">Inicio</a>
<a href="servicios.html">Servicios</a>
</nav>
`;

document.body.prepend(header);


// ===== FOOTER =====

var footer = document.createElement("footer");

footer.innerHTML = `
<p>2026 - ISC - Catalogo de Servicios</p>
`;

document.body.appendChild(footer);


// ===== DETECTAR PAGINA =====

var pagina = window.location.pathname;



// ===== INDEX =====

if (pagina.includes("index"))
{

var equipo = [

{nombre:"Jorge Vizaith",exp:"Desarrollo Web y Software"},
{nombre:"Sianya Demuny",exp:"Bases de Datos"}

];

for (let i=0;i<equipo.length;i++)
{

let div = document.createElement("div");
div.className = "card";

let h = document.createElement("h2");
h.textContent = equipo[i].nombre;

let p = document.createElement("p");
p.textContent = equipo[i].exp;

div.appendChild(h);
div.appendChild(p);

cont.appendChild(div);

}

}



// ===== SERVICIOS =====

if (pagina.includes("servicios"))
{

var servicios = [

{nombre:"Desarrollo Web",desc:"Paginas profesionales",precio:1500,img:"images/1.jpg"},
{nombre:"Mantenimiento",desc:"Reparacion PC",precio:500,img:"images/2.jpg"},
{nombre:"Redes",desc:"Instalacion redes",precio:2000,img:"images/3.jpg"},
{nombre:"Base de Datos",desc:"Diseño BD",precio:1200,img:"images/4.jpg"},
{nombre:"Soporte",desc:"Soporte tecnico",precio:300,img:"images/5.jpg"},
{nombre:"App Movil",desc:"Android",precio:2500,img:"images/6.jpg"},
{nombre:"Seguridad",desc:"Ciberseguridad",precio:1800,img:"images/7.jpg"},
{nombre:"Servidor",desc:"Servidor",precio:2200,img:"images/8.jpg"},
{nombre:"Linux",desc:"Admin Linux",precio:900,img:"images/9.jpg"},
{nombre:"Consultoria",desc:"Asesoria",precio:1100,img:"images/10.jpg"}

];

for (let i=0;i<servicios.length;i++)
{

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
img.width = 200;

div.appendChild(h);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(img);

cont.appendChild(div);

}

}