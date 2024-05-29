import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();

        let response = await axios.post('http://143.198.156.185/api/auth/login', {
            "email": email,
            "password": password
        }).then(function (value) {
            setSuccess(`Seja bem vindo, ${value.data.user.name}!`);
            setError(null);
          })
          .catch(function (value) {
            console.log(value);
            setError(value.response.data.error);
            setSuccess(null);
          });
        }

    return (
        <div className="card">

            <div className="card-header">
                Login
            </div>
            <div className="card-body">
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-2">
                        Entrar
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default LoginPage;