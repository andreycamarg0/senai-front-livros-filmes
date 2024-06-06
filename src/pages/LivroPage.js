import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const LivroPage = () => {
  const { id } = useParams();

  const [livros, setLivros] = useState("");

  useEffect(() => {
    async function buscarLivro() {
      const livros = axios
        .get(`http://143.198.156.185/api/livros/porid/${4}`)
        .then(function (value) {
          setLivros(value.data);
        })
        .catch(function (value) {
          console.log(value);
        });
    }

    buscarLivro();
  });

  return (
    <div className="container mt-5">
      <div className="card text-bg-dark">
        {livros.imagens && livros.imagens[0] && (
          <img src={livros.imagens[0].url} class="card-img" alt="..."></img>
        )}
        <Card>
          <Card.Body>
            <Card.Title>{livros.titulo}</Card.Title>
            <Card.Text>{livros.sinopse}</Card.Text>
            <Card.Text>
              Pessoas que deram 5 estrelas:{livros.qtd_favoritos}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LivroPage;
