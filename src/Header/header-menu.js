import React from "react";
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  return (
    <nav>
      <NavLink exact activeClassName="header-menu-active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="header-menu-active" to="/">
        Genre
      </NavLink>
      <NavLink exact activeClassName="header-menu-active" to="/">
        Country
      </NavLink>
    </nav>
  );
}

export default HeaderMenu;
