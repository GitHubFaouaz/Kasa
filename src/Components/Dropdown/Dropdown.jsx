import style from "./Dropdown.module.css";
import { useCallback, useState } from "react";
import Chevron from "../../assets/images/Vector.svg";

function DropDown(props) {
  // function DropDown({ aboutArray }, horsMaps) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  /*   // useCallback est un hook React qui permet de mémoriser une fonction pour éviter de la récréer à chaque rendu
  const toggleState = useCallback((id) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [id]: !prevToggle[id],
    }));
  }, []); //Le deuxième argument, [], indique à React que la fonction ne dépend d'aucun composant, ce qui signifie qu'elle ne sera pas ré-exécutée à chaque rendu.
 */

  return (
    <div className={style.dropdown}>
      <div className={style.dropdown_containeTitleChevron}>
        <h2 className={style.dropdown__title}>{props.title}</h2>
        <img
          className={toggle ? style.chevronFalse : style.chevronTrue}
          src={Chevron}
          alt="chevron"
          onClick={toggleState}
        />
      </div>

      <div className={toggle ? style.heightAuto : style.heightNull}>
        <p>{props.text}</p>
      </div>
    </div>
  );

  /*  return (
    <div>
      {aboutArray.map((data, id) => (
        <div className={style.container_dropdown}>
          <div className={style.dropdown}>
            <div className={style.dropdown_containeTitleChevron}>
              <h2 className={style.dropdown__title} key={id}>
                {data.title}
              </h2>
              <img
                className={toggle[id] ? style.chevronFalse : style.chevronTrue}
                src={Chevron}
                alt="chevron"
                onClick={() => toggleState(id)}
              />
            </div>
            <div className={toggle[id] ? style.heightAuto : style.heightNull}>
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );*/
}

export default DropDown;
