import React from 'react';
import '../../../css/main.css';

export const MainLayout = () => {
    return (

        <div className="grid grid-flow-col sm:grid-flow-row md:grid-flow-col-dense lg:grid-flow-row-dense xl:grid-flow-col ...">
            <div className="bg-blue-600">1</div>

            <div className="bg-green-600">9</div>
        </div>

    );
}

export default MainLayout;