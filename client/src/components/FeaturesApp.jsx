import { useRef } from "react";
import "../styles/sections.css";

const features = [
  {
    title: "Cálculo automático",
    desc: "Descubra o preço ideal baseado em custos e margem.",
    icon: "📊",
  },

  {
    title: "Simulação de lucro",
    desc: "Teste cenários antes de vender.",
    icon: "📈",
  },

  {
    title: "Controle de custos",
    desc: "Cadastre custos fixos e variáveis.",
    icon: "💰",
  },

  {
    title: "Relatórios",
    desc: "Entenda exatamente onde está seu lucro.",
    icon: "📑",
  },
];

export default function FeaturesApp() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    const cardWidth = container.firstChild.offsetWidth + 20;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Funcionalidades</h2>

        <div className="features-carousel">
          <button className="carousel-btn left" onClick={() => scroll("left")}>
            ‹
          </button>

          <div className="features-grid" ref={scrollRef}>
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>

                <h3>{f.title}</h3>

                <p>{f.desc}</p>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
