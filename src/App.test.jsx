import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("integration test app", () => {
  it("work", () => {
    render(<App />);
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
    expect(screen.getByText("26")).toBeInTheDocument();
    expect(screen.queryByText("23")).not.toBeInTheDocument();
  });

  it("not work", () => {
    render(<App />);
    const inputOne = screen.getByTestId("inputOne");
    const inputTwo = screen.getByTestId("inputTwo");
    const btn = screen.getByRole("button");
    fireEvent.change(inputOne, {
      target: { value: "23" },
    });
    fireEvent.change(inputTwo, {
      target: { value: "v" },
    });
    fireEvent.click(btn);
    expect(inputOne.value).toBe("23");
    expect(inputTwo.value).toBe("v");
    expect(screen.getByText(/вводите только цифры/i)).toBeInTheDocument();
  });

  it("popup closed", async () => {
    render(<App />);
    const inputOne = screen.getByTestId("inputOne");
    const inputTwo = screen.getByTestId("inputTwo");
    const btn = screen.getByRole("button");
    fireEvent.change(inputOne, {
      target: { value: "23" },
    });
    fireEvent.change(inputTwo, {
      target: { value: "4" },
    });
    fireEvent.click(btn);
    expect(inputOne.value).toBe("");
    expect(inputTwo.value).toBe("");
    const [popup] = screen.getAllByTestId("popup");

    await waitFor(() => expect(popup).toHaveClass("hidden"), {
      timeout: 4000,
    });
    screen.debug();
  });
});
