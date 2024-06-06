import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const FilmesPage = () => {
  const { id } = useParams();

  const [filme, setFilme] = useState("");

  useEffect(() => {
    async function buscarFilme() {
      const filmes = axios
        .get(`http://143.198.156.185/api/filmes`)
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
      {(filme || []).map((film) => (
        <div className="card text-bg-dark">
          {film.imagens && film.imagens[0] && (
            <img src={film.imagens[0].url} class="card-img" alt="..."></img>
          )}
          <Card>
            <Card.Body>
              <Card.Title>{film.titulo}</Card.Title>
              <Card.Text>{film.sinopse}</Card.Text>
              <Card.Text>Pessoas que deram 5 estrelas:{film.qtd_favoritos}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default FilmesPage;
