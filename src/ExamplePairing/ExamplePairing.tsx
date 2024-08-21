import React, { Component } from 'react';
import type { JSX } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  ExampleObject,
  ExamplePairingObject,
  MethodObjectParamStructure,
  ExamplePairingObjectResult,
} from '@open-rpc/meta-schema';
import _ from 'lodash';
import MarkdownDescription from '../MarkdownDescription/MarkdownDescription';

interface IProps {
  examplePairing?: ExamplePairingObject;
  paramStructure?: MethodObjectParamStructure;
  components?: {
    CodeBlock: React.FC<{ children: string; className?: string }>;
    Tabs?: React.FC<{ children: JSX.Element | JSX.Element[]; groupId: string }>;
    TabItem?: React.FC<{ children: JSX.Element; value: string; label: string }>;
  };
  methodName?: string;
  uiSchema?: any;
  reactJsonOptions?: any;
}

class ExamplePairing extends Component<IProps, {}> {
  public render() {
    const { examplePairing, paramStructure, methodName, uiSchema, components } =
      this.props;
    if (_.isUndefined(examplePairing)) {
      return null;
    }
    if (_.isUndefined(methodName)) {
      return null;
    }
    const params =
      paramStructure === 'by-name'
        ? (examplePairing.params as ExampleObject[]).reduce((memo, p) => {
            memo[p.name] = p.value;
            return memo;
          }, {} as any)
        : (examplePairing.params as ExampleObject[]).map((p) => p.value);

    const methodCall = {
      jsonrpc: '2.0',
      id: 8675309,
      method: methodName,
      params,
    };

    if (Object.keys(params).length === 0) {
      delete methodCall.params;
    }
    const resultObj = {
      jsonrpc: '2.0',
      id: 8675309,
      result: (examplePairing.result as ExampleObject).value,
    };
    const serverUrl = methodName.indexOf('_') > -1
      ? 'https://platform-server.exampleanchor.com'
      : 'https://soroban-testnet.stellar.org'
    const curlCode = `curl -X POST \\
-H 'Content-Type: application/json' \\
-d '${JSON.stringify(methodCall, null, 2)}' \\
${serverUrl} | jq`;
    const jsCode = `let requestBody = ${JSON.stringify(methodCall, null, 2)}
let res = await fetch('${serverUrl}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestBody),
})
let json = await res.json()
console.log(json)`;

    const pythonCode = `import json, requests
res = requests.post(${serverUrl}, json=${JSON.stringify(
      methodCall,
      null,
      4,
    )})
print(json.dumps(res.json(), indent=4))`;

    return (
      <div>
        <div>
          <MarkdownDescription
            uiSchema={uiSchema}
            source={examplePairing.description || ''}
            className="example-pairing-description"
          />
        </div>
        <div>
          <div>
            <h3>Request</h3>
            <div>
              {components &&
                components.CodeBlock &&
                components.Tabs &&
                components.TabItem && (
                  <components.Tabs groupId="rpc-examples">
                    <components.TabItem value="curl" label="cURL">
                      <components.CodeBlock className="language-bash">
                        {curlCode}
                      </components.CodeBlock>
                    </components.TabItem>
                    <components.TabItem value="javascript" label="JavaScript">
                      <components.CodeBlock className="language-js">
                        {jsCode}
                      </components.CodeBlock>
                    </components.TabItem>
                    <components.TabItem value="python" label="Python">
                      <components.CodeBlock className="language-python">
                        {pythonCode}
                      </components.CodeBlock>
                    </components.TabItem>
                    <components.TabItem value="json" label="JSON">
                      <components.CodeBlock className="language-json">
                        {JSON.stringify(methodCall, null, 2)}
                      </components.CodeBlock>
                    </components.TabItem>
                  </components.Tabs>
                )}
              {!components?.CodeBlock && (
                <pre>
                  <code>{curlCode}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Result</h3>
            <div>
              {components && components.CodeBlock && (
                <components.CodeBlock className="language-json">
                  {JSON.stringify(resultObj, null, '  ')}
                </components.CodeBlock>
              )}
              {!components?.CodeBlock && (
                <pre>
                  <code>{JSON.stringify(resultObj)}</code>
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExamplePairing;
