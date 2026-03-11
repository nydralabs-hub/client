const features = [
  {
    title: "Cálculo automático",
    desc: "Descubra o preço ideal baseado em custos e margem.",
  },

  {
    title: "Simulação de lucro",
    desc: "Teste diferentes cenários antes de vender.",
  },

  {
    title: "Controle de custos",
    desc: "Cadastre despesas fixas e variáveis.",
  },

  {
    title: "Relatórios",
    desc: "Entenda seus números e tome decisões.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Funcionalidades</h2>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <h3>{f.title}</h3>

              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
