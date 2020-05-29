import React, { useContext, useReducer, useState, useEffect } from 'react';
import '../../../css/main.css';
import { AccountsContext } from '../../contexts/AccountsContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link, useParams } from 'react-router-dom';
import NoData from '../NoData';
import Loader from '../Loader';
import Pagination from '../Pagination';
import { fetchAccounts, initialState } from '../../Reducers/accountsReducer';
import axios from 'axios';
const accountsUrl = '/api/account';

export const Accounts = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [accounts, dispatch] = useReducer(fetchAccounts, initialState)
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(8);

    useEffect(() => {
        axios.get(accountsUrl)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);

    //Get current Account

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentAccount = accounts.accounts.slice(indexOfFirst, indexOfLast);

    //Paginate
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="flex flex-wrap sm:mt-6 ">

                {accounts.loading ? <Loader /> : (currentAccount.length == 0 ? <NoData /> : currentAccount.map(account => {
                    return (

                        <div className="w-full sm:w-1/4 mb-4 px-2 items-baseline" key={account.id} >
                            <Link to={"/dashboard/" + account.id} style={{ textDecoration: 'none' }}>
                                <div className="cursor-pointer items-center p-4  h-full shadow-lg" style={{ background: theme.ui, color: theme.syntax }}>
                                    <h3 className="mb-2 font-semibold items-center tracking-wide">{account.account_title}</h3>
                                    <div>
                                        <p className="text-sm "> Transactions: <span className="inline-block ml-2 px-2 rounded uppercase tracking-wide font-semibold " style={{ background: theme.badge_bg, color: theme.badge_syntax }} > {account.total_transactions}</span> </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                }))}
                <div class="w-full flex justify-center  items-center" >
                    <Pagination perPage={perPage} totalTransactions={accounts.accounts.length} paginate={paginate} />
                </div>
            </div>
            <div className="w-full justify-center  items-center">

                <form action="" class="form p-6 my-10 relative" style={{ background: theme.ui, color: theme.syntax }}>
                    <h3 class="text-2xl font-semibold">Add Account</h3>
                    <p class="text-gray-600"> To help you choose your property</p>
                    <input type="text" placeholder="Account name" class="border p-2 w-full mt-3" />
                    <input type="submit" value="Submit" class="w-full mt-6 font-semibold select-none cursor-pointer flex flex-1 items-center p-2" style={{ background: theme.button, color: theme.button_text }} />

                </form>

            </div>
        </div>









    );
}

export default Accounts;

