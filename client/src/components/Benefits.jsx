const benefits = [
  "Descubra o preço ideal automaticamente",
  "Controle seus custos fixos e variáveis",
  "Evite vender no prejuízo",
  "Aumente sua margem de lucro",
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que usar o Preciko?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="p-6 shadow-lg rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
