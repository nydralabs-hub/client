import { useState } from "react";
import "../styles/navbar.css";
import mockup from "../assets/logo-3.png";
import { openPlayStore } from "../utils/appLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo-wrapper">
          <img className="logo-image" src={mockup} alt="Apprix" />
        </div>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="#features" onClick={handleLinkClick}>
            Funcionalidades
          </a>

          <a href="#how" onClick={handleLinkClick}>
            Como funciona
          </a>

          <a href="#pricing" onClick={handleLinkClick}>
            Planos
          </a>

          <a href="#faq" onClick={handleLinkClick}>
            FAQ
          </a>

          <button
            className="btn-primary"
            onClick={() => {
              openPlayStore();
              setOpen(false);
            }}
          >
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
