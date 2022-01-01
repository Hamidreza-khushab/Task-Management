import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

const Showcontact = ({ contacts }) => {
    return (
        <Row xs={1} md={4} className="g-3">
            {contacts.map((element) => (
                <Col id={element.id}>
                    <Card >
                        <Card.Body style={{ overflow: 'auto', height: '150px' }}>
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
                                <label>Email:</label>
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
