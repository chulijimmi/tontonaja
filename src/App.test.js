import React from "react";
import { unmountComponentAtNode } from "react-dom";
import TestRenderer, { create, act } from "react-test-renderer";
import App, { ConnectedHome, ConnectedMovie } from "./App";

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
    const testRenderer = TestRenderer.create(<App />);
    const jsonApp = testRenderer.toJSON();
    expect(jsonApp.children).toHaveLength(1);
    expect(jsonApp.children[0]).toBe("Loading App...");
  });
  it("render child component", async () => {
    let root;
    act(() => {
      root = create(<App />);
    });
    await ConnectedHome;
    await ConnectedMovie;
    const children = root.toJSON().children;
    console.log("root");
    expect(children.length > 0).toBe(true);
  });
});
