import React from 'react';
import '../../../css/main.css';
import TransactionList from "./TransactionList";

export const Dashboard = () => {
    return (

         <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
             <TransactionList/>
         </div>

    );
}

export default Dashboard;

