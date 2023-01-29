import dataLogements from "../../datas/logements.json";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Carrousel from "../../Components/Carrousel.jsx/Carrousel";

const FicheLogement = () => {
  const params = useParams();
  const [infoSelectedAppart, setinfoSelectedAppart] = useState("");

  useEffect(() => {
    const dataCard = () => {
      // const data = Array.from(dataLogements).map((data) => ({
      //   ...data,
      // }));

      const data = dataLogements.map((data) => data);
      // const idSelectedAppart = data.find(
      //   (data) => data.id === params.id
      // );

      const idSelectedAppart = data.find(({ id }) => id === params.id);
      // console.log(idSelectedAppart);

      if (idSelectedAppart === undefined) {
        // console.log(" id undefined");
        // window.location = "/404";
        Navigate("/404");
      }
      setinfoSelectedAppart(idSelectedAppart);

      // const idSelectedAppart = data.forEach(({id}) => id === params.id);
      // data.find(({ id }) => {
      //   if (id === params.id) {
      //    infoSelectedAppart(data);
      //   }
      //   // return ;
      // });
      // data.forEach(({ id }) => {
      //   if (id === params.id) {
      //    infoSelectedAppart(data);
      //   }
      // });
      // data.some(({ id }) => {
      //   if (id === params.id) {
      //    infoSelectedAppart(data);
      //   }
      //   return true;
      // });
      console.log(infoSelectedAppart);
    };
    dataCard();
  }, [infoSelectedAppart, params.id]);

  const pictures = infoSelectedAppart.pictures;
  console.log(pictures);
  // const pictureLogement = pictures.map((picture) => <li>{picture}</li>);

  return (
    infoSelectedAppart && (
      <div className="fiche_logement">
        <Carrousel pictures={pictures} />
      </div>
    )
  );
};

export default FicheLogement;
