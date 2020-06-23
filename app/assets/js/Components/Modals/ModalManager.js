import React, {useContext} from 'react'
import ConfirmDeleteAccount from './AccountModals/ConfirmDeleteAccount'
import EditAccount from './AccountModals/EditAccount'
import { ModalContext } from '../../contexts/ModalContext'

const Modals = {
    ConfirmDeleteAccount,
    EditAccount
}
const ModalManager = (props) => {
    const {currentModal, setCurrentModal} = useContext(ModalContext);
    const closeModal = () => setCurrentModal(null);
    if (currentModal) {
        const ModalComponent = Modals[currentModal.name];
        return <ModalComponent closeModal={closeModal}{...currentModal.props}/>
    } return null;
}

export default ModalManager;