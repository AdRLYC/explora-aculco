import { useEffect, useState } from "react";
import api from "../services/api";

function AdminLugares() {

  const [lugares, setLugares] = useState([]);

  const [formulario, setFormulario] = useState({
    nombre: "",
    categoria: "",
    descripcion: "",
    ubicacion: "",
  });

  const [imagen, setImagen] = useState(null);

  const [editando, setEditando] = useState(false);
  const [idEditar, setIdEditar] = useState(null);

  // =========================
  // OBTENER LUGARES
  // =========================

  const obtenerLugares = () => {
    api.get("lugares/")
      .then((response) => {
        setLugares(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener lugares:", error);
      });
  };

  useEffect(() => {
    obtenerLugares();
  }, []);

  // =========================
  // MANEJAR INPUTS
  // =========================

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // MANEJAR IMAGEN
  // =========================

  const manejarImagen = (e) => {
    setImagen(e.target.files[0]);
  };

  // =========================
  // GUARDAR / EDITAR
  // =========================

  const guardarLugar = (e) => {

    e.preventDefault();

    const datos = new FormData();

    datos.append("nombre", formulario.nombre);
    datos.append("categoria", formulario.categoria);
    datos.append("descripcion", formulario.descripcion);
    datos.append("ubicacion", formulario.ubicacion);

    if (imagen) {
      datos.append("imagen", imagen);
    }

    // =========================
    // ACTUALIZAR
    // =========================

    if (editando) {

      api.put(`lugares/${idEditar}/`, datos, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

        .then(() => {
          obtenerLugares();
          limpiarFormulario();
        })

        .catch((error) => {
          console.error("Error al actualizar:", error);
        });

    } else {

      // =========================
      // CREAR
      // =========================

      api.post("lugares/", datos, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

        .then(() => {
          obtenerLugares();
          limpiarFormulario();
        })

        .catch((error) => {
          console.error("Error al guardar:", error);
        });
    }
  };

  // =========================
  // EDITAR
  // =========================

  const editarLugar = (lugar) => {

    setFormulario({
      nombre: lugar.nombre,
      categoria: lugar.categoria,
      descripcion: lugar.descripcion,
      ubicacion: lugar.ubicacion,
    });

    setEditando(true);
    setIdEditar(lugar.id);
  };

  // =========================
  // ELIMINAR
  // =========================

  const eliminarLugar = (id) => {

    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este lugar?"
    );

    if (confirmar) {

      api.delete(`lugares/${id}/`)

        .then(() => {
          obtenerLugares();
        })

        .catch((error) => {
          console.error("Error al eliminar:", error);
        });
    }
  };

  // =========================
  // LIMPIAR FORMULARIO
  // =========================

  const limpiarFormulario = () => {

    setFormulario({
      nombre: "",
      categoria: "",
      descripcion: "",
      ubicacion: "",
    });

    setImagen(null);

    setEditando(false);
    setIdEditar(null);
  };

  // =========================
  // RENDER
  // =========================

  return (

    <section id="admin-lugares" className="container py-5">

      <h2 className="text-center mb-4 text-dark">
        Administración de lugares turísticos
      </h2>

      {/* =========================
          FORMULARIO
      ========================= */}

      <form className="row g-3 mb-5" onSubmit={guardarLugar}>

        <div className="col-md-6">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre del lugar"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            name="categoria"
            className="form-control"
            placeholder="Categoría"
            value={formulario.categoria}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            name="ubicacion"
            className="form-control"
            placeholder="Ubicación"
            value={formulario.ubicacion}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            name="descripcion"
            className="form-control"
            placeholder="Descripción"
            rows="4"
            value={formulario.descripcion}
            onChange={manejarCambio}
            required
          ></textarea>
        </div>

        {/* =========================
            IMAGEN
        ========================= */}

        <div className="col-md-12">
          <input
            type="file"
            name="imagen"
            className="form-control"
            onChange={manejarImagen}
          />
        </div>

        {/* =========================
            BOTONES
        ========================= */}

        <div className="col-12 text-center">

          <button
            className="btn btn-success me-2"
            type="submit"
          >
            {editando
              ? "Actualizar lugar"
              : "Guardar lugar"}
          </button>

          {editando && (

            <button
              type="button"
              className="btn btn-secondary"
              onClick={limpiarFormulario}
            >
              Cancelar edición
            </button>

          )}

        </div>

      </form>

      {/* =========================
          TABLA
      ========================= */}

      <div className="table-responsive shadow rounded">

        <table className="table table-striped table-hover align-middle mb-0">

          <thead className="table-dark">

            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Ubicación</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>

          </thead>

          <tbody>

            {lugares.map((lugar) => (

              <tr key={lugar.id}>

                <td>

                  {lugar.imagen && (

                    <img
                      src={lugar.imagen}
                      alt={lugar.nombre}
                      width="80"
                      className="rounded"
                    />

                  )}

                </td>

                <td>{lugar.nombre}</td>

                <td>{lugar.categoria}</td>

                <td>{lugar.ubicacion}</td>

                <td>{lugar.descripcion}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editarLugar(lugar)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarLugar(lugar.id)}
                  >
                    Eliminar
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default AdminLugares;