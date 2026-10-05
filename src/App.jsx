import { useEffect, useState } from 'react';

import FormularioPersona from './components/FormularioPersona';
import ListaPersonas from './components/ListaPersonas';
import Mensaje from './components/Mensaje';

import {
  obtenerPersonas,
  crearPersona,
  actualizarPersona,
  eliminarPersona
} from './services/personaService';


const personaInicial = {
  tipoDocumento: '',
  numeroDocumento: '',
  nombres: '',
  apellidos: '',
  direccion: '',
  ciudad: '',
  fechaNacimiento: '',
  correo: ''
};


function App() {

  const [persona, setPersona] = useState(personaInicial);

  const [personas, setPersonas] = useState([]);

  const [idEditar, setIdEditar] = useState(null);

  const [mensaje, setMensaje] = useState('');


  // =========================
  // CONSULTAR
  // =========================

  const consultarPersonas = async () => {

    try {

      const datos = await obtenerPersonas();

      setPersonas(datos);

    } catch (error) {

      console.error(error);

      setMensaje('Error consultando las personas');

    }

  };


  useEffect(() => {

    consultarPersonas();

  }, []);


  // =========================
  // ONCHANGE
  // =========================

  const manejarCambio = (evento) => {

    const nombre = evento.target.name;

    const valor = evento.target.value;

    setPersona({
      ...persona,
      [nombre]: valor
    });

  };


  // =========================
  // FOCUS
  // =========================

  const manejarFocus = (evento) => {

    evento.target.style.backgroundColor = '#80F527';

  };


  // =========================
  // BLUR
  // =========================

  const manejarBlur = (evento) => {

    evento.target.style.backgroundColor = 'white';

  };


  // =========================
  // CREAR
  // =========================

  const guardarPersona = async (evento) => {

    evento.preventDefault();

    try {

      await crearPersona(persona);

      setMensaje('Persona creada correctamente');

      setPersona(personaInicial);

      consultarPersonas();

    } catch (error) {

      console.error(error);

      setMensaje('Error creando la persona');

    }

  };


  // =========================
  // EDITAR
  // =========================

  const editarPersona = (personaSeleccionada) => {

    setPersona({
      tipoDocumento: personaSeleccionada.tipoDocumento,
      numeroDocumento: personaSeleccionada.numeroDocumento,
      nombres: personaSeleccionada.nombres,
      apellidos: personaSeleccionada.apellidos,
      direccion: personaSeleccionada.direccion,
      ciudad: personaSeleccionada.ciudad,
      fechaNacimiento: personaSeleccionada.fechaNacimiento,
      correo: personaSeleccionada.correo
    });

    setIdEditar(personaSeleccionada.id);

    setMensaje('Editando persona');

  };


  // =========================
  // ACTUALIZAR
  // =========================

  const actualizarPersonaHandler = async (evento) => {

    evento.preventDefault();

    try {

      await actualizarPersona(idEditar, persona);

      setMensaje('Persona actualizada correctamente');

      setPersona(personaInicial);

      setIdEditar(null);

      consultarPersonas();

    } catch (error) {

      console.error(error);

      setMensaje('Error actualizando la persona');

    }

  };


  // =========================
  // ELIMINAR
  // =========================

  const eliminarPersonaHandler = async (id) => {

    const confirmar = window.confirm(
      '¿Está seguro de eliminar esta persona?'
    );

    if (!confirmar) {
      return;
    }

    try {

      await eliminarPersona(id);

      setMensaje('Persona eliminada correctamente');

      consultarPersonas();

    } catch (error) {

      console.error(error);

      setMensaje('Error eliminando la persona');

    }

  };


  // =========================
  // CANCELAR
  // =========================

  const cancelarEdicion = () => {

    setPersona(personaInicial);

    setIdEditar(null);

    setMensaje('');

  };


  return (

    <div className="contenedor">

      <div className="formulario">

        <h1>
          Tecnológico de Antioquia
        </h1>

        <h2>
          Gestión de Personas
        </h2>


        <FormularioPersona

          persona={persona}

          idEditar={idEditar}

          manejarCambio={manejarCambio}

          manejarFocus={manejarFocus}

          manejarBlur={manejarBlur}

          guardarPersona={guardarPersona}

          actualizarPersona={actualizarPersonaHandler}

          cancelarEdicion={cancelarEdicion}

        />


        <Mensaje
          mensaje={mensaje}
        />

      </div>


      <ListaPersonas

        personas={personas}

        editarPersona={editarPersona}

        eliminarPersona={eliminarPersonaHandler}

      />

    </div>

  );
}


export default App;