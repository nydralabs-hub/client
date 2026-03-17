import "../styles/businessGoals.css";
import mockupCell from "../assets/cell-with-app.png"; // depois você troca
import { openPlayStore } from "../utils/appLinks";
export default function BusinessGoals() {
  return (
    <section className="business">
      <div className="container business-grid">
        {/* LEFT IMAGE */}

        <div className="business-image">
          <img src={mockupCell} alt="App preview" />
        </div>

        {/* RIGHT CONTENT */}

        <div className="business-content">
          <span className="business-tag">Fique sempre atualizado</span>

          <h2>
            Mantenha o foco em <br />
            Seus objetivos de negócios
          </h2>

          <p>
            Descubra insights sobre seus preços, margens e custos em tempo real.
            Tenha total controle da sua precificação e tome decisões
            estratégicas para crescer seu negócio.
          </p>

          <div className="business-features">
            <div className="business-item">
              <div className="business-icon">📱</div>

              <div className="business-step">
                <h4>Processo de instalação fácil</h4>
                <span>Guia simples para começar rapidamente</span>
              </div>
            </div>

            <div className="business-item">
              <div className="business-icon">📄</div>

              <div className="business-step">
                <h4>Versão atualizada periodicamente</h4>
                <span>Novas melhorias e atualizações constantes</span>
              </div>
            </div>
          </div>

          <button className="business-btn" onClick={openPlayStore}>
            Saiba Mais →
          </button>
        </div>
      </div>
    </section>
  );
}
