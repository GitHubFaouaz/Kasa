import React from "react";
import style from "./About.module.css";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import aboutArray from "../../data/aboutArray.json";
import Dropdown from "../../Components/Dropdown/Dropdown";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <div className={style.container_dropdown}>
        {aboutArray.map((data, id) => (
          <Dropdown key={id} title={data.title} text={data.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
