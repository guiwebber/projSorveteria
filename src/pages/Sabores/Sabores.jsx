import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import sabor1 from "../../assets/images/sabor-oreo.png";
import sabor2 from "../../assets/images/sabor-pistache.png";
import sabor3 from "../../assets/images/sabor-cookies-avela.png";
import sabor4 from "../../assets/images/sorbet-kiwi.png";
import sabor5 from "../../assets/images/sorbet-morango.png";
import sabor6 from "../../assets/images/sorbet-limao.png";
import "./sabores.css";
function Sabores() {
  return (
    <div>
      <Header />
      <div className="bannerSabores">
        <h1 className="h1Banner">NOSSOS SABORES</h1>
      </div>
      <div className="mainSabores">
        <h2>Sabores de sorvete</h2>
        <div className="sabores maxWidth">
          <div className="sabor">
            <div className="divImage">
              <img src={sabor1} alt="" />
            </div>
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className="sabor">
            <div className="divImage">
              <img src={sabor2} alt="" />
            </div>
            <h3>Sorvete de Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className="sabor">
            <div className="divImage">
              <img src={sabor3} alt="" />
            </div>
            <h3>Sorvete de Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className="sabor">
            <div className="divImage">
              <img src={sabor4} alt="" />
            </div>
            <h3>Sorvete de Kiwi</h3>
            <p>
              Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
            </p>
          </div>
          <div className="sabor">
            <div className="divImage">
              <img src={sabor5} alt="" />
            </div>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className="sabor">
            <div className="divImage">
              <img src={sabor6} alt="" />
            </div>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>
              O incrivel sorvete gourmet de limão siciliano vai te encantar.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sabores;
