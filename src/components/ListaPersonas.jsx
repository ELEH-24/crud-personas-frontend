import FilaPersona from './FilaPersona';

function ListaPersonas({
  personas,
  editarPersona,
  eliminarPersona
}) {

  return (
    <div className="tabla">

      <h2>Personas registradas</h2>

      <table>

        <thead>
          <tr>
            <th>Tipo Documento</th>
            <th>Número Documento</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Fecha Nacimiento</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {personas.map((persona) => (
            <FilaPersona
              key={persona.id}
              persona={persona}
              editarPersona={editarPersona}
              eliminarPersona={eliminarPersona}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ListaPersonas;