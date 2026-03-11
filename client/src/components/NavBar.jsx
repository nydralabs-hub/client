import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">Preciko</div>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#features">Funcionalidades</a>
          <a href="#how">Como funciona</a>
          <a href="#pricing">Planos</a>
          <a href="#faq">FAQ</a>

          <button className="btn-primary">Baixar App</button>
        </div>

        <div
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
