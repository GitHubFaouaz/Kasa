import style from "./Carrousel.module.css";
// import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

import React from "react";

const Carrousel = ({ pictures }) => {
  // const [current, setCurrent] = useState(0);
  // const lengthPictures = pictures.length;

  console.log(pictures);
  return (
    <div className={style.containe_carrousel}>
      <div className={style.containe_arrow}>
        <img
          src={left} //Affichage des flèches seulement si length > 1
          alt="gauche"
          className="leftArrow"
        />
        <img src={right} alt="droite" className="rightArrow" />
      </div>
      {pictures.map((images, index) => (
        <div className={style.containe_images} key={index}>
          <img src={images} alt="images" className={style.img} />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
