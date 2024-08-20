import React from "react";
import { render } from "@testing-library/react";
import Errors from "./Errors";

it("renders with error", () => {
  const errors = [
    {
      code: 100,
      message: "lost it",
    },
  ];
  render(<Errors errors={errors}/>);
});

it("renders an error", async () => {
  const { container } = render(<Errors errors={[{
    code: 100,
    message: "foo bar error msg",
  }]} />);
  expect(container.innerHTML.includes("foo bar error msg")).toBe(true);
  expect(container.innerHTML.includes("100")).toBe(true);
});
