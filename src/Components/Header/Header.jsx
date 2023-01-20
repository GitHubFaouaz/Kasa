import style from "./Header.module.css";
import logo from "../../assets/images/LOGO.svg";
import Nav from "../Nav/Nav";
function Header() {
  return (
    <header className={style.header}>
      <img className="logo" src={logo} alt="logo de l'agence kasa" />

      <Nav className={style.nav_header} />
    </header>
  );
}

export default Header;
