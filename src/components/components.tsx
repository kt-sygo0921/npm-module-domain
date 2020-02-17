import * as React from 'react';
import Modal from 'react-modal';

const Components: React.FC = () => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <>
            <p>コンポーネント1</p>
            <button onClick={openModal}>open modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <p>モーダルだよーーー</p>
                <p onClick={closeModal} style={{cursor: 'pointer'}}>クリックしたらモーダルが消えるよ</p>
            </Modal>
        </>
    )
}

export {Components};