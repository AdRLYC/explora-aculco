import { useEffect, useState } from "react";
import api from "../services/api";

function Lugares() {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    api.get("lugares/")
      .then((response) => {
        console.log("Lugares recibidos:", response.data);
        setLugares(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener lugares:", error);
      });
  }, []);

  return (
    <section id="lugares" className="container py-5">
      <h2 className="text-center mb-4 text-dark">Lugares turísticos</h2>

      <p className="text-center text-dark">
        Total de lugares: {lugares.length}
      </p>

      <div className="row">
        {lugares.map((lugar) => (
          <div className="col-md-4 mb-4" key={lugar.id}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title text-dark">{lugar.nombre}</h5>
                <p className="text-success fw-bold">{lugar.categoria}</p>
                <p className="card-text text-dark">{lugar.descripcion}</p>
                <p className="small text-secondary">{lugar.ubicacion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lugares;