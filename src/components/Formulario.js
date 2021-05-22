import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto, superado, msg}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const guardarGasto = (e) => {
        e.preventDefault();

        // Validar
        if (cantidad < 0 || !cantidad || nombre.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        // Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

    }

    return (
        <form
            onSubmit={guardarGasto}
            className="default-form">
            <h2>Agrega tus datos aquí</h2>

            { error ? <Error mensaje="Error en su presupuesto por favor llene los campos correctamente" /> : null}
            { superado ? <Error mensaje={msg} /> : null}

            <div className="campo">

                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setNombre(e.target.value)}
                />

                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />

            </div>
        </form>
    );
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;