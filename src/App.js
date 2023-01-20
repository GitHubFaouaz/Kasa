import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element="" />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
