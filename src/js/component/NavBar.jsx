//1. Importar React

import React from "react";

//2. Crear compenentes JSX

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container">
        <a className="navbar-brand text-white fw-semibold" href="#">Start Bootstrap</a>
        <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-white" href="#about">About</a>
            <a className="nav-link text-white" href="#services">Services</a>
            <a className="nav-link text-white" href="#portfolio">Portfolio</a>
            <a className="nav-link text-white" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
//3. Exportación del componente
export default NavBar;
