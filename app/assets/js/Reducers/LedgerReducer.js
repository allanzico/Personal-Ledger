export const initialState = {
    loading: true,
    error: '',
    ledgerData: []
}
export const fetchLedgerData = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                ledgerData: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                ledgerData: [],
                console: 'Ooops'
            }
        default:
            return state
    }
}
