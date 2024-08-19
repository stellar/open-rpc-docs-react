import React from "react";
import { render } from "@testing-library/react";
import MarkdownDescription from "./MarkdownDescription";

it("renders without crashing", () => {
  render(<MarkdownDescription uiSchema={{}} />);
});

it("renders a description", () => {
  const { container } = render(<MarkdownDescription uiSchema={{}} source={"foo"}/>);
  expect(container.innerHTML).toContain("foo");
});

it("renders a description with syntax highlighting", () => {
  const { container } = render(<MarkdownDescription uiSchema={{}} source={"```javascript\n\nconst foo = 'bar';\n\n```"}/>);
  expect(container.innerHTML).toContain("language-javascript");
});

it("renders a description with darkmode syntax highlighting", () => {
  const { container } = render(<MarkdownDescription uiSchema={{appBar: {"ui:darkMode": true}}} source={"```javascript\n\nconst foo = 'bar';\n\n```"}/>);
  expect(container.innerHTML).toContain("language-javascript");
});

it("renders a description that errors", () => {
  render(<MarkdownDescription uiSchema={{}} source={"```"}/>);
});
