function FilaPersona({
  persona,
  editarPersona,
  eliminarPersona
}) {

  return (
    <tr>

      <td>{persona.tipoDocumento}</td>

      <td>{persona.numeroDocumento}</td>

      <td>{persona.nombres}</td>

      <td>{persona.apellidos}</td>

      <td>{persona.direccion}</td>

      <td>{persona.ciudad}</td>

      <td>{persona.fechaNacimiento}</td>

      <td>{persona.correo}</td>

      <td>

        <button
          onClick={() => editarPersona(persona)}
        >
          Editar
        </button>

        <button
          className="eliminar"
          onClick={() => eliminarPersona(persona.id)}
        >
          Eliminar
        </button>

      </td>

    </tr>
  );
}

export default FilaPersona;