import style from "./Tag.module.css";

import React from "react";

const Tag = ({ tags }) => {
  return (
    <div className={style.tag_Container}>
      {tags.map((tag, index) => (
        <div className={style.tag} key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tag;
