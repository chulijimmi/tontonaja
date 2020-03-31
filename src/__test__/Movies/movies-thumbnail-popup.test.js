import React from "react";
import MovieThumbnailPopup from "../../Modules/Movies/movies-suggestion";
import { mountWithProvider } from "../Helper";

describe("<MoviesThumbnailPopUp", () => {
  it("render popup movie with props", () => {
    const props = {
      title: "Test title movie",
      genre_ids: [28, 35],
      overview: "Lorem ipsum dolor sir amet",
      onClick: jest.fn()
    };
    const connectComponent = mountWithProvider(
      <MovieThumbnailPopup movieData={props} />
    )();
    expect(connectComponent.exists()).toBe(true);
    expect(connectComponent.type("title")).toHaveLength(1);
  });
});
