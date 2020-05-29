import React, { useContext } from 'react';
import '../../../css/main.css';
import { AccountsContext } from '../../contexts/AccountsContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link, useParams } from 'react-router-dom';
import NoData from '../NoData';

export const Accounts = () => {

    const { accounts } = useContext(AccountsContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    console.log(accounts)

    return (
        <div className="flex flex-wrap sm:mt-6 ">
            {accounts.loading ? 'Loading...' : (accounts.accounts.length == 0 ? <NoData /> : accounts.accounts.map(account => {
                return (

                    <div className="w-full sm:w-1/4 mb-4 px-2" key={account.id} >
                        <Link to={"/dashboard/" + account.id} style={{ textDecoration: 'none' }}>
                            <div className="cursor-pointer items-center p-4  h-full shadow-lg" style={{ background: theme.ui, color: theme.syntax }}>
                                <h3 className="mb-2 text-lg font-semibold items-center">{account.account_title}</h3>
                                <div>
                                    <p className="text-sm uppercase tracking-wide">Transactions: {account.total_transactions} </p>
                                </div>
                            </div>
                        </Link>
                    </div>



                );
            }))}
        </div>







    );
}

export default Accounts;

