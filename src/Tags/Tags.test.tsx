import React from "react";
import { render } from "@testing-library/react";
import Tags from "./Tags";

it("renders empty with empty tags", () => {
  const { container } = render(<Tags tags={[]} />);
  expect(container.innerHTML).toBe("");
});

it("renders schema tags", () => {
  const tags = [
    {
      name: "salad",
    },
    {
      name: "mytag",
    },
  ];
  const { container } = render(<Tags tags={tags} />);
  expect(container.innerHTML.includes("salad")).toBe(true);
  expect(container.innerHTML.includes("mytag")).toBe(true);
});
