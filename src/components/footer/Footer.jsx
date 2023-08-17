import React from "react";
import "./footer.css";
import footerLogo from "../../assets/images/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="flex maxWidth">
        <div className="footerLogo">
          <img src={footerLogo} alt="" />
        </div>
        <div className="endereco def">
          <h3>ENDEREÇO</h3>
          <p>
            Av. Bernardino de campos, 98 <br></br> São Paulo, SP 12345-678
          </p>
        </div>
        <div className="endereco def">
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className="endereco def">
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>
      <div className="dev">
        <p>Gelateria. Orgulhosamente desenvolvido por Guilherme Webber</p>
      </div>
    </footer>
  );
}

export default Footer;
