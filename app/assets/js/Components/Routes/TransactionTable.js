import React, { useContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useParams } from 'react-router-dom';
import NoData from '../ErrorMessagesComponents/NoData';
import Pagination from '../Pagination';
import Loader from '../ErrorMessagesComponents/Loader';
import { ledgerReducer, initialState } from '../../Reducers/ledgerReducer';
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

                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm ">Debit</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm ">Credit</th>
                                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm ">Balance</th>
                                </tr>
                            </thead>
                            <tbody style={{ background: theme.ui, color: theme.syntax }} >
                                {currentTransaction.map(ledger => {
                                    return (
                                        <tr key={ledger.id} >

                                            <td className="w-1/3 text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.transaction_description}</td>
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.debit}</td>
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.credit}</td>
                                            <td className="text-left py-3 px-4 " style={{ borderBottomColor: theme.bg }} >{ledger.balance}</td>
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