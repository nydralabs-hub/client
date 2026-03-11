export default function FAQ() {
  const faqs = [
    {
      q: "Preciso entender de finanças?",
      a: "Não. O app faz todos os cálculos para você.",
    },
    {
      q: "Funciona para qualquer negócio?",
      a: "Sim, produtos ou serviços.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Perguntas Frequentes
        </h2>

        {faqs.map((faq, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-bold">{faq.q}</h3>

            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
