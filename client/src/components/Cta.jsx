import "../styles/cta.css";
import { openPlayStore } from "../utils/appLinks";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Comece hoje a precificar
          <br />
          como um profissional
        </h2>

        <p className="cta-text">
          Pare de perder dinheiro com preços errados. Descubra seu lucro real em
          segundos com o APPRIX.
        </p>

        <button className="cta-button" onClick={openPlayStore}>
          Baixar o App
        </button>
      </div>
    </section>
  );
}
