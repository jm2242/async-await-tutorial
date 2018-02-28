const actionTypes = {
    GET_BITCOIN_DATA_START: "GET_BITCOIN_DATA_START",
    GET_BITCOIN_DATA_SUCCESS: "GET_BITCOIN_DATA_SUCCESS",
    GET_BITCOIN_DATA_FAIL: "GET_BITCOIN_DATA_FAIL"
}

export default actionTypes

export const getBitcoinData = {
    start: actionTypes.GET_BITCOIN_DATA_START,
    success: actionTypes.GET_BITCOIN_DATA_SUCCESS,
    fail: actionTypes.GET_BITCOIN_DATA_FAIL,
}
