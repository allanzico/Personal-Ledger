import React, {useContext} from 'react'
import ConfirmDeleteAccount from './AccountModals/ConfirmDeleteAccount'
import EditAccount from './AccountModals/EditAccount'
import { ModalContext } from '../../contexts/ModalContext'
import ConfirmDeleteTransaction from './TransactionModals/ConfirmDeleteTransaction'

const Modals = {
    ConfirmDeleteAccount,
    EditAccount,
    ConfirmDeleteTransaction
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