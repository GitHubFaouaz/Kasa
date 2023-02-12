import style from "./FicheLogement.module.css";
import dataLogements from "../../datas/logements.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../Components/Carrousel/Carrousel";
import Tag from "../../Components/Tag/Tag";
import Host from "../../Components/Host/Host";
import Rate from "../../Components/Rate/Rate";
import DropDown from "../../Components/Dropdown/Dropdown";
import ErrorPage from "../ErrorPage/ErrorPage";

const FicheLogement = () => {
  const params = useParams();
  const [item, setItem] = useState("");

  useEffect(() => {
    const ItemFound = dataLogements.find((data) => data.id === params.id);

    setItem(ItemFound);
  }, [params.id]);

  if (!item) {
    return <ErrorPage />;
  }

  const equipements =
    item &&
    item.equipments.map((liste, index) => (
      <li key={index} className={style.equipList}>
        {liste}
      </li>
    ));

  return (
    item &&
    ((document.title = `${item.title}`),
    (
      <div className={style.fiche_logement}>
        <Carrousel pictures={item.pictures} />
        <div className={style.infoLogement}>
          <div className={style.title_tags_host_container}>
            <div className={style.title_tags_container}>
              <h1>{item.title}</h1>
              <h2>{item.location}</h2>
              <div className={style.tag_Container}>
                {item.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
            </div>

            <div className={style.host_Rate_container}>
              <Host hostName={item.host.name} hostImage={item.host.picture} />
              <Rate score={item.rating} />
            </div>
          </div>
          <div className={style.desc_equipement_container}>
            <DropDown text={item.description} title="Description" />
            <DropDown text={equipements} title="Equipements" />
          </div>
        </div>
      </div>
    ))
  );
};

export default FicheLogement;
