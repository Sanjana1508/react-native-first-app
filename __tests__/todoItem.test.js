import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Text } from "react-native";
import { toHaveStyle } from "@testing-library/jest-native";

Enzyme.configure({ adapter: new Adapter() });

import TodoItem from "../components/TodoItem";

afterEach(cleanup);

describe("todoItem tests", () => {
  expect.extend({ toHaveStyle });

  afterEach(() => {
    jest.clearAllMocks();
  });
  const onPress = jest.fn();

  it("press function test", async () => {
    const role = "button";
    const { findByAccessibilityRole } = render(<TodoItem onDelete={onPress} />);
    const touchableOpacity = await findByAccessibilityRole(role);

    fireEvent.press(touchableOpacity);

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should contain Text component", () => {
    const todo = "learn";
    const wrapper = shallow(<TodoItem todo={todo} onDelete={onPress} />);
    expect(wrapper.contains(<Text>{todo}</Text>)).toBeTruthy();
  });

  it("should have background color #ccc", () => {
    const value = { text: "listItem" };
    const { queryByAccessibilityValue } = render(
      <TodoItem onDelete={onPress} />
    );

    const listItem = queryByAccessibilityValue(value);

    expect(listItem.props.style.backgroundColor).toEqual("#ccc");
    expect(listItem).toHaveStyle({
      padding: 10,
      margin: 10,
      backgroundColor: "#ccc",
    });
  });
});
