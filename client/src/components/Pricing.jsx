import "../styles/pricing.css";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "30 dias",
    color: "pink",
    features: [
      { label: "Relatórios simples", ok: true },
      { label: "Cadastrado limitado", ok: true },
      { label: "Suporte por e-mail", ok: false },
      { label: "Backup local", ok: false },
      { label: "Relatórios detalhados", ok: false },
      { label: "Suporte WhatsApp", ok: false },
      { label: "Acesso vitalício a updates", ok: false },
    ],
  },

  {
    name: "Básico",
    oldPrice: "$19.99",
    price: "$9.99",
    period: "por mês",
    color: "purple",
    features: [
      { label: "Relatórios simples", ok: true },
      { label: "Suporte por e-mail", ok: true },
      { label: "Backup local", ok: false },
      { label: "Relatórios detalhados", ok: false },
      { label: "Suporte WhatsApp", ok: false },
      { label: "Acesso vitalício a updates", ok: false },
    ],
  },

  {
    name: "Premium",
    oldPrice: "$79.99",
    price: "$49.99",
    period: "semestral",
    color: "orange",
    features: [
      { label: "Suporte por e-mail", ok: true },
      { label: "Backup local", ok: true },
      { label: "Relatórios detalhados", ok: true },
      { label: "Suporte WhatsApp", ok: false },
      { label: "Acesso vitalício a updates", ok: false },
    ],
  },

  {
    name: "Vitalício",
    oldPrice: "$149.99",
    price: "$89.99",
    period: "vitalício",
    color: "green",
    features: [
      { label: "Suporte por e-mail", ok: true },
      { label: "Backup local", ok: true },
      { label: "Relatórios detalhados", ok: true },
      { label: "Suporte WhatsApp", ok: true },
      { label: "Acesso vitalício a updates", ok: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Escolha seu plano</h2>

      <div className="pricing-wrapper">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.color}`}>
            <div className="plan-header">
              <span className="plan-name">{plan.name}</span>

              {plan.oldPrice ? (
                <div className="plan-price-wrapper">
                  <span className="plan-old">
                    De <s>{plan.oldPrice}</s>
                  </span>

                  <h3 className="plan-price">Por {plan.price}</h3>
                </div>
              ) : (
                <h3 className="plan-price">{plan.price}</h3>
              )}

              <span className="plan-period">{plan.period}</span>
            </div>

            <ul className="plan-features">
              {plan.features.map((f, index) => (
                <li key={index} className={f.ok ? "ok" : "no"}>
                  {f.ok ? "✔" : "✖"} {f.label}
                </li>
              ))}
            </ul>

            <div className="plan-button-wrapper">
              <button className="plan-button">Conhecer!</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
