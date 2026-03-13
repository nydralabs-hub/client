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
];

export default function Testimonials() {
  return (
    <section className="how-section">
      <div className="container">
        <h2 className="section-title">Quem usa recomenda</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>

              <div className="testimonial-user">
                <strong>{t.name}</strong>

                <span>{t.business}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
