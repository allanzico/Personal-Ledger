import React from 'react';
import '../../../css/main.css';

import TransactionTable from './TransactionTable';

export const Dashboard = () => {
    return (

        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
            <TransactionTable />
        </div>

    );
}

export default Dashboard;

