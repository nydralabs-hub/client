import "../styles/whyChoose.css";
import mockupCell from "../assets/cell-mockup-results.png";
import { openPlayStore, openYoutubeTutorial } from "../utils/appLinks";

export default function WhyChoose() {
  return (
    <section className="why">
      <div className="container why-grid">
        {/* LEFT CONTENT */}

        <div className="why-left">
          <span className="why-tag">Por que escolher APPRIX?</span>

          <h2>
            Mais eficácia
            <br />
            Para seu negócio
          </h2>

          <p>
            Descubra o preço ideal dos seus produtos, controle suas margens e
            maximize seus lucros com uma plataforma inteligente de precificação.
          </p>

          <ul className="why-list">
            <li>Cadastro ilimitado de produtos *</li>
            <li>Calculo de quantidade mínima de vendas</li>
            <li>Calculo de Prolabore e Saúde financeira</li>
            <li>Seu parceiro estratégico de negócios</li>
          </ul>

          <div className="why-actions">
            <button className="why-btn" onClick={openPlayStore}>
              Baixar APPRIX App
            </button>

            <div className="why-video" onClick={openYoutubeTutorial}>
              <div className="play">▶</div>
              <span>Video Tutorial</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="why-right">
          <div className="hex-shape">
            <img src={mockupCell} alt="App preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
