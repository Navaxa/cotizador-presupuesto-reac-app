import React from 'react';
import { revisarPresupuesto } from '../helper';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <>
            <div className="alert alert-primary">
                presupuesto: {presupuesto}
            </div>  

            <div className={revisarPresupuesto(presupuesto, restante)}>
                restante: {restante}
            </div>
        </>
    );
};

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;