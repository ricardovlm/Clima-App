import React from "react";

const Formulario = () => {
  return (
    <form>
      <div className="row">
        <div className="input-field col s12">
          <input id="ciudad" name="ciudad" type="text" className="validate" />
          <label htmlFor="ciudad">Cuidad</label>
        </div>
        <div className="input-field col s12">
          <select name="pais" id="pais">
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais">Pais</label>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
