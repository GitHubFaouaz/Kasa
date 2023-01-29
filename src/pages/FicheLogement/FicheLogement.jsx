import style from "./FicheLogement.module.css";
import dataLogements from "../../datas/logements.json";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Carrousel from "../../Components/Carrousel.jsx/Carrousel";
import Tag from "../../Components/Tag/Tag";
import Host from "../../Components/Host/Host";

const FicheLogement = () => {
  const params = useParams();
  const [infoSelectedAppart, setinfoSelectedAppart] = useState("");
  const pictures = infoSelectedAppart.pictures;
  const title = infoSelectedAppart.title;
  const location = infoSelectedAppart.location;
  const tags = infoSelectedAppart.tags;
  const hostName = infoSelectedAppart.host.name;
  const hostImage = infoSelectedAppart.host.picture;

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

  return (
    infoSelectedAppart && (
      <div className="fiche_logement">
        <Carrousel pictures={pictures} />
        <div className="infoLogement">
          <div className=".title_tags_host_container">
            <div className=".title_tags_container">
              <h1>{title}</h1>
              <h2>{location}</h2>
              <Tag tags={tags} />
            </div>

            <div className="host_Rate_container">
              <Host hostName={hostName} hostImage={hostImage} />
            </div>
          </div>
          <div className="desc_equipement_container"></div>
        </div>
      </div>
    )
  );
};

export default FicheLogement;
