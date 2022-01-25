/**
 * @generated SignedSource<<6f9d276cafcc288cd6b268356074e58f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesIndexTaskListQuery$variables = {};
export type pagesIndexTaskListQueryVariables = pagesIndexTaskListQuery$variables;
export type pagesIndexTaskListQuery$data = {
  readonly task_list: ReadonlyArray<{
    readonly id: string;
    readonly description: string;
    readonly done: boolean;
  }>;
};
export type pagesIndexTaskListQueryResponse = pagesIndexTaskListQuery$data;
export type pagesIndexTaskListQuery = {
  variables: pagesIndexTaskListQueryVariables;
  response: pagesIndexTaskListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "task_list",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexTaskListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexTaskListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e4f47d0051749300ef0213d3e3d4a1cb",
    "id": null,
    "metadata": {},
    "name": "pagesIndexTaskListQuery",
    "operationKind": "query",
    "text": "query pagesIndexTaskListQuery {\n  task_list {\n    id\n    description\n    done\n  }\n}\n"
  }
};
})();

(node as any).hash = "618ac977bc43f2a8b72286e39183c8a6";

export default node;
