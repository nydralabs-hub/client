import "../styles/hero.css";
import mockup from "../assets/logo-4.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-image-wrapper-main">
            <img className="hero-image-main" src={mockup} alt="Apprix" />
            <div className="smart-price-wrapper">
              <a className="smart-price">Precificação inteligente</a>
            </div>
          </div>
          <h1>Pare de perder dinheiro com preços errados</h1>

          <p>
            Descubra o preço ideal dos seus produtos em segundos e aumente seu
            lucro sem complicação.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Baixar App</button>

            <a className="btn-outline" href="#how">
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img className="hero-image" src={mockup} alt="Apprix" sizes={40} />
          <div className="smart-price-wrapper">
            <a className="smart-price">Precificação inteligente</a>
          </div>
        </div>
      </div>
    </section>
  );
}
