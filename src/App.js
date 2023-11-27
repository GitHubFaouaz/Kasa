import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FicheLogement from "./pages/FicheLogement/FicheLogement";

function App() {
  return (
    <div className={style.App}>
      <Header />

      <main id={style.main}>
        <Router basename="https://githubfaouaz.github.io/Kasa/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<About />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
