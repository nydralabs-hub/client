import { useState } from "react";

const questions = [
  {
    q: "Preciso entender de finanças?",
    a: "Não. O Preciko faz todos os cálculos automaticamente.",
  },

  {
    q: "Funciona para qualquer negócio?",
    a: "Sim. Produtos físicos ou serviços.",
  },

  {
    q: "Posso testar antes?",
    a: "Sim. Existe plano gratuito.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Perguntas frequentes</h2>

        {questions.map((item, i) => (
          <div
            key={i}
            className="faq-item"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">{item.q}</div>

            {open === i && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
