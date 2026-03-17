var cont = document.getElementById("contenido");

var equipo = [
    {nombre:"Jorge Vizaith", exp:"Programador Web"},
    {nombre:"Sianya Demuny", exp:"Bases de Datos"},
    {nombre:"Luis Chavez", exp:"Redes y Servidores"}
];

for (let i = 0; i < equipo.length; i++)
{
    let div = document.createElement("div");

    let h = document.createElement("h2");
    h.textContent = equipo[i].nombre;

    let p = document.createElement("p");
    p.textContent = equipo[i].exp;

    div.appendChild(h);
    div.appendChild(p);

    cont.appendChild(div);
}