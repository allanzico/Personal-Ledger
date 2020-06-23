export const initialState = {
    loading: true,
    error: '',
    accounts: []
}
export const accountsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            }
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                accounts: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                accounts: [],
                error: 'Something went wrong'
            }
        case 'DELETE_ACCOUNT':
            return {
                ...state,
                accounts: state.accounts.filter(account => {
                    account.id !== action.payload;
                })
            }
        default:
            return state
    }
}

