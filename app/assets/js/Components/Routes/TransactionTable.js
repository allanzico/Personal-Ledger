import React, { useContext, useReducer, useEffect } from 'react';
import { LedgerContext } from "../../contexts/LedgerContext";
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useParams } from 'react-router-dom';
import { fetchLedgerData, initialState } from '../../Reducers/LedgerReducer';
import NoData from '../NoData';
const ledgerUrl = '/api/ledger/';

const TransactionTable = () => {
    //const { ledgerData } = useContext(LedgerContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { id } = useParams();
    const [ledgerData, dispatch] = useReducer(fetchLedgerData, initialState);

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
        <div>
            {ledgerData.loading ? 'loading...' : (ledgerData.ledgerData.length == 0 ? <NoData /> :
                <div className="w-full">
                    <div className="flex justify-between px-6 -mb-px">
                        <h3 className="py-4 font-normal text-lg" style={{ color: theme.syntax }}>
                            <div className="flex -mb-px mr-8">
                                <svg className="h-6 w-6 fill-current mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                {ledgerData.ledgerData[0].account_title}
                            </div>
                        </h3>

                    </div>
                    <div className="overflow-hidden shadow ">
                        <table className="min-w-full">
                            <thead style={{ background: theme.table_header, color: theme.table_header_text }}>
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Account</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Debit</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Credit</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Balance</th>
                                </tr>
                            </thead>
                            <tbody style={{ background: theme.ui, color: theme.syntax }} >
                                {ledgerData.ledgerData.map(ledger => {
                                    return (
                                        <tr key={ledger.id} >
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
                </div >)}
        </div>

    )
}

export default TransactionTable;