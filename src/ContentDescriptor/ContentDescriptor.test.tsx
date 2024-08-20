import React from "react";
import { render } from "@testing-library/react";
import ContentDescriptor from "./ContentDescriptor";
import { ContentDescriptorObject } from "@open-rpc/meta-schema";

it("renders without crashing", () => {
  render(<ContentDescriptor />);
});

it("renders empty with no schema", () => {
  const { container } = render(<ContentDescriptor />);
  expect(container.innerHTML).toBe("");
});

it("renders empty with empty schema", () => {
  const emptyContentDescriptor = {} as ContentDescriptorObject;
  const { container } = render(<ContentDescriptor contentDescriptor={emptyContentDescriptor} />);
  expect(container.innerHTML).toBe("");
});
