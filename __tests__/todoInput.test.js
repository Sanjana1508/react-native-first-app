import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Modal } from "react-native";

Enzyme.configure({ adapter: new Adapter() });

import TodoInput from "../components/TodoInput";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

afterEach(cleanup);

describe("test todo input", () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("todo state changes when entered", () => {
    const text = "abc";
    const { getByPlaceholderText } = render(<TodoInput />);

    const input = getByPlaceholderText("Todo");

    fireEvent.changeText(input, text);

    expect(setState).toHaveBeenCalledTimes(1);

    expect(setState).toHaveBeenCalledWith("abc");

    expect(input).toHaveProp("value");
  });

  it("shoud be a modal component", () => {
    const wrapper = shallow(<TodoInput />);

    expect(wrapper.type()).toEqual(Modal);
  });

  it("should contain TextInput component", () => {
    const wrapper = shallow(<TodoInput />);

    expect(wrapper.find("TextInput")).toBeTruthy();
  });

  it("should contain two Button component", () => {
    const wrapper = shallow(<TodoInput />);

    expect(wrapper.find("Button")).toHaveLength(2);
  });

  it("should have cancel button", () => {
    const { queryByText } = render(<TodoInput />);
    const btn = queryByText("CANCEL");
    expect(btn).not.toBeNull();
  });

  it("should have button with label as add", () => {
    const { findByHintText } = render(<TodoInput />);
    const addBtn = findByHintText("add");
    expect(addBtn).not.toBeNull();
  });
  it("should containButton components", () => {
    const wrapper = shallow(<TodoInput />);

    const btns = wrapper.find("Button");

    expect(btns.at(0).props().title).toBe("CANCEL");

    expect(btns.at(1).props().title).toBe("ADD");
  });
});
