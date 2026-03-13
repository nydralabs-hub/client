export default function HowItWorks() {
  const steps = [
    {
      title: "Cadastre seu produto",
      desc: "Informe nome, custo e despesas.",
    },

    {
      title: "Defina sua margem",
      desc: "Escolha quanto deseja lucrar.",
    },

    {
      title: "Veja o preço ideal",
      desc: "O APPRIX calcula automaticamente.",
    },
  ];

  return (
    <section className="how-section">
      <div className="container">
        <h2 className="section-title">Como funciona</h2>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <div className="step-number">{i + 1}</div>

              <h3>{s.title}</h3>

              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
