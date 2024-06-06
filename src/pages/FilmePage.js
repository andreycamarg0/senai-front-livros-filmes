import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MDBContainer from "react"

const FilmePage = () => {
  const { id } = useParams();

  const [filme, setFilme] = useState("");

  useEffect(() => {
    async function buscarFilme() {
      const filmes = axios
        .get(`http://143.198.156.185/api/filmes/porid/${id}`)
        .then(function (value) {
          setFilme(value.data);
        })
        .catch(function (value) {
          console.log(value);
        });
    }

    buscarFilme();
  });

  return (
    <div className="container mt-5">
      <div className="card text-bg-dark">
        {filme.imagens && filme.imagens[1] && (
          <img src={filme.imagens[0].url} class="card-img" alt="..."></img>
        )}
        <Card>
          <Card.Body>
            <Card.Title>{filme.titulo}</Card.Title>
            <Card.Text>{filme.sinopse}</Card.Text>
            <Card.Text>
              Pessoas que deram 5 estrelas:{filme.qtd_favoritos}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FilmePage;
