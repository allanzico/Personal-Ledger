import React, { useContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useParams } from 'react-router-dom';
import NoData from '../ErrorMessagesComponents/NoData';
import Pagination from '../Pagination';
import Loader from '../ErrorMessagesComponents/Loader';
import { ledgerReducer, initialState } from '../../Reducers/ledgerReducer';
import { format } from 'date-fns'
const ledgerGetUrl = '/api/ledger/';

const TransactionTable = () => {
    //const { ledgerData } = useContext(LedgerContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { id } = useParams();
    const [ledgerData, dispatch] = useReducer(ledgerReducer, initialState);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);

    useEffect(() => {
        axios.get(ledgerGetUrl + id)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);



    //Get current Transaction

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentTransaction = ledgerData.ledgerData.slice(indexOfFirst, indexOfLast);

    //Get last element in array
    const lastElement = ledgerData.ledgerData.slice(-1)[0]

    //Paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {ledgerData.loading ? <Loader /> : (currentTransaction.length == 0 ? <NoData /> :
                <div className="w-full">
                    <div className="flex justify-between -mb-px">
                        <h3 className="py-4 font-normal text-lg uppercase font-semibold" style={{ color: theme.syntax }}>
                            <div className="flex ">
                                {ledgerData.ledgerData[0].account_title}

                            </div>
                        </h3>
                    </div>
                    <div className="flex justify-between mb-2">
                        <div class="px-4 py-2 text-lg sm:mt-0 " style={{ background: theme.ui, color: theme.syntax }}>
                            Current Balance:
                            <span class="badge mb-3 rounded px-2 text-center object-right-top text-sm ml-2" style={{ background: theme.badge_bg, color: theme.badge_syntax }} > {lastElement.balance}</span>
                        </div>
                    </div>
                    <div className="overflow-hidden shadow ">
                        <table className="table-auto border-collapse table-striped relative w-full ">
                            <thead style={{ background: theme.table_header, color: theme.table_header_text }}>
                                <tr>

                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm ">Debit</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm ">Credit</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm ">Balance</th>
                                    <th className="text-left uppercase font-semibold text-sm  ">Manage</th>
                                </tr>
                            </thead>
                            <tbody style={{ background: theme.ui, color: theme.syntax }} >
                                {currentTransaction.map(ledger => {
                                    return (
                                        <tr key={ledger.id} >
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.date}</td>
                                            <td className="w-1/3 text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.transaction_description}</td>
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.debit}</td>
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.credit}</td>
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.balance}</td>
                                            <td className="text-left " style={{ borderBottomColor: theme.bg }} >
                                            
                                                    <button className="edit-button inline-block ml-2 p-1 " style={{ color: theme.syntax }} >
                                                        <svg className="h-4 w-4 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                                    </button>
                                                    <span className="ml-2 uppercase font-semibold text-sm " style={{ color: theme.syntax }}>|</span>
                                                    <button type="button" className="delete-button inline-block ml-2 p-1 "  style={{ color: theme.syntax}} >
                                                        <svg className="h-4 w-4 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                    </button>
        
                                            </td>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div class="w-full flex justify-center  items-center" >
                        <Pagination perPage={perPage} totalTransactions={ledgerData.ledgerData.length} paginate={paginate} />
                    </div>
                </div >)}
        </div>

    )
}

export default TransactionTable;