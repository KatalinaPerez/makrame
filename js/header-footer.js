// header-footer.js

document.addEventListener("DOMContentLoaded", () => {
    const header = `
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #95a800;">
        <div class="container">
          <a class="navbar-brand" href="index.html">Micro Macramé</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
              <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
              <li class="nav-item"><a class="nav-link" href="#favoritos">Favoritos</a></li>
            </ul>
          </div>
        </div>
      </nav>`;
  
    const footer = `
      <div class="text-center p-3" style="background-color: #3d550c; color: #fff4ed;">
        © 2025 Micro Macramé - Todos los derechos reservados
      </div>`;
  
    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
  });