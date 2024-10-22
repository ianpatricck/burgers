import { NavLink } from "react-router-dom";
import "./Navbar.style.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar_items">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar_items__item--active" : "navbar_items__item"
          }
        >
          MENU
        </NavLink>

        <NavLink
          to="/enter"
          className={({ isActive }) =>
            isActive ? "navbar_items__item--active" : "navbar_items__item"
          }
        >
          ENTRAR
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "navbar_items__item--active" : "navbar_items__item"
          }
        >
          CONTATO
        </NavLink>
      </nav>
    </header>
  );
}
