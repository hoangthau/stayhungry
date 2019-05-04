import React from "react";
import { NavLink } from "react-router-dom";
import s from "./styles.module.css";

const Nav = () => (
  <ul className={s.nav}>
    <NavLink to="/desire" activeClassName={s.active}>
      Desire
    </NavLink>
    <NavLink to="/collage" activeClassName={s.active}>
      Collage
    </NavLink>
  </ul>
);

export default Nav;
