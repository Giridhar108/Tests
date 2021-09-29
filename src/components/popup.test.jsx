import React from "react";
import { render, screen } from "@testing-library/react";
import Popup from "./popup";

describe("popup", () => {
  const setIsOpen = jest.fn();
  it("popup to be close", () => {
    const isOpen = false;
    const numbers = [];
    render(<Popup numbers={numbers} isOpen={isOpen} setIsOpen={setIsOpen} />);
    const [popup] = screen.getAllByTestId("popup");
    expect(popup).toHaveClass("hidden");
  });

  it("popup to be open", () => {
    const isOpen = true;
    const numbers = [];
    render(<Popup numbers={numbers} isOpen={isOpen} setIsOpen={setIsOpen} />);
    const [popup] = screen.getAllByTestId("popup");
    expect(popup).not.toHaveClass("hidden");
  });

  it("popup show numbers", () => {
    const isOpen = true;
    const numbers = [3, 4];
    render(<Popup numbers={numbers} isOpen={isOpen} setIsOpen={setIsOpen} />);
    const [popup] = screen.getAllByTestId("popup");
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText(", 4")).toBeInTheDocument();
  });

});
