import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from "react";
import { Button } from "react-native";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import App from "../App";

afterEach(cleanup);

describe("test Todo", () => {
  const mockFn = jest.fn();

  it("button test", () => {
    const { getByText } = render(<App />);
    const btn = getByText("Add New Todo");

    expect(btn).not.toBeNull();
  });

  it("No of buttons test", () => {
    const { getAllByText } = render(<App />);
    const btn = getAllByText("Add New Todo");

    expect(btn).toHaveLength(1);
  });

  it("test onpress", () => {
    const { getByText } = render(
      <Button title="Add New Todo" onPress={mockFn} />
    );

    fireEvent.press(getByText("Add New Todo"));

    expect(mockFn).toHaveBeenCalled();

    expect(mockFn.mock.calls.length).toBe(1);

    fireEvent.press(getByText("Add New Todo"));

    expect(mockFn.mock.calls.length).toBe(2);
  });

  it("test with testId", () => {
    const testId = "addTodo";

    const { getByTestId } = render(<App />);

    const btn = getByTestId(testId);

    expect(btn).toBeTruthy();
  });

  it("test with accessibility label", () => {
    const accessibilityLabel = "pressToAdd";

    const { getByA11yLabel } = render(<App />);

    const btn = getByA11yLabel(accessibilityLabel);

    expect(btn).toBeTruthy();
  });
  it("test button title", () => {
    const title = "Add New Todo";

    const { getByText } = render(<App />);

    const btn = getByText(title);

    expect(btn.props.children).toEqual(title);
  });

  it("test with snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toBeTruthy();
  });

  it("should render button title Add New Todo", () => {
    const tree = shallow(<App />);
    expect(tree.find("Button")).toHaveLength(1);
  });
});
