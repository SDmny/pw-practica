var cont = document.getElementById("contenido");

var servicios = [

{nombre:"Desarrollo Web",desc:"Paginas web",precio:1500,img:"imagenes/1.jpg"},
{nombre:"Mantenimiento PC",desc:"Reparación",precio:500,img:"imagenes/2.jpg"},
{nombre:"Redes",desc:"Instalación",precio:2000,img:"imagenes/3.jpg"},
{nombre:"Bases de Datos",desc:"Diseño BD",precio:1200,img:"imagenes/4.jpg"},
{nombre:"Soporte",desc:"Soporte técnico",precio:300,img:"imagenes/5.jpg"},
{nombre:"App Movil",desc:"Android",precio:2500,img:"imagenes/6.jpg"},
{nombre:"Seguridad",desc:"Ciberseguridad",precio:1800,img:"imagenes/7.jpg"},
{nombre:"Servidor",desc:"Config servidor",precio:2200,img:"imagenes/8.jpg"},
{nombre:"Linux",desc:"Admin Linux",precio:900,img:"imagenes/9.jpg"},
{nombre:"Consultoria",desc:"Asesoría",precio:1100,img:"imagenes/10.jpg"}

];

for (let i = 0; i < servicios.length; i++)
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