import * as React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "../Store";
const reduxStore = configureStore();
/**
 * Mount the component
 */
export const mountWithProvider = children => (store = reduxStore) =>
  mount(<Provider store={store}>{children}</Provider>);
