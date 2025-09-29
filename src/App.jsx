import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Solar from "./pages/solar/Solar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solar" element={<Solar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
