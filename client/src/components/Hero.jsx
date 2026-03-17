import "../styles/hero.css";
import mockupCell from "../assets/cell-with-app.png";
import playStoreBtn from "../assets/play-store-btn.png";
import { openPlayStore } from "../utils/appLinks";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>
            Pare de perder dinheiro <br />
            com <span>preços errados</span>
          </h1>

          <p>
            Descubra o preço ideal dos seus produtos em segundos e aumente seu
            lucro com uma precificação inteligente.
          </p>

          <div className="hero-stores">
            <button className="store-btn"> App Store - EM BREVE </button>

            <img
              src={playStoreBtn}
              alt="Baixar na Google Play"
              className="store-badge"
              onClick={openPlayStore}
            />
          </div>

          <div className="hero-users">
            <div className="users">
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
              <div className="user"></div>
              <div className="user more">+10</div>
            </div>

            <span>500+ usuários já usam o app</span>
          </div>
        </div>

        <div className="hero-right">
          <img src={mockupCell} alt="App preview" />
        </div>
      </div>
    </section>
  );
}
