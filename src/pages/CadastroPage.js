import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function CadastroPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            defaultValue="Andrey"
          />
          <Form.Control.Feedback> Muito Bom!!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Sobrenome"
            defaultValue="Camargo"
          />
          <Form.Control.Feedback>Perfeito!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Apelido</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Apelido"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por Favor escolha um apelido.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="text" placeholder="*****" required />
          <Form.Control.Feedback type="invalido">
            Por favor coloque uma senha valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control type="text" placeholder="****" required />
          <Form.Control.Feedback type="invalido">
            Por favor coloque a mesma senha digitada antes.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Leia e concorde com os termos e condições!!"
          feedback="Você deve concordar antes de enviar."
          feedbackType="invalido"
        />
      </Form.Group>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}

export default CadastroPage;
