import React from "react";
import { shallow } from "enzyme";
import { mountWithProvider } from "./Helper";
import CountryMenu, { CountryItem } from "../Modules/Countries/countries-menu";

// Test case render title and text from props child component
describe("Countries Module", () => {
  it("render CountryMenu", () => {
    const state = {
      menuHeader: [
        { code: "US", name: "United State" },
        { code: "DE", name: "Germany" }
      ]
    };
    const props = { label: state.menuHeader[0].name, onClick: jest.fn() };
    const wrapper = mountWithProvider(<CountryMenu {...state} />)();
    console.log("debug", wrapper.debug({ verbose: true }));
    expect(wrapper.exists()).toBe(true);
    const childComponent = shallow(<CountryItem {...props} />);
    expect(childComponent.text()).toEqual("United State");
  });
});
