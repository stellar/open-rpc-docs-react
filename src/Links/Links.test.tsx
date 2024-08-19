import React from "react";
import { render } from '@testing-library/react'
import Links from "./Links";

it("renders without crashing", () => {
  render(<Links />);
});

it("renders empty with no schema", () => {
  const { container } = render(<Links />);
  expect(container.innerHTML).toBe("");
});

it("renders empty with empty links", () => {
  const { container } = render(<Links links={[]}/>);
  expect(container.innerHTML).toBe("");
});

it("renders a link method for a given schema link", () => {
  const link = {
    method: "get_user_address",
  };
  const { container } = render(<Links links={[link]} />);
  expect(container.innerHTML.includes("get_user_address")).toBe(true);
});

it("renders a link params for a given schema link", () => {
  const link = {
    params: {
      foo: "$params.id",
    },
  };
  const { container } = render(<Links links={[link]} />);
  expect(container.innerHTML.includes("foo")).toBe(true);
  expect(container.innerHTML.includes("$params.id")).toBe(true);
});

it("renders a link description for a given schema link", () => {
  const link = {
    description: "my description",
  };
  const { container } = render(<Links links={[link]} />);
  expect(container.innerHTML.includes("my description")).toBe(true);
});

it("renders a link server url for a given schema link", () => {
  const link = {
    server: {
      url: "http://localhost:9210",
    },
  };
  const { container } = render(<Links links={[link]} />);
  expect(container.innerHTML.includes("localhost:9210")).toBe(true);
});

it("renders a link server url for a given schema link", () => {
  const link = {
    server: {
      url: "http://localhost:9210",
    },
  };
  const { container } = render(<Links links={[link]} />);
  expect(container.innerHTML.includes("localhost:9210")).toBe(true);
});
