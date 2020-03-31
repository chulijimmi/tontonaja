import React from "react";
import MovieThumbnail from "../../Modules/Movies/movies-thumbnail";
import { shallow } from "enzyme";

describe("<MoviesThumnail", () => {
  it("Renders component with props", () => {
    const props = {
      onClick: jest.fn(),
      vote: 8,
      title: "Test thumbnail movie",
      backdrop: "images path"
    };

    const wrapper = shallow(<MovieThumbnail {...props} />);
    console.log("wrapper", wrapper.debug());
    expect(wrapper.find(".movie-thumbnail")).toHaveLength(1);
    expect(wrapper.find(".movie-thumbnail-vote")).toHaveLength(1);
    expect(wrapper.find(".movie-thumbnail-vote").text()).toEqual("8");
    expect(wrapper.find(".movie-thumbnail-title")).toHaveLength(1);
    expect(wrapper.find(".movie-thumbnail-title").text()).toEqual(props.title);
  });
});
