function Footer() {
  return (

    <footer className="bg-dark text-white py-5">

      <div className="container text-center">

        <h4>Explora Aculco</h4>

        <p>
          Turismo, historia y tradición del Estado de México.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-3">

          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white text-decoration-none"
          >
            Facebook
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white text-decoration-none"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="text-white text-decoration-none"
          >
            YouTube
          </a>

        </div>

        <p className="small">
          © 2026 Explora Aculco | Aviso de privacidad
        </p>

      </div>

    </footer>
  );
}

export default Footer;