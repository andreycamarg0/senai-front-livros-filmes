import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'react-bootstrap';

function CadastroPageReserva() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleConfirmarSenhaChange = (event) => {
    setConfirmarSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem');
      return;
    }

    // Chamada para API ou lógica de cadastro aqui
    console.log('Cadastro realizado com sucesso!');

    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setErro('');
  };

  return (
    <div className="container mt-5">
      <h1>Cadastro</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="senha">Senha:</Label>
          <Input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmarSenha">Confirmar Senha:</Label>
          <Input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={handleConfirmarSenhaChange}
          />
        </FormGroup>

        {erro && <p className="text-danger">{erro}</p>}

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}

export default CadastroPageReserva;
