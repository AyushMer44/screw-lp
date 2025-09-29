import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Solar from "./pages/solar/Solar";
import Contact from "./pages/contact/Contact";
import Products from "./pages/product/Products";
import Install from "./pages/insatallation/Install";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/installation" element={<Install />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
