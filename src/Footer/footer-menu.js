import React from "react";
import MenuVariable from "./footer-menu-variable";
import "./footer.scss";

// Render footer menu with recrusive array
// the list of menu store in MenuVariable
function renderMenu(arr) {
  if (arr === undefined) return null;
  if (arr.length === 0) return null;
  return arr.map(item => {
    if (item.link) {
      return (
        <a key={item.id}>
          <button onClick={() => console.log(item.link)}>{item.label}</button>
        </a>
      );
    }
    return (
      <ul className={item.className} key={item.id}>
        <li>
          <span>{item.label}</span>
          {renderMenu(item.children)}
        </li>
      </ul>
    );
  });
}
function FooterMenu() {
  return <div className="footer-menu">{renderMenu(MenuVariable)}</div>;
}

export default FooterMenu;
