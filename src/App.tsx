import "./styles.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario />
            </div>
            <div className="col m6 s12">Respuesta</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
