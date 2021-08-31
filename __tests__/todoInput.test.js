import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React, { useState as useStateMock } from "react";
import { Button } from "react-native";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import TodoInput from "../components/TodoInput";
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("test todo input", () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("todo state changes when entered", () => {
    const { getByPlaceholderText } = render(<TodoInput />);

    const input = getByPlaceholderText("Todo");

    fireEvent.changeText(input, ...(data = ["abc"]));

    expect(setState).toHaveBeenCalledTimes(1);

    expect(setState).toHaveBeenCalledWith("abc");

    expect(input).toHaveProp("value");
  });
});
