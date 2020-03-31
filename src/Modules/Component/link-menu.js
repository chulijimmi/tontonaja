import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export function LinkWithPopUp(props) {
  return <span className={props.className}>{props.label}</span>;
}

export function LinkWithoutPopUp(props) {
  return (
    <NavLink
      className={props.className}
      activeClassName={props.activeClassName}
      to={props.link}
    >
      {props.label}
    </NavLink>
  );
}

// Module LinkComponent will render children props
// when it set to use popup menu
export default function LinkComponent(props) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <span className="link-container" onClick={() => setIsOpen(true)}>
      {props.showPopup ? (
        <LinkWithPopUp {...props} />
      ) : (
        <LinkWithoutPopUp {...props} />
      )}
      {isOpen ? (
        <div
          ref={ref}
          className={isOpen ? "popup-area popup-area-active" : "popup-area"}
        >
          {props.showPopup}
        </div>
      ) : null}
    </span>
  );
}

// Click outside area handling
export function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
