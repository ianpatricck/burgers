import { NavLink } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [currentTab, setCurrentTab] = useState("Menu");
  const [toggleMenuSmall, setToggleMenuSmall] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar_small">
        <nav className="navbar_items_small">
          <div className="navbar_items_small_wrapper">
            <h1 className="navbar_small__title">{currentTab}</h1>
            <Menu
              className="navbar_small__menu-icon"
              onClick={() => setToggleMenuSmall(!toggleMenuSmall)}
            />
          </div>
        </nav>

        {toggleMenuSmall ? (
          <motion.div
            className="menu-small"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu-small__item--active" : "menu-small__item"
              }
              onClick={() => setCurrentTab("Menu")}
            >
              MENU
            </NavLink>

            <NavLink
              to="/enter"
              className={({ isActive }) =>
                isActive ? "menu-small__item--active" : "menu-small__item"
              }
              onClick={() => setCurrentTab("Entrar")}
            >
              ENTRAR
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "menu-small__item--active" : "menu-small__item"
              }
              onClick={() => setCurrentTab("Contato")}
            >
              CONTATO
            </NavLink>
          </motion.div>
        ) : null}
      </div>

      <nav className="items">
        <NavLink
          to="/"
          data-testid="link"
          className={({ isActive }) => (isActive ? "item--active" : "item")}
        >
          MENU
        </NavLink>

        <NavLink
          to="/enter"
          data-testid="link"
          className={({ isActive }) => (isActive ? "item--active" : "item")}
        >
          ENTRAR
        </NavLink>

        <NavLink
          to="/contact"
          data-testid="link"
          className={({ isActive }) => (isActive ? "item--active" : "item")}
        >
          CONTATO
        </NavLink>
      </nav>
    </header>
  );
}
