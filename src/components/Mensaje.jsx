function Mensaje({ mensaje }) {

  if (!mensaje) {
    return null;
  }

  return (
    <p className="mensaje">
      {mensaje}
    </p>
  );
}

export default Mensaje;