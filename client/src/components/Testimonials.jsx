import "../styles/testemonials.css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "João Silva",
    business: "Pizzaria",
    text: "Depois do APPRIX parei de vender no prejuízo.",
  },
  {
    name: "Maria Souza",
    business: "Confeitaria",
    text: "Agora sei exatamente quanto preciso cobrar.",
  },
  {
    name: "Carlos Mendes",
    business: "Loja de roupas",
    text: "O app mudou completamente minha precificação.",
  },
  {
    name: "Ana Costa",
    business: "Doceria",
    text: "Muito mais fácil que usar planilhas.",
  },
  {
    name: "Pedro Alves",
    business: "Hamburgueria",
    text: "Hoje sei meu lucro real em cada produto.",
  },
  {
    name: "Fernanda Lima",
    business: "Loja online",
    text: "Simples, rápido e extremamente útil.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const visibleItems = 3;
  const maxIndex = testimonials.length - visibleItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <span className="testimonials-tag">Depoimentos</span>

        <h2 className="testimonials-title">Quem usa o APPRIX recomenda</h2>

        <div className="carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (100 / visibleItems)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>

                <p className="testimonial-text">“{t.text}”</p>

                <div className="testimonial-user">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>

                  <div className="testimonial-info">
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
