import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { create } from "react-test-renderer";
import App, { ConnectedHome, ConnectedMovies } from "./App";

let container = null;

describe("App", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders Loading App", () => {
    const wrapper = create(<App />);
    const jsonApp = wrapper.toJSON();
    expect(jsonApp.children).toHaveLength(1);
    expect(jsonApp.children[0]).toBe("Loading App...");
  });
});
