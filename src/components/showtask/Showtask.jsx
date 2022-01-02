import { React } from 'react'
import { Card, Row, Col, Button } from "react-bootstrap";

const Showtask = ({ tasks, setTaskDone }) => {
    console.log(new Date());
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    const sortTasks = tasks.sort((a, b) => {
        if (a.estimateDo > b.estimateDo) { return 1 }
        else { return -1 };
    })
    return (
        <Row xs={1} md={4} className="g-3">
            {sortTasks.map((element) => (
                <Col id={element.id}>
                    <Card bg={element.estimateDo <= today ? 'warning' : 'light'}>
                        <Card.Body style={{ overflow: 'auto', height: '150px' }}>
                            <Card.Title>{element.title} with {element.person}</Card.Title>

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
