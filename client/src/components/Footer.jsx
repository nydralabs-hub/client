import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="logo">APPRIX</h3>

            <p>
              A forma inteligente de calcular o preço ideal dos seus produtos e
              garantir lucro real.
            </p>

            <div className="socials">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Produto</h4>

            <a href="#features">Funcionalidades</a>
            <a href="#how">Como funciona</a>
            <a href="#pricing">Planos</a>
          </div>

          {/* <div className="footer-links">
            <h4>Empresa</h4>

            <a href="#">Sobre</a>
            <a href="#">Blog</a>
            <a href="#">Contato</a>
          </div> */}

          <div className="footer-links">
            <h4>Legal</h4>

            <a href="#">Termos</a>
            <a href="#">Privacidade</a>
            <a href="#">Cookies</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} APPRIX — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
