import React, { useEffect, useContext } from 'react'
import { node } from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';

const EditAccount = ({ closeModal }) => {

    let modalRef;
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    useEffect(() => {
        document.addEventListener('click', onClickOutside)
    }, []);

    //Close Modal on outside click
    const onClickOutside = (e) => {
        modalRef && !modalRef.contains(e.target) ? closeModal() : null
    }

    return (

        <div className="modal pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div ref={(node) => (modalRef = node)} className="modal-container w-11/12 md:max-w-md mx-auto z-50 overflow-y-auto" style={{ background: theme.bg, color: theme.syntax }} >

                <div className="modal-content py-4 text-left px-6" style={{ background: theme.ui, color: theme.syntax }}>
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Edit Account!</p>
                    </div>
                    <p>
                        <input type="text" placeholder="Account name" class="border p-2 w-full mt-3" />
                    </p>
                    <div className="flex justify-end pt-2">
                        <button onClick={closeModal} className="px-4 p-3 mr-2 border" style={{ color: theme.syntax }} > Cancel</button>
                        <button className="modal-close px-4 p-3 " style={{ background: theme.button, color: theme.button_text }}>Update</button>
                    </div>

                </div>
            </div>
        </div>




    );

}

export default EditAccount;