import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {Container} from "react-bootstrap";
import NavBarComponent from "./components/NavBarComponent";
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import FilmePage from './pages/FilmePage';
import LivroPage from './pages/LivroPage';
import './App.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/cadastro",
        element: <CadastroPage />,
    },
    {
        path: "/livros",
        element: <LivroPage />,
    },
    {
        path: "/filmes",
        element: <FilmePage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBarComponent />
     <Container className="pt-2">
         <RouterProvider router={router} />
     </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
