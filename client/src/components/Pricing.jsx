import "../styles/pricing.css";

const plans = [
  {
    name: "Starter",
    price: "Free",
    color: "pink",
    features: [
      { label: "Lorem ipsum dolor sit amet", ok: true },
      { label: "Ut wisi enim ad minim veniam", ok: true },
      { label: "Duis autem vel eum", ok: false },
      { label: "Sed diam nonummy nibh", ok: false },
      { label: "Vel illum dolore eu feugiat", ok: false },
    ],
  },

  {
    name: "Business",
    price: "$9.99",
    color: "orange",
    features: [
      { label: "Lorem ipsum dolor sit amet", ok: true },
      { label: "Ut wisi enim ad minim veniam", ok: true },
      { label: "Duis autem vel eum", ok: true },
      { label: "Sed diam nonummy nibh", ok: false },
      { label: "Vel illum dolore eu feugiat", ok: false },
    ],
  },

  {
    name: "Professional",
    price: "$19.99",
    color: "blue",
    features: [
      { label: "Lorem ipsum dolor sit amet", ok: true },
      { label: "Ut wisi enim ad minim veniam", ok: true },
      { label: "Duis autem vel eum", ok: true },
      { label: "Sed diam nonummy nibh", ok: true },
      { label: "Vel illum dolore eu feugiat", ok: false },
    ],
  },

  {
    name: "Premium",
    price: "$49.99",
    color: "purple",
    features: [
      { label: "Lorem ipsum dolor sit amet", ok: true },
      { label: "Ut wisi enim ad minim veniam", ok: true },
      { label: "Duis autem vel eum", ok: true },
      { label: "Sed diam nonummy nibh", ok: true },
      { label: "Vel illum dolore eu feugiat", ok: true },
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

              <h3 className="plan-price">{plan.price}</h3>

              <span className="plan-period">per month</span>
            </div>

            <ul className="plan-features">
              {plan.features.map((f, index) => (
                <li key={index} className={f.ok ? "ok" : "no"}>
                  {f.ok ? "✔" : "✖"} {f.label}
                </li>
              ))}
            </ul>

            <button className="plan-button">Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
}
