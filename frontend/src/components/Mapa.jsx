function Mapa() {
  return (
    <section id="mapa" className="container py-5">
      <h2 className="text-center mb-4 text-dark">
        Ubicación turística
      </h2>

      <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=Aculco%20Estado%20de%20Mexico&output=embed"
          allowFullScreen
          loading="lazy"
          title="Mapa de Aculco"
        ></iframe>
      </div>
    </section>
  );
}

export default Mapa;