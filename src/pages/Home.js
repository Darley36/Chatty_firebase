import React from "react";

export default function Home() {
  return (
    <div>
      <div className="home-app">
        <Header></Header>
        <section>
          <img src="https://www.sofka.com.co/wp-content/uploads/2021/02/sofkau-logo-horizontal.png" />
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
                <Link className="boton-crear" to="/login">
                  Iniciar sesion
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </div>
  );
}
