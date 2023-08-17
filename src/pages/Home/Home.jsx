import React from "react";
import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import MainHome from "../../components/mainHome/MainHome";
import Footer from "../../components/footer/Footer";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MainHome />
      <Footer />
    </div>
  );
}

export default Home;
