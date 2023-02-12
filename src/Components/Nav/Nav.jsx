import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className={style.nav_header}>
      <ul className={style.nav_ul}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.active_link : style.link
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Apropos"
            className={({ isActive }) =>
              isActive ? style.active_link : style.link
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
