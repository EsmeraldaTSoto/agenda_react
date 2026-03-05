import { useState, useEffect } from "react";
import Agregarcontactos from "./Agregarcontactos";
import Contactlist from "./Contactlist";

const Agenda = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    fetch("http://www.raydelto.org/agenda.php")
      .then((res) => res.json())
      .then((data) => setContactos(data))
      .catch((err) => console.error(err));
  }, []);

  const agregarContacto = (nuevo) => {
    setContactos([...contactos, nuevo]);
  };

  return (
    <div className="agenda-container">
      <h1>Agenda React</h1>
      <Agregarcontactos onAdd={agregarContacto} />
      <Contactlist contactos={contactos} />
    </div>
  );
};

export default Agenda;