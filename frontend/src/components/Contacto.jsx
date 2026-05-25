import { useState } from "react";
import api from "../services/api";

function Contacto() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha_visita: "",
    lugar_interes: "",
    mensaje: "",
  });

  const [mensajeExito, setMensajeExito] = useState("");

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    api.post("contactos/", formulario)
      .then(() => {

        setMensajeExito("Mensaje enviado correctamente.");

        setFormulario({
          nombre: "",
          correo: "",
          telefono: "",
          fecha_visita: "",
          lugar_interes: "",
          mensaje: "",
        });

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section id="contacto" className="bg-light py-5">

      <div className="container">

        <h2 className="text-center mb-4 text-dark">
          Formulario de contacto
        </h2>

        {mensajeExito && (
          <div className="alert alert-success text-center">
            {mensajeExito}
          </div>
        )}

        <form className="row g-3" onSubmit={enviarFormulario}>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre completo"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              name="correo"
              value={formulario.correo}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Teléfono"
              name="telefono"
              value={formulario.telefono}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              name="fecha_visita"
              value={formulario.fecha_visita}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Lugar de interés"
              name="lugar_interes"
              value={formulario.lugar_interes}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Mensaje"
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambio}
              required
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-success btn-lg">
              Enviar mensaje
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}

export default Contacto;