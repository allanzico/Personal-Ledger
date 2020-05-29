import React, { useContext, useReducer, useEffect, useState } from 'react';
import { LedgerContext } from "../../contexts/LedgerContext";
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useParams } from 'react-router-dom';
import { fetchLedgerData, initialState } from '../../Reducers/LedgerReducer';
import NoData from '../NoData';
import Pagination from '../Pagination';
import Loader from '../Loader';
const ledgerUrl = '/api/ledger/';

const TransactionTable = () => {
    //const { ledgerData } = useContext(LedgerContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { id } = useParams();
    const [ledgerData, dispatch] = useReducer(fetchLedgerData, initialState);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(5);

    useEffect(() => {
        axios.get(ledgerUrl + id)
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