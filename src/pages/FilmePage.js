import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const FilmePage = () => {
    const { id } = useParams();

    const [filme, setFilme] = useState('');

    useEffect(() => {
        async function buscarFilme() {
            const filmes = axios.get(`http://143.198.156.185/api/filmes/porid/${id}`).then(function (value) {
                setFilme(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }

        buscarFilme();
    });

    return (
        <div className="container mt-5">
            <div className='card text-bg-dark'>
                {filme.imagens && filme.imagens[1] && (
                    <img src={filme.imagens[0].url} class="card-img" alt="..."></img>)}
                    <div class="card-mg-overlay">
                        <h6 class="card-title text-center fs-2">{filme.titulo}</h6>
                    </div>
            </div>
        </div>
    );
};

export default FilmePage;
