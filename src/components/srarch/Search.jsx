import React from 'react'
import { Modal, Card } from "react-bootstrap";

const Search = ({ search, contacts, showSerch, hideModasearch }) => {
    return (
        <Modal
            show={showSerch}
            fullscreen={"md-down"}
            onHide={() => hideModasearch()}
        >
            <Modal.Header closeButton>
                <Modal.Title>Search Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    contacts.map(contact => {
                        if (contact.name === search[search.length - 1].word) {
                            return <Card className="text-center">
                                <Card.Header>Successful search</Card.Header>
                                <Card.Body>
                                    <Card.Title>{contact.name}</Card.Title>
                                    <Card.Text>
                                        {contact.tel}
                                    </Card.Text>
                                    <Card.Text>
                                        {contact.mob}
                                    </Card.Text>
                                    <Card.Text>
                                        {contact.address}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        }
                    })
                }
            </Modal.Body>
        </Modal >
    )
}

export default Search
