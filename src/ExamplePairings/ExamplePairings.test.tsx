import React from "react";
import ReactDOM from "react-dom";
import ExamplePairings from "./ExamplePairings";
import examples from "@open-rpc/examples";
import refParser from "json-schema-ref-parser";
import { OpenrpcDocument, ExamplePairingObject } from "@open-rpc/meta-schema";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExamplePairings />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders empty with no example", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExamplePairings />, div);
  expect(div.innerHTML).toBe("");
  ReactDOM.unmountComponentAtNode(div);
});

it("renders empty with empty example", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExamplePairings examples={[]} />, div);
  expect(div.innerHTML).toBe("");
  ReactDOM.unmountComponentAtNode(div);
});

it("renders examples", async () => {
  const div = document.createElement("div");
  const simpleMath = await refParser.dereference(examples.simpleMath) as OpenrpcDocument;
  ReactDOM.render(
    <ExamplePairings
      method={simpleMath.methods[0]}
      examples={simpleMath.methods[0].examples as ExamplePairingObject[]
      } />
    , div);
  expect(div.innerHTML.includes("simpleMathAdditionTwo")).toBe(true);
  expect(div.innerHTML.includes("2")).toBe(true);
  expect(div.innerHTML.includes("4")).toBe(true);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders examples with only schema examples", async () => {
  const div = document.createElement("div");
  const testDoc: OpenrpcDocument = {
    info: {
      title: "test",
      version: "0.0.0",
    },
    methods: [
      {
        name: "test-method",
        params: [{
          name: "testparam1",
          schema: {
            examples: ["bob"],
            type: "string",
          },
        }],
        result: {
          name: "test-method-result",
          schema: {
            examples: ["potato"],
            type: "string",
          },
        },
      },
    ],
    openrpc: "1.0.0",
  };
  ReactDOM.render(
    <ExamplePairings
      method={testDoc.methods[0]}
      examples={testDoc.methods[0].examples as ExamplePairingObject[]
      } />
    , div);
  expect(div.innerHTML.includes("potato")).toBe(true);
  expect(div.innerHTML.includes("bob")).toBe(true);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders examples with only schema examples with no params", async () => {
  const div = document.createElement("div");
  const testDoc: OpenrpcDocument = {
    info: {
      title: "test",
      version: "0.0.0",
    },
    methods: [
      {
        name: "test-method",
        params: [],
        result: {
          name: "test-method-result",
          schema: {
            examples: ["potato"],
            type: "string",
          },
        },
      },
    ],
    openrpc: "1.0.0",
  };
  ReactDOM.render(
    <ExamplePairings
      method={testDoc.methods[0]}
      examples={testDoc.methods[0].examples as ExamplePairingObject[]
      } />
    , div);
  expect(div.innerHTML.includes("potato")).toBe(true);
  expect(div.innerHTML.includes("bob")).toBe(true);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders examples with only schema examples and no method", async () => {
  const div = document.createElement("div");
  const testDoc: OpenrpcDocument = {
    info: {
      title: "test",
      version: "0.0.0",
    },
    methods: [
      {
        name: "test-method",
        params: [{
          name: "testparam1",
          schema: {
            examples: ["bob"],
            type: "string",
          },
        }],
        result: {
          name: "test-method-result",
          schema: {
            examples: ["potato"],
            type: "string",
          },
        },
      },
    ],
    openrpc: "1.0.0",
  };
  ReactDOM.render(
    <ExamplePairings
      examples={testDoc.methods[0].examples as ExamplePairingObject[]
      } />
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
