import React, { useContext } from 'react';
import '../../../css/main.css';
import { AccountsContext } from '../../contexts/AccountsContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link, useParams } from 'react-router-dom';

export const Accounts = () => {

    const { accounts } = useContext(AccountsContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (

        <div className="flex-grow container mx-auto sm:px-4 sm:pt-6">
            <div class="flex mb-4 sm:gap-4">
                <div class="w-1/4 bg-gray-500">
                    <div className="select-none cursor-pointer flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" style={{ background: theme.ui, color: theme.syntax }}>
                        <p class="text-3xl font-semibold text-center text-gray-800">43</p>
                        <p class="text-lg text-center text-gray-500">New Tickets</p>
                    </div>
                </div>
            </div>
            {/* {accounts.accounts.map(account => {
                return (
                    <div key={account.id}>
                        <Link to={"/dashboard/" + account.id}>
                            <li> {account.account_title} </li>
                        </Link>
                    </div>

                );
            })} */}
        </div>

    );
}

export default Accounts;

