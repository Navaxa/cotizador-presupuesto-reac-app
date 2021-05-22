import { useState,useEffect } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from "./components/Pregunta";


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);
  const [superado, setSuperado] = useState(false);
  let msg = `El gasto ha sido superado, solo te resntan: ${restante}`;

  useEffect(() => {
    if (crearGasto) {
      
      if ( (restante - gasto.cantidad) < 0) {
        setSuperado(true);
        return;
      }

      setSuperado(false);

      setGastos([...gastos, gasto]);
      setCrearGasto(false);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    }
    
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">

          {!pregunta
            ?
            (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setPregunta={setPregunta}
                restante={restante}
              />
            )
            :
            (
              <div className="row">

                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                    superado={superado}
                    msg={msg}
                  />
                </div>

                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>

              </div>
            )
          }

        </div>

      </header>
    </div>
  );
}

export default App;
