import style from "./Dropdown.module.css";
import { useState } from "react";
import Chevron from "../../assets/images/Vector.svg";

function DropDown(props) {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
    // setToggle((prev) => !prev);
  };

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

      <div
        style={
          toggle
            ? { height: "auto", transition: "1s" }
            : { height: "0", opacity: 0 }
        }
      >
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default DropDown;
