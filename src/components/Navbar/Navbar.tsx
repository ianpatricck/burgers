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
        <nav className="items_small">
          <div className="wrapper">
            <h1 className="title">{currentTab}</h1>
            <Menu
              className="icon"
              onClick={() => setToggleMenuSmall(!toggleMenuSmall)}
            />
          </div>
        </nav>

        {toggleMenuSmall ? (
          <motion.div
            className="menu_small"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "item--active" : "item")}
              onClick={() => setCurrentTab("Menu")}
            >
              MENU
            </NavLink>

            <NavLink
              to="/enter"
              className={({ isActive }) => (isActive ? "item--active" : "item")}
              onClick={() => setCurrentTab("Entrar")}
            >
              ENTRAR
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "item--active" : "item")}
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
          className={({ isActive }) => (isActive ? "item--active" : "item")}
        >
          MENU
        </NavLink>

        <NavLink
          to="/enter"
          className={({ isActive }) => (isActive ? "item--active" : "item")}
        >
          ENTRAR
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "item--active" : "item")}
        >
          CONTATO
        </NavLink>
      </nav>
    </header>
  );
}
