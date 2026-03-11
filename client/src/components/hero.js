export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6">
            Precifique seus produtos com inteligência
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Descubra o preço ideal para aumentar seus lucros sem perder vendas.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-500 px-6 py-3 rounded-lg">
              Baixar App
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Ver como funciona
            </button>
          </div>
        </div>

        <img src="/mockup.png" className="w-80" />
      </div>
    </section>
  );
}
