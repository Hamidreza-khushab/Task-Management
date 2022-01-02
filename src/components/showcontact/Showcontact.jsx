import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

const Showcontact = ({ contacts }) => {
    const sortContacts = contacts.sort((a, b) => {
        if (a.name > b.name) { return 1 }
        else { return -1 };
    })
    return (
        <Row xs={1} md={4} className="g-3">
            {sortContacts.map((element) => (
                <Col id={element.id}>
                    <Card bg='success'>
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>
                                <label>Tel:</label>
                                {element.tel}
                            </Card.Text>
                            <Card.Text>
                                <label>Mob:</label>
                                {element.mob}
                            </Card.Text>
                            <Card.Text>
                                <label>Email:</label>
                                {element.email}
                            </Card.Text>
                            <Card.Text>
                                <label>Address:</label>
                                {element.address}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Showcontact
