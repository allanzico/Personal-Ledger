import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchLedgerData, initialState } from '../Reducers/LedgerReducer';

export const LedgerContext = createContext();
const ledgerUrl = '/api/ledger';

const LedgerContextProvider = (props) => {

    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState('');
    // const [ledgerData, setLedgerData] = useState([]);

    const [ledgerData, dispatch] = useReducer(fetchLedgerData, initialState)

    useEffect(() => {
        axios.get(ledgerUrl)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);


    // useEffect(() => {
    //     axios.get(ledgerUrl)
    //         .then(res => {
    //             setLoading(false)
    //             setLedgerData(res.data)
    //             setError('')
    //         })
    //         .catch(error => {

    //             setLoading(false)
    //             setLedgerData([])
    //             setError('ooops')
    //         })
    // }, []);

    return (
        <LedgerContext.Provider value={{ ledgerData, dispatch }}>
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;