import "../styles/hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Pare de perder dinheiro com preços errados</h1>

          <p>
            Descubra o preço ideal dos seus produtos em segundos e aumente seu
            lucro sem complicação.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Baixar App</button>

            <button className="btn-outline">Ver como funciona</button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img className="hero-image" src="/mockup.png" alt="App Preciko" />
        </div>
      </div>
    </section>
  );
}
