import style from "./Home.module.css";
import React from "react";
import Banner from "../../Components/Banner/Banner";
import background from "../../assets/images/background-banner.png";
import dataLogements from "../../datas/logements.json";
import Card from "../../Components/Cards/Card";
import { Helmet } from "react-helmet";

function Home() {
  document.title = "Accueil";
  return (
    <>
      <title>abdallah</title>
      <Banner text="Chez vous, partout et ailleurs" image={background} />
      <div className={style.cards_container}>
        {dataLogements.map((appart) => (
          <Card
            cover={appart.cover}
            title={appart.title}
            key={appart.id}
            id={appart.id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
