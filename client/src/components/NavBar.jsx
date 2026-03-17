import { useState } from "react";
import "../styles/navbar.css";
import mockup from "../assets/logo-3.png";
import { openPlayStore } from "../utils/appLinks";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* <div className="logo">APPRIX</div> */}
        <div className="logo-wrapper">
          <img className="logo-image" src={mockup} alt="Apprix" sizes={40} />
        </div>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#features">Funcionalidades</a>
          <a href="#how">Como funciona</a>
          <a href="#pricing">Planos</a>
          <a href="#faq">FAQ</a>

          <button className="btn-primary" onClick={openPlayStore}>
            Baixar App
          </button>
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
