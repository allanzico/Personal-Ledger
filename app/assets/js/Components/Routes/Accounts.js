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

        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
            {accounts.accounts.map(account => {
                return (
                    <div key={account.id}>
                        <Link to={"/dashboard/" + account.id}>
                            <li> {account.account_title} </li>
                        </Link>
                    </div>

                );
            })}
        </div>

    );
}

export default Accounts;

