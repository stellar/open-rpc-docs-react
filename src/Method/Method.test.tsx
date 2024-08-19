import React from "react";
import { render } from "@testing-library/react";
import Method from "./Method";

it("renders without crashing", () => {
  render(<Method method={{name: "foo", params: []}} uiSchema={{}}/>);
});

it("renders empty with no schema", () => {
  const { container } = render(<Method />);
  expect(container.innerHTML).toBe("");
});

it("renders empty with empty method", () => {
  const { container } = render(<Method method={{} as any} />);
  expect(container.innerHTML).toBe("");
});

it("renders schema methods name", () => {
  const schema = {
    methods: [
      {
        name: "get_pet",
      },
    ],
  };
  const { container } = render(<Method method={schema.methods[0] as any} uiSchema={{}} />);
  expect(container.innerHTML.includes("get_pet")).toBe(true);
});
