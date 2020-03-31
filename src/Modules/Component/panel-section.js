import React from "react";
import "./panel-section.scss";

/**
 * Create panel section for movies component
 * This component will produce title on left side
 * and menu as chid menu on right side
 * @param {Array} menu
 * @param {String} title
 */
export default function PanelSection(props) {
  const { title, menu, onClick } = props;
  return (
    <div className="panel-section">
      <h1 className="panel-section-title">{title}</h1>
      {menu && (
        <div className="panel-section-menu">
          {menu.map(
            (item, index) =>
              index < 4 && (
                <span
                  key={index.toString()}
                  className="panel-button"
                  onClick={() => onClick(item)}
                >
                  {item.name}
                </span>
              )
          )}
        </div>
      )}
    </div>
  );
}
