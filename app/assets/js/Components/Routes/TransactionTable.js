import React, { useContext, useReducer, useEffect } from 'react';
import { LedgerContext } from "../../contexts/LedgerContext";
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useParams } from 'react-router-dom';
import { fetchLedgerData, initialState } from '../../Reducers/LedgerReducer';
const ledgerUrl = '/api/ledger/';

const TransactionTable = () => {
    //const { ledgerData } = useContext(LedgerContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { id } = useParams();
    const [ledgerData, dispatch] = useReducer(fetchLedgerData, initialState);

    console.log(ledgerData);

    useEffect(() => {
        axios.get(ledgerUrl + id)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    return (
        <div className="w-full shadow">
            <div className="overflow-hidden ">
                <table className="min-w-full bg-white">
                    <thead style={{ background: theme.table_header, color: theme.table_header_text }}>
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Account</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Debit</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Credit</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Balance</th>
                        </tr>
                    </thead>
                    <tbody style={{ background: theme.ui, color: theme.syntax }}>
                        {ledgerData.loading ? 'Loading...' : ledgerData.ledgerData.map(ledger => {
                            return (
                                <tr key={ledger.id}>
                                    <td className="w-1/3 text-left py-3 px-4">{ledger.account_title}</td>
                                    <td className="w-1/3 text-left py-3 px-4">{ledger.transaction_description}</td>
                                    <td className="text-left py-3 px-4">{ledger.debit}</td>
                                    <td className="text-left py-3 px-4">{ledger.credit}</td>
                                    <td className="text-left py-3 px-4">{ledger.balance}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default TransactionTable;