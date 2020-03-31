import React from "react";
import { shallow } from "enzyme";
import { mountWithProvider } from "./Helper";
import { GenreItem } from "../Modules/Genres/genres-memo-genre-item";
import GenreMenu from "../Modules/Genres/genres-menu";

// Test case render title and text from props child component
describe("GenreMmenu Component", () => {
  it("render child component", () => {
    const data = {
      movie: [{ id: 1, name: "Actions" }],
      tv: [{ id: 1, name: "Rommance" }]
    };
    const props = { label: data.movie[0].name, onClick: jest.fn() };
    const connectComponent = mountWithProvider(
      <GenreMenu movie={data.movie} tv={data.tv} />
    )();
    expect(connectComponent.exists()).toBe(true);
    expect(
      connectComponent
        .find(GenreMenu)
        .render()
        .find(".genre-title").length
    ).toEqual(2);
    const childComponent = shallow(<GenreItem {...props} />);
    expect(childComponent.text()).toEqual("Actions");
  });
});
