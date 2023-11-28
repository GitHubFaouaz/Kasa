import style from "./App.module.css";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={style.App}>
      <Header />

      <main id={style.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route
            path="https://GitHubFaouaz.githup.io/Kasa"
            element={<Home />}
          />
          {/* Ajoutez une condition pour l'exception */}
          {/* {window.location.href === "https://GitHubFaouaz.githup.io/Kasa" ? (
            <Route
              path="https://GitHubFaouaz.githup.io/Kasa"
              element={<Home />}
            />
          ) : (
            // La route par défaut si l'exception n'est pas satisfaite
            <Route path="*" element={<ErrorPage />} />
          )} */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;