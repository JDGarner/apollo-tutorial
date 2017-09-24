import React from "react";
import App from "./app";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let component;

beforeEach(() => {
  component = shallow(<App />);
});

test("<App /> renders correctly", () => {
  expect(toJson(component)).toMatchSnapshot();
});
