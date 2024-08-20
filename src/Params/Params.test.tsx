import React from "react";
import { render } from '@testing-library/react';
import Params from "./Params";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

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
  const { container } = render(<Params params={params} />);
  expect(container.innerHTML.includes("tags")).toBe(true);
  expect(container.innerHTML.includes("tags to filter by")).toBe(true);
  expect(container.innerHTML.includes("string")).toBe(true);
});
