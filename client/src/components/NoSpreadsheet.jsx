import "../styles/noSpreadsheet.css";
import sheetImage from "../assets/spreadsheet-lost.png"; // depois você troca

export default function NoSpreadsheet() {
  return (
    <section className="nosheet">
      <div className="container nosheet-grid">
        {/* IMAGE */}

        <div className="nosheet-image">
          <img src={sheetImage} alt="Planilha complexa" />
        </div>

        {/* CONTENT */}

        <div className="nosheet-content">
          <span className="nosheet-tag">Simplicidade acima de tudo</span>

          <h2>
            Cansado de planilhas
            <br />
            complicadas?
          </h2>

          <p>
            Muitas planilhas de precificação acabam criando ainda mais dúvidas
            do que respostas. Fórmulas escondidas, erros de cálculo e dados
            espalhados podem atrapalhar suas decisões.
          </p>

          <p>
            Com o <strong>APPRIX</strong>, tudo é simples, intuitivo e direto.
            Você entende seus custos, margens e preços em poucos segundos — sem
            precisar dominar Excel.
          </p>

          <ul className="nosheet-list">
            <li>Interface simples e intuitiva</li>
            <li>Cálculos automáticos de margem e lucro</li>
            <li>Sem fórmulas complexas</li>
            <li>Dados armazenados apenas no seu celular</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
