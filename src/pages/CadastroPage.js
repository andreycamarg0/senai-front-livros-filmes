import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

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
    <div className="cadastro template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
            <div className='40-w p-5 rounded bg-white'>
                <form>
                    <h3>Cadastro</h3>
                    <div className='mb-2'>
                <label htmlFor="fname">Primeiro Nome</label>
                    <input type="text" placeholder="Coloque seu nome" className='form-control'></input>
                </div>
                    <div className='mb-2'>
                <label htmlFor="lname">Ultimo Nome</label>
                    <input type="text" placeholder="Coloque seu sobrenome" className='form-control'></input>
                </div>
                <div className='mb-2'>
                <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Coloque seu Email" className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="Coloque sua senha" className='form-control'></input>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'>Cadastrar</button>
                </div>
                <p className='text-end mt-2'>
                  <Link to="/login" className='ms-2'>Ja tem o cadastro?</Link>
                </p>
                </form>
            </div>
        </div>
  );
}

export default CadastroPage;
