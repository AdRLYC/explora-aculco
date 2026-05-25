import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Lugares from "./components/Lugares";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Mapa from "./components/Mapa";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./styles/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lugares />
      <Servicios />
      <Galeria />
      <Mapa />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;