import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("rtl renders without crashing", () => {
  render(<App />);
});

test("display container is rendering", () => {
  const { getByTestId } = render(<App />);
  getByTestId("display-container");
});