function Galeria() {
  return (
    <section id="galeria" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-dark">Galería multimedia</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              className="img-fluid rounded shadow galeria-img"
              alt="Paisaje turístico"
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              className="img-fluid rounded shadow galeria-img"
              alt="Naturaleza"
            />
          </div>

          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
              className="img-fluid rounded shadow galeria-img"
              alt="Arquitectura"
            />
          </div>
        </div>

        <div className="ratio ratio-16x9 mt-5 shadow rounded overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Video turístico"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center mt-4">
          <audio controls>
            <source
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              type="audio/mpeg"
            />
            Tu navegador no soporta audio.
          </audio>
        </div>
      </div>
    </section>
  );
}

export default Galeria;