import React, { useEffect } from "react";

function PopupMenu() {
  useEffect(() => {
    setTimeout(() => {
      console.log("run useEffects");
    }, 1000);
  });
  return (
    <div>
      <p>Popup Menu</p>
    </div>
  );
}

export default PopupMenu;
