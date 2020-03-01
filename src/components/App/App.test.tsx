import React from "react";
import { shallow } from "enzyme";
import { App } from "components/App/App";

describe("App", () => {
  const component = shallow(<App />);

  it("should render Theme wrapper", () => {
    expect(component.find("Theme").length).toBe(1);
  });
});
