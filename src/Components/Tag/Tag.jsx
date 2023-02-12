import style from "./Tag.module.css";

import React from "react";

const Tag = (props) => {
  return <span className={style.tag}>{props.tag}</span>;
};

export default Tag;
