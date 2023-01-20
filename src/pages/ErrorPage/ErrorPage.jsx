import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="errorContaine">
      <p className="error404">404</p>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
};

export default ErrorPage;
