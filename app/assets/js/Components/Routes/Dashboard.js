import React from 'react';
import '../../../css/main.css';

export const Dashboard = () => {
    return (

         <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
             <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
                 <div className="border-b px-6">
                     <div className="flex justify-between -mb-px">
                         <div className=" text-blue-dark py-4 text-center font-medium font-bold text-lg">
                             Current Balance:
                         </div>
                         <div className=" lg:flex">
                             <button type="button" className="py-4 text-blue-dark border-b border-blue-dark mr-4">
                                 Bitcoin &middot; CA$21,404.74
                             </button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>

    );
}

export default Dashboard;