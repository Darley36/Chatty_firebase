import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="home-app">
        <section>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xQRVP9WZGXHvBl3mTjuygGbcFpJk-5G4VA&usqp=CAU" />
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Bienvenido al chat grupal</h1>
              <p className="lead">
                Diviertete hablando con tus amigos
              </p>
              <div className="mt-4">
                <Link className="boton-crear" to="/signup">
                  Crear Cuenta
                </Link>
                <br/>
                <Link className="boton-crear" to="/login">
                  Iniciar sesion
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
