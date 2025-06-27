import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import About from "./components/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
