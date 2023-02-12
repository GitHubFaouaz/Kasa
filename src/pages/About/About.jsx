import React from "react";
import style from "./About.module.css";
import Banner from "../../Components/Banner/Banner";
import backgroundAbout from "../../assets/images/about-background.png";
import aboutArray from "../../datas/aboutArray.json";
import Dropdown from "../../Components/Dropdown/Dropdown";

const About = () => {
  document.title = "A Propos";
  return (
    <div>
      <Banner image={backgroundAbout} />
      <div className={style.container_dropdown}>
        {aboutArray.map((data, id) => (
          <Dropdown key={id} title={data.title} text={data.text} />
        ))}
      </div>
    </div>
  );
};

export default About;
