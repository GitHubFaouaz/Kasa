import style from "./Host.module.css";
import React from "react";

const Host = (props) => {
  return (
    <div className={style.host_container}>
      <div className={style.host_name}>{props.hostName}</div>
      <div className={style.hostImage_container}>
        <img
          className={style.hostImage}
          src={props.hostImage}
          alt={props.hostName}
        />
      </div>
    </div>
  );
};

export default Host;
