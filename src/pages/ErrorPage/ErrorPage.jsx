import style from "./ErrorPage.module.css";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  document.title = "404";
  return (
    <>
      <div className={style.errorContaine}>
        <h1 className={style.error404}>404</h1>
        <p className={style.errorText}>
          Oups! La page que vous demandez n'existe pas.
        </p>

        <Link to="/" className={style.linkHome}>
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
