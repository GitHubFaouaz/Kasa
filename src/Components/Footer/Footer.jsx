import style from "./Footer.module.css";
import logo from "../../assets/images/logo-footer.svg";

function Footer() {
  return (
    <footer className={style.foot_container}>
      <img src={logo} alt="logo de kasa" className={style.foot_img} />
      <p className={style.foot_container_text}>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
