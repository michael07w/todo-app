/**
 * @generated SignedSource<<21b0094a4bf0161b6b10498367467faa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type pagesTaskFinishMutation$variables = {
  input: string;
};
export type pagesTaskFinishMutationVariables = pagesTaskFinishMutation$variables;
export type pagesTaskFinishMutation$data = {
  readonly finish: {
    readonly id: string;
    readonly description: string;
    readonly done: boolean;
  };
};
export type pagesTaskFinishMutationResponse = pagesTaskFinishMutation$data;
export type pagesTaskFinishMutation = {
  variables: pagesTaskFinishMutationVariables;
  response: pagesTaskFinishMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "finish",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "done",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesTaskFinishMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesTaskFinishMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9fe29248a65f00274fd3c84e2ad217d8",
    "id": null,
    "metadata": {},
    "name": "pagesTaskFinishMutation",
    "operationKind": "mutation",
    "text": "mutation pagesTaskFinishMutation(\n  $input: ID!\n) {\n  finish(id: $input) {\n    id\n    description\n    done\n  }\n}\n"
  }
};
})();

(node as any).hash = "63f28246063679c319730fef6b711761";

export default node;
