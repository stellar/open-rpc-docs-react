import React from "react";
import { render } from '@testing-library/react';
import Params from "./Params";

it("renders without crashing", () => {
  render(<Params />);
});

it("renders empty with no schema", () => {
  const { container } = render(<Params />);
  expect(container.innerHTML).toBe("");
});

it("renders empty with empty params", () => {
  const { container } = render(<Params params={[]}/>);
  expect(container.innerHTML).toBe("");
});

it("renders params", () => {
  const params = [
    {
      description: "tags to filter by",
      name: "tags",
      schema: {
        type: "string",
      },
    },
  ];
  const { container } = render(<Params params={params} disableTransitionProps={true} />);
  expect(container.innerHTML.includes("tags")).toBe(true);
  expect(container.innerHTML.includes("tags to filter by")).toBe(true);
  // The following fails, something to do with <ScrollCheck /> in the
  // @stoplight/json-schema-viewer package. I don't know how to fix that.
  expect(container.innerHTML.includes("string")).toBe(true);
});
