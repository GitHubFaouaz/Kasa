import style from "./Carrousel.module.css";
import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

import React from "react";

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const lengthPictures = pictures.length;

  const nextImage = () => {
    setCurrent(current === lengthPictures - 1 ? 0 : current + 1);
  };
  const prevImage = () => {
    setCurrent(current === 0 ? lengthPictures - 1 : current - 1);
  };

  return (
    <div className={style.containe_carrousel}>
      {lengthPictures > 1 && (
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
      )}
      {pictures.map((images, index) => (
        <div
          className={current === index ? style.active : style.displayNon}
          key={index}
        >
          {current === index && (
            <img src={images} alt="images" className={style.img} />
          )}
        </div>
      ))}

      <div className={style.containe_number_bullet}>
        <span className={style.pictureNumber}>
          {current + 1}/{lengthPictures}
        </span>
        <ol className={style.containe_bullet}>
          {pictures.map((_, index) => (
            <li
              key={index}
              // className={style.bullet}
              className={index === current ? style.active_bullet : ""}
              onClick={() => setCurrent(index)}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Carrousel;
