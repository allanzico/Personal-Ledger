import React, { createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { fetchLedgerData, initialState } from '../Reducers/LedgerReducer';
import { AccountsContext } from './AccountsContext';
import { fetchAccounts } from '../Reducers/accountsReducer';
import { useParams, useRouteMatch } from 'react-router-dom';

export const LedgerContext = createContext();
const ledgerUrl = '/api/ledger/';

const LedgerContextProvider = (props) => {


    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState('');
    // const [ledgerData, setLedgerData] = useState([]);

    const [ledgerData, dispatch] = useReducer(fetchLedgerData, initialState);

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        axios.get(ledgerUrl + 2)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    return (
        <LedgerContext.Provider value={{ ledgerData, dispatch }}>
            {props.children}
        </LedgerContext.Provider>
    );
}

export default LedgerContextProvider;