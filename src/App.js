import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className={style.App}>
      <Header />

      <main id={style.main}>
        <Router basename="/Kasa">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apropos" element={<About />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            {/* <Route
              path="https://githubfaouaz.github.io/Kasa/"
              element={<Home />}
            /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
