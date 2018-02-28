import { getBitcoinData } from "./action-types"

const BITCOIN_API = "https://api.coindesk.com/v1/bpi/currentprice.json"

/**
 * This resolves the various types of requests
 *
 * @param {Promise} requestPromise the promise the contains the request to the api
 * @param {Object} actionTypes objects with keys start, success and fail. These map to action types
 * @param {Function} dispatch the dispatch function
 * @param {Object} payload={} additional data to be passed
 * @returns {Promise} returns the promise with the response or the error
 */
const resolveRequestPromise = (requestPromise, actionTypes, dispatch, payload) =>
    requestPromise
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            dispatch({ type: actionTypes.success, response, ...payload })
            return response
        })
        .catch((error) => {
            // throw error
            dispatch({ type: actionTypes.fail, error, ...payload })
            console.log('error', error)
            throw error
        })

export const makeNetworkRequest = (endpoint, actionTypes ) =>
    (dispatch) => {
            dispatch({ type: actionTypes.start })
            const request = fetch(BITCOIN_API)
            return resolveRequestPromise(request, actionTypes, dispatch)
        }

export const loadBitcoinData = () => makeNetworkRequest(BITCOIN_API, getBitcoinData)

