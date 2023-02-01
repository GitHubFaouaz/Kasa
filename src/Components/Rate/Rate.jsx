import style from "./Rate.module.css";
import React from "react";
import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";
const Rate = ({ score }) => {
  return (
    <div>
      {/* Array.from(Array(5), (_, i) => { est une boucle ,L'expression (_, i) est utilisée pour créer un index i pour chaque élément du tableau */}
      {Array.from(Array(5), (_, i) => {
        const level = i + 1;
        const star = score >= level ? fullStar : emptyStar;
        // 4 >= 1 =  fullStar
        // 4 >= 2 =  fullStar
        // 4 >= 3 =  fullStar
        // 4 >= 4 =  fullStar
        // 4 >= 5 =  emptyStar
        return <img key={level} className={style.star} src={star} alt="star" />;
      })}
    </div>
  );
};

// const stars = [1, 2, 3, 4, 5];

// return (
//   <div className="rate-comp">
//     {for (let level of stars) {
//       const star = score >= level ? fullStar : emptyStar;
//       return (
//         <img
//           key={)}
//           className="star"
//           src={star}
//           alt="rating star"
//         />
//       );
//     }}
//   </div>
// );
// }

export default Rate;
