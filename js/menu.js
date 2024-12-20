// Estructura del menú
const menuEstructura = [
    { nombre: "Inicio", url: "index.html" },
    { nombre: "Sedes", url: "sedes.html" },
    { nombre: "Diseño Curricular", url: "diseño.html" },
    { 
        nombre: "Proyectos 2024",
        submenus: [
            { nombre: "Cuerpo y Alma Viajera", url: "proyecto-alma.html" },
            { nombre: "Huellas Andinas", url: "proyecto-huellas.html" },
            { nombre: "Sinfonía de Tierra y Saber: Cultivos Ancestrales", url: "proyecto-cultivo.html" },
            { nombre: "Juegos tradicionales con pensamiento matemáticos", url: "proyecto-juegos.html" },
            { nombre: "La vuelta al mundo en 80 obras", url: "proyecto-mundo.html" },
            { nombre: "El diablo en las alturas", url: "proyecto-diablo.html" },

        ]
    },
    { nombre: "Inscripción", url: "inscripcion.html" },
    { nombre: "Biblioteca", url: "Libros.html" },
    { nombre: "Contacto", url: "contacto.html" },
];

// Generar menú dinámico
const menu = document.getElementById("menu");

menuEstructura.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("nav-item"); // Clase general para cada ítem del menú

    if (item.submenus) {
        // Si tiene submenús, crear estructura dropdown
        menuItem.classList.add("dropdown");
        menuItem.innerHTML = `
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${item.nombre}</a>
            <div class="dropdown-menu m-0"></div>
        `;

        // Crear y agregar submenús
        const dropdownMenu = menuItem.querySelector(".dropdown-menu");
        item.submenus.forEach(subitem => {
            const subMenuItem = document.createElement("a");
            subMenuItem.href = subitem.url;
            subMenuItem.classList.add("dropdown-item");
            subMenuItem.textContent = subitem.nombre;
            dropdownMenu.appendChild(subMenuItem);
        });

    } else {
        // Si no tiene submenús, crear enlace directo
        menuItem.innerHTML = `
            <a href="${item.url}" class="nav-link">${item.nombre}</a>
        `;
    }

    // Agregar el ítem al menú principal
    menu.appendChild(menuItem);
});
