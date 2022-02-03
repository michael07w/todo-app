/**
 * @generated SignedSource<<d2dda48822b1b57f2ae55c534f1f144c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type pagesAddTaskMutation$variables = {
  input: string;
};
export type pagesAddTaskMutationVariables = pagesAddTaskMutation$variables;
export type pagesAddTaskMutation$data = {
  readonly add: ReadonlyArray<{
    readonly id: string;
    readonly description: string;
    readonly done: boolean;
  }>;
};
export type pagesAddTaskMutationResponse = pagesAddTaskMutation$data;
export type pagesAddTaskMutation = {
  variables: pagesAddTaskMutationVariables;
  response: pagesAddTaskMutation$data;
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
        "name": "description",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "add",
    "plural": true,
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
    "name": "pagesAddTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pagesAddTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6d39959a3f33ea4448a45debf9e373fa",
    "id": null,
    "metadata": {},
    "name": "pagesAddTaskMutation",
    "operationKind": "mutation",
    "text": "mutation pagesAddTaskMutation(\n  $input: String!\n) {\n  add(description: $input) {\n    id\n    description\n    done\n  }\n}\n"
  }
};
})();

(node as any).hash = "9547c3fc56f378ec87c0f2416efea217";

export default node;
