import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Header3d from "./pages/Header3d";

function App() {
  return (
    <>
      <Header3d />
      <Navbar />
      <div className="hero">
        <h1>Arnab Chatterjee</h1>
        <p>Full-stack Developer</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tenetur
          hic consequatur mollitia inventore quis vel ipsam sit exercitationem.
          Quas voluptatibus eum eligendi rerum placeat impedit facilis
          perspiciatis adipisci aut explicabo natus, dolorem consequuntur
          ducimus consectetur culpa? Aspernatur, alias impedit!
        </p>
        <button>Visit My Portfolio</button>
      </div>
    </>
  );
}

export default App;
