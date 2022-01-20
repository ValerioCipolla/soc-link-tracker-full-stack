/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Accordion from "./";

const testProps = { weekNumber: 1 };

const handleClick = jest.fn();

test("Accordion component is on the document", () => {
  const { getByTestId } = render(<Accordion {...testProps} />);
  const actual = getByTestId("accordion-test");
  expect(actual).toBeInTheDocument();
});

test("Accordion component should have the text passed in the props", () => {
  const { getByTestId } = render(<Accordion {...testProps} />);
  const actual = getByTestId("accordion-text-test");
  expect(actual).toHaveTextContent("Week 1");
});
