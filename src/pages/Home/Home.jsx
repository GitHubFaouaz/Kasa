import style from "./Home.module.css";
import React from "react";
import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Cards/Card";

console.log(style);
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      // .get("http://localhost:3000/logements.json")
      .get("/logements.json")
      .then((res) => setData(res.data));
  }, []);

  // console.log(data);
  return (
    <>
      <Banner />
      <div className={style.cards_container}>
        {data.map((appart, id) => (
          <div className={style.card_logement} key={id}>
            <Link
              className={style.link_card_logement}
              to={`/logement/${appart.id}`}
            >
              <Card cover={appart.cover} title={appart.title} />
              {/* Card cover=  props{ function Card({ cover }) on lui attribut appart.cover  */}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
