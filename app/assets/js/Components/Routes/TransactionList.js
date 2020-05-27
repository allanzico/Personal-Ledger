import React, { useContext } from 'react';
import { LedgerContext } from "../../contexts/LedgerContext";


const TransactionList = () => {
    const { ledgerData, loading } = useContext(LedgerContext);
    console.log(ledgerData)

    return (
        <div>


            {ledgerData.loading ? 'Loading...' : ledgerData.ledgerData.map(ledger => {
                return (
                    <ul key={ledger.id}>
                        <li >{ledger.account_title}</li>
                        <li>{ledger.debit}</li>
                        <li>{ledger.credit}</li>
                    </ul>
                )
            })}

        </div>
    );
}

export default TransactionList;