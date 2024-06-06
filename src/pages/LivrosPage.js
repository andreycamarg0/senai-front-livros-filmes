import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const LivrosPage = () => {
  const { id } = useParams();

  const [livros, setLivros] = useState("");

  useEffect(() => {
    async function buscarLivro() {
      const livros = axios
        .get(`http://143.198.156.185/api/livros`)
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
      {(livros || []).map((livro) => (
        <div className="card text-bg-dark">
          {livro.imagens && livro.imagens[0] && (
            <img src={livro.imagens[0].url} class="card-img" alt="..."></img>
          )}
          <Card>
            <Card.Body>
              <Card.Title>{livro.titulo}</Card.Title>
              <Card.Text>{livro.sinopse}</Card.Text>
              <Card.Text>
                Pessoas que deram 5 estrelas:{livro.qtd_favoritos}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default LivrosPage;
