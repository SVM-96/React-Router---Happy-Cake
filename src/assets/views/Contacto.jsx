import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Contacto = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">¿Cuentanos, en que te podemos ayudar?</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <button type="button" className="btn btn-danger">
        Enviar
      </button>
    </Container>
  );
};

export default Contacto;
