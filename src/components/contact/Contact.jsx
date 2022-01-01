import React from 'react'
import { Modal } from "react-bootstrap";
import Contactinput from '../contactinputform/Contactinput';

const Contact = ({ addContact, showContact, hideModalcontact }) => {
    return (
        <Modal
            show={showContact}
            fullscreen={"md-down"}
            onHide={() => hideModalcontact()}
        >
            <Modal.Header closeButton>
                <Modal.Title>New Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Contactinput
                    addContact={(id, name, address, email, tel, mob) => addContact(id, name, address, email, tel, mob)}
                />
            </Modal.Body>
        </Modal >
    )
}

export default Contact
