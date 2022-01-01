import { React } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";

const Showtask = ({ tasks, setTaskDone }) => {
    return (
        <Row xs={1} md={4} className="g-3">
            {tasks.map((element) => (
                <Col id={element.id}>
                    <Card >
                        <Card.Body style={{ overflow: 'auto', height: '150px' }}>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text>
                                <label>Estimated end of work:</label>
                                {element.estimateDo}
                            </Card.Text>
                            <Card.Text>
                                {element.description}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => setTaskDone(element.id)}
                            >
                                End
                            </Button>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Showtask
