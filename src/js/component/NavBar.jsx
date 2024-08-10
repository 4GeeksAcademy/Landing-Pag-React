//1. Importar React

import React from "react";

//2. Crear compenentes JSX

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div class="container-fluid ">
        <a class="navbar-brand text-white fw-semibold" href="#">Start Bootstrap</a>
        <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link text-white" href="#about">About</a>
            <a class="nav-link text-white" href="#services">Services</a>
            <a class="nav-link text-white" href="#portfolio">Portfolio</a>
            <a class="nav-link text-white" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
//3. Exportación del componente
export default NavBar;
