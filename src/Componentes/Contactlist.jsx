const Contactlist = ({ contactos }) => {
  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
        </tr>
      </thead>

      <tbody>
        {contactos.map((c, i) => (
          <tr key={i}>
            <td>{c.nombre}</td>
            <td>{c.apellido}</td>
            <td>{c.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Contactlist;