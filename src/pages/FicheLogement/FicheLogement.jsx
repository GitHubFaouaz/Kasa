import style from "./FicheLogement.module.css";
import dataLogements from "../../datas/logements.json";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../Components/Carrousel.jsx/Carrousel";
import Tag from "../../Components/Tag/Tag";
import Host from "../../Components/Host/Host";
import Rate from "../../Components/Rate/Rate";
import DropDown from "../../Components/Dropdown/Dropdown";

const FicheLogement = () => {
  const params = useParams();
  const [dataSelectedAppart, setDataSelectedAppart] = useState("");
  const pictures = dataSelectedAppart.pictures;
  const title = dataSelectedAppart.title;
  const location = dataSelectedAppart.location;
  const tags = dataSelectedAppart.tags;
  // const hostName = infoSelectedAppart.host.name;
  // const hostImage = infoSelectedAppart.host.picture;
  const hostName = dataSelectedAppart.host;
  const hostImage = dataSelectedAppart.host;
  const ratings = dataSelectedAppart.rating;
  const desc = dataSelectedAppart.description;
  const equipements = dataSelectedAppart.equipments;
  const equipMaps =
    dataSelectedAppart &&
    equipements.map((liste, index) => (
      <li key={index} className="equipList">
        {liste}
      </li>
    ));

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
      setDataSelectedAppart(idSelectedAppart);

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

      console.log(dataSelectedAppart);
    };
    dataCard();
  }, [dataSelectedAppart, params.id]);

  return (
    dataSelectedAppart && (
      <div className={style.fiche_logement}>
        <Carrousel pictures={pictures} />
        <div className={style.infoLogement}>
          <div className={style.title_tags_host_container}>
            <div className={style.title_tags_container}>
              <h1>{title}</h1>
              <h2>{location}</h2>
              <Tag tags={tags} />
            </div>

            <div className={style.host_Rate_container}>
              <Host hostName={hostName.name} hostImage={hostImage.picture} />
              <Rate score={ratings} />
            </div>
          </div>
          <div className={style.desc_equipement_container}>
            <DropDown text={desc} title="Description" />
            <DropDown text={equipMaps} title="Equipements" />
          </div>
        </div>
      </div>
    )
  );
};

export default FicheLogement;
