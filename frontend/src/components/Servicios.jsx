import { useEffect, useState } from "react";
import api from "../services/api";

function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    api.get("servicios/")
      .then((response) => {
        console.log("Servicios recibidos:", response.data);
        setServicios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener servicios:", error);
      });
  }, []);

  return (
    <section id="servicios" className="container py-5">
      <h2 className="text-center mb-4 text-dark">Servicios turísticos</h2>

      <div className="table-responsive shadow rounded">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-success">
            <tr>
              <th>Servicio</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Contacto</th>
            </tr>
          </thead>

          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.id}>
                <td>{servicio.servicio}</td>
                <td>{servicio.descripcion}</td>
                <td>{servicio.precio}</td>
                <td>{servicio.contacto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Servicios;