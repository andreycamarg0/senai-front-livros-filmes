import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const LivroPage = () => {
    const { id } = useParams();

    const [livros, setLivros] = useState('');

    useEffect(() => {
        async function buscarLivro() {
            const livros = axios.get(`http://143.198.156.185/api/livros/porid/${id}`).then(function (value) {
                setLivros(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }

        buscarLivro();
    });

    return (
        <div className="container mt-5">
            <div className='card text-bg-dark'>
            <h6>Os melhores livros com as melhores classificações, voce encontrará abaixo!!</h6>
                {livros.imagens && livros.imagens[0] && (
                    <img src={livros.imagens[0].url} class="card-img" alt="..."></img>)}
                    <div class="card-mg-overlay">
                        <h6 class="card-title text-center fs-2">{livros.titulo}</h6>
                    </div>
            </div>
        </div>
    );
};

export default LivroPage;
