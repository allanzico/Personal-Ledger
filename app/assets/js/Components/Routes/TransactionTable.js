import React, { useContext } from 'react';
import { LedgerContext } from "../../contexts/LedgerContext";
import { ThemeContext } from '../../contexts/ThemeContext';


const TransactionTable = () => {
    const { ledgerData } = useContext(LedgerContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="w-full shadow">
            <div className="overflow-hidden ">
                <table className="min-w-full bg-white">
                    <thead className style={{ background: theme.table_header, color: theme.table_header_text }}>
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Account</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Debit</th>
                            <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">Credit</th>
                            <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">Balance</th>
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
        // <ul key={ledger.id}>
        //     <li >{ledger.account_title}</li>
        //     <li>{ledger.debit}</li>
        //     <li>{ledger.credit}</li>
        // </ul>
    )
}

export default TransactionTable;