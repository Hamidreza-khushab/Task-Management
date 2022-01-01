import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Taskinput = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const [estimateDo, setEstimateDo] = useState("");
    const [description, setDescription] = useState("");
    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Title enter"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <Form.Label>Estimate the time to do</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="dd-mm-yyyy"
                    value={estimateDo}
                    onChange={(event) => setEstimateDo(event.target.value)}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description enter"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                onClick={(event) => {
                    event.preventDefault();
                    addTask(uuidv4(), title, estimateDo, description, new Date());
                }}
            >
                Save
            </Button>
        </Form>
    )
}

export default Taskinput
