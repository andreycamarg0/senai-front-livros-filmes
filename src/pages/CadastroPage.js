import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import email from 'react'

const CadastroPage = () => {
  const [cadastro, setCadastro] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e){
      e.preventDefault();

      let response = await axios.post('http://143.198.156.185/api/auth/register', {
          "email": email,
          "password": password
      }).then(function (value) {
          setSuccess(`Cadastro realizado, ${value.data.user.name}!`);
          setError(null);
        })
        .catch(function (value) {
          console.log(value);
          setError(value.response.data.error);
          setSuccess(null);
        });
      }

  return (
    <div className="cadastro template d-flex justify-content-center align-items-center 100-w 100-vh bg-black">
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
