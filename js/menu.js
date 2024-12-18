        // Estructura del menú
        const menuEstructura = [
            { nombre: "Inicio", url: "index.html" },
            { nombre: "Sedes", url: "sedes.html" },
            { nombre: "Diseño Curricular", url: "diseño.html" },
            { nombre: "Inscripcion", url: "inscripcion.html" },
            { nombre: "Biblioteca", url: "Libros.html" },
            { nombre: "Contacto", url: "contacto.html" },
        ];

        // Generar menú dinámico
        const menu = document.getElementById("menu");

        menuEstructura.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            if (item.url) {
                // Enlace directo (sin submenús)
                menuItem.innerHTML = `<a href="${item.url}" class="nav-item nav-link">${item.nombre}</a>`;
            } else {
                // Categoría con submenús
                menuItem.innerHTML = `<span>${item.nombre} ▼</span>`;

                // Crear submenú
                const subMenu = document.createElement("div");
                subMenu.classList.add("submenu");

                item.submenus.forEach(subitem => {
                    const subMenuItem = document.createElement("div");
                    subMenuItem.innerHTML = `<a href="${subitem.url}">${subitem.nombre}</a>`;
                    subMenu.appendChild(subMenuItem);
                });

                // Mostrar/ocultar submenú al hacer clic
                menuItem.addEventListener("click", () => {
                    subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
                });

                menuItem.appendChild(subMenu);
            }

            menu.appendChild(menuItem);
        });