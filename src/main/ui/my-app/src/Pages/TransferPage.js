import Footer from "../Components/Layouts/Footer";
import { useEffect, useState } from "react"
import Modal from "../Components/Notification/Modal";
import { createPortal } from "react-dom";
import Header from "../Components/Layouts/Header";
import SockJS from 'sockjs-client'
import {over} from 'stompjs'

var stompClient =null;
function TransferPage(){
    
    const [number, setNumber] = useState(0)
    const [receiver, setReceiver] = useState("")
    const [message, setMessage] = useState("")

    const modalDomElement = document.getElementById("portal-root");

    const [stateModal, setStateModal] = useState(false);
    const openModal = () => setStateModal(true);
    const closeModal = () => setStateModal(false);

    




    const connect =()=>{
        let Sock = new SockJS('http://localhost:8080/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, onError);
    }



    const onConnected = () => {
        console.log("heloo")
        stompClient.subscribe('/user/queue/notify', onMessageReceived);
    }


    const onMessageReceived = (payload)=>{
        setMessage(payload.body)
        openModal()
    }

    const onError = (err) => {
        console.log(err);
    }

    useEffect(()=>{connect()},[])

    const onNumberFieldChange = (event)=> {
        event.preventDefault()
        setNumber(event.target.value)
    } 

    const onReceiverFieldChange = (event)=> {
        event.preventDefault()
        setReceiver(event.target.value)
    } 

    

    const onSendNumberSubmit = () => {
        var notify = {number:number, receiver:receiver}
        stompClient.send("/app/transfer",{},JSON.stringify(notify))
    }


    function confirmDeleteStudent() {
        if(window.confirm("Do you want to sent to this user?")){
            onSendNumberSubmit()
        }
    }



    

    const ModalContent = () =>{
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{message}</h1>
                </div>
                <div className="modal-content">
                    <input type="number"></input>
                </div>
            </div>
        )
    }




    return (
        <div>
            <Header/>
            {stateModal && 
                    createPortal(
                        <Modal children={<ModalContent/>} close={closeModal}/>,
                        modalDomElement
                    )
            }
            <div className="ms-3">
                <form  onSubmit={confirmDeleteStudent}>
                <div className="form-group col-md-6 mb-3">
                    <label>Enter number:</label>
                    <input
                        className="form-control" 
                        type="number" 
                        name="number" 
                        value={number || ""} 
                        onChange={onNumberFieldChange}
                    />
                </div>
                <div className="form-group col-md-6 mb-3">
                    <label>Enter receiver:</label>
                    <input
                        className="form-control"  
                        type="text" 
                        name="receiver" 
                        value={receiver || ""} 
                    onChange={onReceiverFieldChange}
                    />
                </div>
                <input className="btn btn-primary mb-4" type="submit" />
                </form>
            </div>
            <Footer/>
        </div>
        )
}
export default TransferPage;