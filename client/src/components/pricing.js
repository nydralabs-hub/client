const plans = [
  {
    name: "Gratuito",
    price: "R$0",
    features: ["Até 5 produtos", "Cálculo básico"],
  },
  {
    name: "PRO",
    price: "R$29/mês",
    features: [
      "Produtos ilimitados",
      "Análise avançada",
      "Simulação de preços",
    ],
  },
  {
    name: "Empresarial",
    price: "R$99/mês",
    features: ["Multiusuário", "Relatórios", "Suporte prioritário"],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Planos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>

              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="mb-6">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <button className="bg-green-500 w-full py-3 rounded-lg">
                Começar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
