import { useMemo } from 'react'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

let relayEnvironment

/** Define function to fetch results of an operation
 *  and returns its results as a Promise
 */
function fetchQuery(operation, variables) {
    return fetch('http://127.0.0.1:8080/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        }),
    }).then((response) => response.json())
}


/** Generate a single instance of a Relay Environment config'd with 
 *  the network function.
 */
export function createEnvironment(initialRecords) {
    return new Environment({
        // Create network layer from the fetch function
        network: Network.create(fetchQuery),
        store: new Store(new RecordSource(initialRecords)),
    })
}


export function initEnvironment(initialRecords) {
    // Create network layer from the fetch function
    const environment = relayEnvironment ?? createEnvironment(initialRecords)

    // If page has next.js data fetching methods that use Relay, initial records will be hydrated here
    if (initialRecords) {
        environment.getStore().publish(new RecordSource(initialRecords))
    }
    // Must create new Relay environment if using SSG or SSR
    if (typeof window === 'undefined') return environment
    // Create Relay environment once in the client
    if (!relayEnvironment) relayEnvironment = environment

    return relayEnvironment
}


export function useEnvironment(initialRecords) {
    const store = useMemo(() => initEnvironment(initialRecords), [initialRecords])
    return store
}