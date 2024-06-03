import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
        <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
            <div className='40-w p-5 rounded bg-white'>
                <form>
                    <h3>Login</h3>
                <div className='mb-2'>
                <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Coloque seu Email" className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="Coloque sua senha" className='form-control'></input>
                </div>
                <div className='mb-2'>
                    <input type='checkbox' className='custom-control custom-checkbox' id="check"></input>
                    <label htmlFor="check" className='custom-input-label ms-2'>
                        Lembrar de mim
                    </label>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'>Entrar</button>
                </div>
                <p className='text-end mt-2'>
                    Esqueceu <a href="">sua senha?</a><Link to="/cadastro" className='ms-2'>Ainda não tem o cadastro?</Link>
                </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;