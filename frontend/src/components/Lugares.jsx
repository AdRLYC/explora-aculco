import { useEffect, useState } from "react";
import api from "../services/api";

function Lugares() {
  const [lugares, setLugares] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    api
      .get("lugares/")
      .then((response) => {
        setLugares(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener lugares:", error);
      });
  }, []);

  const categorias = [
    "Todos",
    ...new Set(lugares.map((lugar) => lugar.categoria)),
  ];

  const lugaresFiltrados = lugares.filter((lugar) => {
    const textoBusqueda = busqueda.toLowerCase();

    const coincideBusqueda =
      lugar.nombre.toLowerCase().includes(textoBusqueda) ||
      lugar.descripcion.toLowerCase().includes(textoBusqueda) ||
      lugar.ubicacion.toLowerCase().includes(textoBusqueda) ||
      lugar.categoria.toLowerCase().includes(textoBusqueda);

    const coincideCategoria =
      categoriaSeleccionada === "Todos" ||
      lugar.categoria === categoriaSeleccionada;

    return coincideBusqueda && coincideCategoria;
  });

  const alternarFavorito = (lugar) => {
    const yaExiste = favoritos.some((fav) => fav.id === lugar.id);

    if (yaExiste) {
      setFavoritos(favoritos.filter((fav) => fav.id !== lugar.id));
    } else {
      setFavoritos([...favoritos, lugar]);
    }
  };

  return (
    <section id="lugares" className="container py-5">
      <h2 className="text-center mb-4 text-dark">Lugares turísticos</h2>

      <p className="text-center text-muted">
        Explora los atractivos culturales, naturales e históricos de Aculco.
      </p>

      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre, categoría, descripción o ubicación..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-center text-dark">
        Resultados encontrados: {lugaresFiltrados.length}
      </p>

      <div className="row">
        {lugaresFiltrados.length > 0 ? (
          lugaresFiltrados.map((lugar) => (
            <div className="col-md-4 mb-4" key={lugar.id}>
              <div className="card h-100 shadow lugar-card">
                {lugar.imagen && (
                  <img
                    src={lugar.imagen}
                    className="card-img-top"
                    alt={lugar.nombre}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title text-dark">{lugar.nombre}</h5>

                  <p className="text-success fw-bold">{lugar.categoria}</p>

                  <p className="card-text text-dark">{lugar.descripcion}</p>

                  <p className="small text-secondary">{lugar.ubicacion}</p>

                  <button
                    type="button"
                    className={
                      favoritos.some((fav) => fav.id === lugar.id)
                        ? "btn btn-danger btn-sm"
                        : "btn btn-outline-danger btn-sm"
                    }
                    onClick={() => alternarFavorito(lugar)}
                  >
                    {favoritos.some((fav) => fav.id === lugar.id)
                      ? "Quitar de favoritos"
                      : "Agregar a favoritos"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center">
              No se encontraron lugares con esa búsqueda.
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-center text-dark mb-4">Favoritos turísticos</h3>

        {favoritos.length > 0 ? (
          <div className="row">
            {favoritos.map((favorito) => (
              <div className="col-md-4 mb-3" key={favorito.id}>
                <div className="card shadow h-100">
                  {favorito.imagen && (
                    <img
                      src={favorito.imagen}
                      className="card-img-top"
                      alt={favorito.nombre}
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      {favorito.nombre}
                    </h5>

                    <p className="text-success fw-bold">
                      {favorito.categoria}
                    </p>

                    <p className="small text-secondary">
                      {favorito.ubicacion}
                    </p>

                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => alternarFavorito(favorito)}
                    >
                      Quitar de favoritos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info text-center">
            Aún no has agregado lugares favoritos.
          </div>
        )}
      </div>
    </section>
  );
}

export default Lugares;