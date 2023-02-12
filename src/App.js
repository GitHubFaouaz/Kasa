import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FicheLogement from "./pages/FicheLogement/FicheLogement";

function App() {
  return (
    <div className="App">
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
