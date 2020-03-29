import React, { Suspense } from "react";
import "./header.scss";
import { location } from "../Env";

const menu = [
  {
    id: "home",
    label: "Home",
    className: "header-menu",
    activeClassName: "",
    link: `${location}/`,
    parent: true
  },
  {
    id: "genre",
    label: "Genre",
    className: "header-menu",
    activeClassName: "header-menu-active",
    link: `${location}/genre`,
    parent: false,
    popup: true
  },
  {
    id: "country",
    label: "Country",
    className: "header-menu",
    activeClassName: "header-menu-active",
    link: `${location}/country`,
    parent: false,
    popup: true
  },
  {
    id: "movies",
    label: "Movies",
    className: "header-menu",
    activeClassName: "header-menu-active",
    link: `${location}/movie`,
    parent: false
  },
  {
    id: "tvseries",
    label: "TV Series",
    className: "header-menu",
    activeClassName: "header-menu-active",
    link: `${location}/tvserie`,
    parent: false
  }
];

export const LinkComponent = React.lazy(() =>
  import("../Modules/Component/link-menu")
);

export const PopupMenu = React.lazy(() =>
  import("../Modules/Component/popup-menu")
);

export const CountryMenu = React.lazy(() =>
  import("../Modules/Countries/countries-menu")
);

export const GenreMenu = React.lazy(() =>
  import("../Modules/Genres/genres-menu")
);

// Render the header link menu
function getPopupMenu(id) {
  if (id === "country") return <CountryMenu />;
  if (id === "genre") return <GenreMenu />;
  return null;
}

function HeaderMenu() {
  return (
    <Suspense fallback={<div></div>}>
      <nav className="header-menu-container">
        {menu.map(item => (
          <LinkComponent
            className={item.className}
            activeClassName={item.activeClassName}
            link={item.link}
            label={item.label}
            key={item.id}
            showPopup={
              item.popup && <PopupMenu>{getPopupMenu(item.id)}</PopupMenu>
            }
          />
        ))}
      </nav>
    </Suspense>
  );
}

export default HeaderMenu;
