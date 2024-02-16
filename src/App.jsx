import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./assets/components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/views/HomePage";
import Contacto from "./assets/views/Contacto";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
