import React from "react";
import { render } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import Servers from "./Servers";

it("renders without crashing", () => {
  render(<Servers />);
});

it("renders empty with no servers", () => {
  const { container } = render(<Servers />);
  expect(container.innerHTML).toBe("");
});

it("renders empty with empty servers", () => {
  const { container } = render(<Servers servers={[]} />);
  expect(container.innerHTML).toBe("");
});

it("renders empty with empty schema servers", () => {
  const { container } = render(<Servers servers={[]} />);
  expect(container.innerHTML).toBe("");
});

it("renders schema servers", () => {
  const servers = [
    {
      description: "foobar",
      name: "Pet Store",
      url: "http://petstore.openrpc.io/api",
    },
  ];
  const { container } = render(<Servers servers={servers} />);
  expect(container.innerHTML.includes("Pet Store")).toBe(true);
  expect(container.innerHTML.includes("http://petstore.openrpc.io/api")).toBe(true);
  expect(container.innerHTML.includes("foobar")).toBe(true);
});

it("renders schema servers with variables", () => {
  const servers = [
    {
      description: "foobar",
      name: "Pet Store",
      url: "http://{username}.open-rpc.org:{port}/{basePath}/{exampleName}",
      variables: {
        basePath: {
          default: "jsonrpc",
        },
        exampleName: {
          default: "petstore",
        },
        port: {
          default: "443",
          enum: [
            "8545",
            "443",
          ],
        },
        username: {
          default: "demo",
          description: "this is applied to the url as the subdomain",
        },
      },
    },
  ];
  const { container } = render(<Servers servers={servers} />);
  expect(container.innerHTML.includes("open-rpc.org")).toBe(true);
  expect(container.innerHTML.includes("petstore")).toBe(true);
  expect(container.innerHTML.includes("jsonrpc")).toBe(true);
  expect(container.innerHTML.includes("443")).toBe(true);
  expect(container.innerHTML.includes("8545")).toBe(true);
  expect(container.innerHTML.includes("demo")).toBe(true);
});
