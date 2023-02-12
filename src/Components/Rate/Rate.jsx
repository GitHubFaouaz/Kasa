import style from "./Rate.module.css";
import React from "react";
import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";
const Rate = ({ score }) => {
  return (
    <div>
      {Array.from(Array(5), (_, i) => {
        const level = i + 1;
        const star = score >= level ? fullStar : emptyStar;
        return <img key={level} className={style.star} src={star} alt="star" />;
      })}
    </div>
  );
};

export default Rate;
