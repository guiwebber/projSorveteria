import React from "react";
import Header from "../../components/header/Header";
import "./sobre.css";
import imagem1 from "../../assets/images/sobre-image.jpg";
import imagem2 from "../../assets/images/sorveteria.jpg";
import Footer from '../../components/footer/Footer';
function Sobre() {
  return (
    <div>
      <Header />
      <div className="bannerSobre">
        <h1 className="h1Banner">A Gelateria</h1>
      </div>
      <div className="textSobre maxWidth">
        <h2>Sobre Nós</h2>
        <h4>Nós simplesmente amamos sorvete!</h4>
        <p>
          Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
          sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e
          gostamos de receber elogios. Estamos operando desde 2009 com as
          melhores matérias-primas para a produção final do sorvete. Vendemos
          tanto para varejo como para atacado.
        </p>
        <p>
          Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
          loja ou levar para sua residência e aproveitar junto com a família.
          Também vendemos para estabelecimentos e criamos eventos como festa de
          aniversário, formaturas e eventos empresariais. Para contratar os
          nossos serviços, basta entrar em contato conosco. Iremos proporcionar
          o melhor atendimento e os melhores produtos para você fazer a sua
          festa mais saborosa, com o melhor sorvete da cidade.
        </p>
      </div>
      <div className="divImgs">
        <div className="divImagemSobre">
          <img src={imagem1} alt="" />
        </div>
        <div className="divImagemSobre">
          <img src={imagem2} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Sobre;
