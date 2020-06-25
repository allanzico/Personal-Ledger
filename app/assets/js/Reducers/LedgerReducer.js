export const initialState = {
    loading: true,
    error: '',
    ledgerData: []
}
export const ledgerReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DEBIT':
            return {
                ...state,
                ledgerData: [action.payload, ...state.ledgerData]
            }
        case 'ADD_CREDIT':
            return {
                ...state,
                ledgerData: [action.payload, ...state.ledgerData]
            }
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
            case 'DELETE_TRANSACTION':
                return {
                    ...state,
                    ledgerData: state.ledgerData.filter(ledger => {
                        ledger.id !== action.payload;
                    })
                }
        default:
            return state
    }
}
