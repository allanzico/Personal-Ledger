import React from 'react';
import ReactLoading from 'react-loading';

const Loader = () => {
    return (
        <div className="w-full justify-center items-center p-4">
            <div className="text-center px-6 py-4">
                <div className="py-8">
                    <div className="mb-4 justify-center  items-center">
                        <ReactLoading type="cylon" color="#2470a0" height={'15%'} width={'15%'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
