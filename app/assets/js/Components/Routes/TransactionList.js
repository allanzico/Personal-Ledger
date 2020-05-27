import React, {useContext} from 'react';
import {LedgerContext} from "../../contexts/LedgerContext";


const BookList = () => {
    const {ledgerData} = useContext(LedgerContext);
    console.log(ledgerData);
    return (
        <div>
            <ul>
                {ledgerData.map(ledger => {
                    return (
                        <ul>
                            <li key={ledger.id}>{ledger.account_title}</li>
                            <li key={ledger.id}>{ledger.debit}</li>
                            <li key={ledger.id}>{ledger.credit}</li>

                        </ul>


                    )
                })}
            </ul>
        </div>
    );
}

export default BookList;