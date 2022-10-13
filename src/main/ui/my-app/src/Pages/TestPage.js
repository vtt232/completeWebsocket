import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import testImage from "../images/testImage.jpg";
import Modal from "../Components/Notification/Modal";
import { useState } from 'react';
import { createPortal } from "react-dom";
function TestPage (){

    const modalDomElement = document.getElementById("portal-root");

    const [stateModal, setStateModal] = useState(false);
    const openModal = () => setStateModal(true);
    const closeModal = () => setStateModal(false);
    const [receivedNumber, setReceivedNumber]=useState(0)

    const ModalContent = () =>{
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{receivedNumber}</h1>
                </div>
                <div className="modal-content">
                    <input type="number"></input>
                </div>
            </div>
        )
    }

 

    return(
        <div>
            <Header/>
            <div className="row">
                <button onClick={openModal}>
                    Click to Open Modal
                </button>
                {stateModal && 
                    createPortal(
                        <Modal children={<ModalContent/>} close={closeModal}/>,
                        modalDomElement
                    )
                }
                <h1>This is test page</h1>
                <img src={testImage} />
            </div>
            <Footer/>
        </div>
    )
}

export default TestPage;