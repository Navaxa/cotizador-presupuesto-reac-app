import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante, setPregunta}) => {

    // Definir State
    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    const definirPresupuesto = (e) => {
        setCantidad( parseInt(e.target.value) );

        // Validar
        if (cantidad < 0) {
            setError(true);
            return;
        }

        setError(false);

    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 0 || !cantidad) {
            setError(true);
            return;
        }

        setError(false);

        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(true);

    }

    return (
        <>
          <h2>Coloca tu presupuesto</h2>  
          {error ? <Error mensaje="El presupuesto es incorrecto" /> : null }
          <form onSubmit={agregarPresupuesto}>
              <input type="number"
                     className="u-full-width"
                     name="cantidad"
                     placeholder="Coloca tu presupuesto"
                     onChange={definirPresupuesto}
              />
              
              <input type="submit"
                     className="u-full-width button-primary"
                     value="Definir presupuesto"
              />
              
          </form>
        </>
    );
};

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}

export default Pregunta;