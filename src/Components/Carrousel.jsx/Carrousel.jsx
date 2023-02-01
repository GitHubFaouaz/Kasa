import style from "./Carrousel.module.css";
import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

import React from "react";

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const lengthPictures = pictures.length;

  const nextImage = () => {
    setCurrent((current + 1) % lengthPictures);
  };
  const prevImage = () => {
    setCurrent((current - 1) % lengthPictures);
  };

  // console.log(pictures);
  return (
    <div className={style.containe_carrousel}>
      <div className={style.containe_arrow}>
        <img
          src={left}
          alt="left"
          onClick={prevImage}
          className={style.leftArrow}
        />
        <img
          src={right}
          alt="right"
          onClick={nextImage}
          className={style.rightArrow}
        />
      </div>
      {pictures.map((images, index) => (
        <div
          className={current === index ? style.active : style.displayNon}
          key={index}
        >
          {/* console.log({current}); console.log({index}); */}
          {current === index && (
            <img src={images} alt="images" className={style.img} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
