import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-between">
        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            📒 Contacto
          </Link>
        </div>
        <Navbar.Brand className="mr-3">Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
