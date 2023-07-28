import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input value="xyz" placeholder="Doris" name="Doris" />);
  const checkAttribute = screen.getByTestId("abc");
  expect(checkAttribute).toHaveAttribute("name", "Doris");
});

test("calls callback on every user input", async () => {
    
});
