export const initialState = {
    loading: true,
    error: '',
    accounts: []
}
export const fetchAccounts = (state, action) => {
    switch (action.type) {
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
                console: 'Ooops'
            }
        default:
            return state
    }
}
