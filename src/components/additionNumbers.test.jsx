import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AdditionNumbers from "./additionNumbers";

describe("additionNumbers", () => {
  const setNumber = jest.fn();
  const setIsOpen = jest.fn();

  it("additionNumbers work", () => {
    render(
      <AdditionNumbers handleSetState={setNumber} setIsOpen={setIsOpen} />
    );
    const inputOne = screen.getByTestId("inputOne");
    const inputTwo = screen.getByTestId("inputTwo");
    const btn = screen.getByRole("button");
    fireEvent.change(inputOne, {
      target: { value: "23" },
    });
    fireEvent.change(inputTwo, {
      target: { value: "3" },
    });
    fireEvent.click(btn);
    expect(inputOne.value).toBe("");
    expect(inputTwo.value).toBe("");
  });

  it("additionNumbers not work", () => {
    render(
      <AdditionNumbers handleSetState={setNumber} setIsOpen={setIsOpen} />
    );
    const inputOne = screen.getByTestId("inputOne");
    const inputTwo = screen.getByTestId("inputTwo");
    const btn = screen.getByRole("button");
    fireEvent.change(inputOne, {
      target: { value: "23" },
    });
    fireEvent.change(inputTwo, {
      target: { value: "a" },
    });
    fireEvent.click(btn);
    expect(inputOne.value).toBe("23");
    expect(inputTwo.value).toBe("a");
  });

  it("additionNumbers has error", () => {
    render(
      <AdditionNumbers handleSetState={setNumber} setIsOpen={setIsOpen} />
    );
    const inputOne = screen.getByTestId("inputOne");
    const inputTwo = screen.getByTestId("inputTwo");
    const btn = screen.getByRole("button");
    fireEvent.change(inputOne, {
      target: { value: "23" },
    });
    fireEvent.change(inputTwo, {
      target: { value: "a" },
    });
    fireEvent.click(btn);
    expect(screen.getByText(/вводите только цифры/i)).toBeInTheDocument();
  });
});
