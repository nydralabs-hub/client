import "../styles/faq.css";
import { useState } from "react";

const questions = [
  {
    q: "Preciso entender de finanças para usar?",
    a: "Não. O APPRIX faz todos os cálculos automaticamente. Você só informa seus custos e o aplicativo mostra o preço ideal para vender com lucro.",
  },
  {
    q: "Funciona para qualquer tipo de negócio?",
    a: "Sim. O APPRIX pode ser usado por quem vende produtos físicos ou serviços, como restaurantes, confeiteiros, lojas, freelancers e prestadores de serviço.",
  },
  {
    q: "O app calcula minha margem de lucro?",
    a: "Sim. O APPRIX calcula automaticamente sua margem de lucro, custo total e preço de venda ideal para garantir que você não venda no prejuízo.",
  },
  {
    q: "Consigo saber quantas vendas preciso fazer?",
    a: "Sim. O aplicativo calcula a quantidade mínima de vendas necessária para cobrir seus custos e atingir o lucro desejado.",
  },
  {
    q: "Preciso usar planilhas junto com o app?",
    a: "Não. O APPRIX substitui planilhas complexas e centraliza todas as informações de custo, preço e lucro em um único lugar.",
  },
  {
    q: "Existe plano gratuito?",
    a: "Sim. Você pode começar gratuitamente e já utilizar os principais recursos de precificação.",
  },
  {
    q: "Posso usar no celular?",
    a: "Sim. O APPRIX foi desenvolvido para funcionar diretamente no celular, facilitando o uso no dia a dia do seu negócio.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section">
      <div className="container">
        <span className="faq-tag">FAQ</span>

        <h2 className="faq-title">Perguntas frequentes</h2>

        <p className="faq-sub">Tire suas dúvidas sobre o APPRIX</p>

        <div className="faq-list">
          {questions.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                {item.q}
                <span className="faq-icon">{open === i ? "−" : "+"}</span>
              </div>

              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
