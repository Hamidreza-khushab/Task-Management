import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Taskinput = ({ addTask, contacts }) => {
    const [title, setTitle] = useState("");
    const [estimateDo, setEstimateDo] = useState("");
    const [description, setDescription] = useState("");
    const getInitialState = () => {
        const value = "";
        return value;
    };
    const [person, setPerson] = useState(getInitialState);
    const handleChange = (e) => {
        setPerson(e.target.value);
    };
    return (
        <>
            <FloatingLabel controlId="floatingSelect" label="Works with selects">
                <Form.Select aria-label="Floating label select example" onChange={handleChange} >
                    <option value="" >none</option>
                    {
                        contacts.map((element, index) => {
                            return <option value={element.name}>{element.name}</option>
                        })
                    }

                </Form.Select>
            </FloatingLabel>
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
                        addTask(uuidv4(), title, person, estimateDo, description, new Date());
                    }}
                >
                    Save
                </Button>
            </Form>
        </>
    )
}

export default Taskinput
