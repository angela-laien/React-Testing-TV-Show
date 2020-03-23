import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
    render(<App />);
  });

test("title on the page", () => {
    const {queryByText} = render(<App />);
    const title = queryByText("Stanger Things");
});

test("displays the button", () => {
    const {queryByText} = render(<App />);
    const button = queryByText("Select a season");
});