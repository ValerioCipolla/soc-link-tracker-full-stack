/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Button from "./";

const testProps = { buttonText: "Home" };

test("the button component is on the document", () => {
  const { getByTestId } = render(<Button {...testProps} />);
  const actual = getByTestId("button-test");
  expect(actual).toBeInTheDocument();
});

test("the button component text should be the same as buttonText prop", () => {
  const { getByTestId } = render(<Button {...testProps} />);
  const actual = getByTestId("button-test");
  expect(actual).toHaveTextContent("Home");
});
