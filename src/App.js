import style from "./App.module.css";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={style.App}>
      <Header />

      <main id={style.main}>
        <Routes>
          {/* Redirige vers la page d'accueil si l'URL est "https://GitHubFaouaz.githup.io/Kasa" */}
          {/* window.location.pathname === "/home"; */}
          {/* {window.location.pathname ===
          "https://GitHubFaouaz.githup.io/Kasa" ? (
            <Route path="/" element={<Home />} />
          ) : ( */}
          {/* {window.location.pathname ===
            "https://GitHubFaouaz.githup.io/Kasa" && (
            // <Route path="" element={<Home />} />
            <Navigate to="/" />
          )} */}

          <Route path="https://githubfaouaz.github.io/" element={<Home />} />
          <Route path="/Apropos" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
