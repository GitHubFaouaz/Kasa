import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className={style.nav_header}>
      <NavLink to="/" className={style.nav_header_link}>
        Accueil
      </NavLink>
      <NavLink to="/Apropos" className={style.nav_header_link}>
        A Propos
      </NavLink>
    </nav>
  );
}
export default Nav;
