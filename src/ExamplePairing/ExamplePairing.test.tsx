import React from "react";
import { render } from "@testing-library/react";
import ExamplePairing from "./ExamplePairing";
import examples from "@open-rpc/examples";
import refParser from "json-schema-ref-parser";
import { MethodObject, OpenrpcDocument, ExamplePairingObject, MethodObjectExamples } from "@open-rpc/meta-schema";

it("renders handles no method", async () => {
  const { container } = render(
    <ExamplePairing examplePairing={{} as any} />
  );
  expect(container.innerHTML).toBe("");
});

it("renders handles no method examples", async () => {
  const { container } = render(<ExamplePairing methodName={"foo"} />);
  expect(container.innerHTML).toBe("");
});

it("renders examples", async () => {
  const simpleMath = await refParser.dereference(examples.simpleMath as any) as OpenrpcDocument;
  const method = simpleMath.methods[0] as MethodObject;
  const { container } = render(
    <ExamplePairing
      methodName={method.name}
      examplePairing={method.examples && method.examples[0] as any}
    />
  );
  expect(container.innerHTML.includes("2")).toBe(true);
  expect(container.innerHTML.includes("4")).toBe(true);
});

it("renders examples with params by-name", async () => {
  const method: MethodObject = {
    examples: [
      {
        name: "fooExample",
        params: [
          {
            name: "foo",
            value: "bar",
          },
        ],
        result: {
          name: "exampleResultThing",
          value: "potato",
        },
      },
    ],
    name: "myMethod",
    paramStructure: "by-name",
    params: [{
      name: "foo",
      schema: {
        type: "string",
      },
    }],
    result: {
      name: "resultThing",
      schema: {
        type: "string",
      },
    },
  };
  const methodExamples = method.examples as MethodObjectExamples;
  const { container } = render(
    <ExamplePairing
      methodName={method.name}
      examplePairing={methodExamples[0] as ExamplePairingObject}
      paramStructure={method.paramStructure || "by-position"} />
  );
  expect(container.innerHTML.includes("foo")).toBe(true);
  expect(container.innerHTML.includes("bar")).toBe(true);
});
