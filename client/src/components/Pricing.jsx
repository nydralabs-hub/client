import { useEffect, useState } from "react";
import "../styles/pricing.css";
import { openPlayStore } from "../utils/appLinks";
const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "30 dias",
    color: "pink",
    features: [
      { label: "Relatórios simples", ok: true },
      { label: "Cadastro limitado", ok: true },
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
    highlight: false,
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
    highlight: true,
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
  // const [timeLeft, setTimeLeft] = useState({
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   const end = new Date();
  //   end.setHours(end.getHours() + 12);

  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const diff = end - now;

  //     const hours = Math.floor(diff / (1000 * 60 * 60));
  //     const minutes = Math.floor((diff / (1000 * 60)) % 60);
  //     const seconds = Math.floor((diff / 1000) % 60);

  //     setTimeLeft({ hours, minutes, seconds });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const endDate = new Date("2026-03-30T23:59:59");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pricing-section">
      <span className="pricing-tag">Oferta por tempo limitado</span>

      <h2 className="pricing-title">Desbloqueie todo o poder do APPRIX</h2>

      <p className="pricing-sub">
        Aproveite os descontos especiais disponíveis apenas hoje.
      </p>
      <div className="pricing-countdown">
        <div>
          <strong>{timeLeft.days}</strong>
          <span>Dias</span>
        </div>

        <div>
          <strong>{timeLeft.hours}</strong>
          <span>Horas</span>
        </div>

        <div>
          <strong>{timeLeft.minutes}</strong>
          <span>Min</span>
        </div>

        <div>
          <strong>{timeLeft.seconds}</strong>
          <span>Seg</span>
        </div>
      </div>

      <div className="pricing-wrapper">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pricing-card ${plan.color} ${
              plan.highlight ? "highlight" : ""
            }`}
          >
            {plan.highlight && <div className="plan-badge">Mais Popular</div>}

            <div className="plan-header">
              <span className="plan-name">{plan.name}</span>

              {plan.oldPrice ? (
                <div className="plan-price-wrapper">
                  <span className="plan-old">
                    <s>{plan.oldPrice}</s>
                  </span>

                  <h3 className="plan-price">{plan.price}</h3>
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

            <button className="plan-button" onClick={openPlayStore}>
              Começar agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
