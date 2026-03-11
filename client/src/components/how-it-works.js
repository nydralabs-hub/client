export default function HowItWorks() {
  const steps = [
    "Cadastre seu produto",
    "Informe custos e despesas",
    "Descubra o preço ideal",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Como funciona</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="p-8 bg-white rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">{i + 1}</h3>

              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
