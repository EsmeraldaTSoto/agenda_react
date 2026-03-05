import { useState } from "react";

const Agregarcontactos = ({ onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevo = { nombre, apellido, telefono };

    fetch("http://www.raydelto.org/agenda.php", {
      method: "POST",
      body: JSON.stringify(nuevo),
    })
      .then(() => {
        onAdd(nuevo);
        setNombre("");
        setApellido("");
        setTelefono("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />

      <button type="submit">Agregar contacto</button>
    </form>
  );
};

export default Agregarcontactos;