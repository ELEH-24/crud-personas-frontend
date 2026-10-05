function FormularioPersona({
  persona,
  idEditar,
  manejarCambio,
  manejarFocus,
  manejarBlur,
  guardarPersona,
  actualizarPersona,
  cancelarEdicion
}) {

  return (
    <form
      onSubmit={idEditar ? actualizarPersona : guardarPersona}
    >

      <div className="campo">
        <label>Tipo de documento</label>

        <select
          name="tipoDocumento"
          value={persona.tipoDocumento}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        >
          <option value="">Seleccione...</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CE">Cédula de extranjería</option>
          <option value="PAS">Pasaporte</option>
        </select>
      </div>

      <div className="campo">
        <label>Número de documento</label>

        <input
          type="text"
          name="numeroDocumento"
          value={persona.numeroDocumento}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        />
      </div>

      <div className="campo">
        <label>Nombres</label>

        <input
          type="text"
          name="nombres"
          value={persona.nombres}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        />
      </div>

      <div className="campo">
        <label>Apellidos</label>

        <input
          type="text"
          name="apellidos"
          value={persona.apellidos}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        />
      </div>

      <div className="campo">
        <label>Dirección</label>

        <input
          type="text"
          name="direccion"
          value={persona.direccion}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        />
      </div>

      <div className="campo">
        <label>Ciudad</label>

        <select
          name="ciudad"
          value={persona.ciudad}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        >
          <option value="">Seleccione...</option>
          <option value="medellin">Medellín</option>
          <option value="bogota">Bogotá</option>
          <option value="cali">Cali</option>
          <option value="cucuta">Cúcuta</option>
        </select>
      </div>

      <div className="campo">
        <label>Fecha de nacimiento</label>

        <input
          type="date"
          name="fechaNacimiento"
          value={persona.fechaNacimiento}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        />
      </div>

      <div className="campo">
        <label>Correo electrónico</label>

        <input
          type="email"
          name="correo"
          value={persona.correo}
          onChange={manejarCambio}
          onFocus={manejarFocus}
          onBlur={manejarBlur}
        />
      </div>

      <div className="botones">

        <button type="submit">
          {idEditar ? 'Actualizar' : 'Guardar'}
        </button>

        {idEditar && (
          <button
            type="button"
            onClick={cancelarEdicion}
          >
            Cancelar
          </button>
        )}

      </div>

    </form>
  );
}

export default FormularioPersona;