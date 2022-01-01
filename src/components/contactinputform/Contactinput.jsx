import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const Contactinput = ({ addContact }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [mob, setMob] = useState("");
    return (
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Form.Label>Tel</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Tel"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                />
                <Form.Label>Mob</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Mob"
                    value={mob}
                    onChange={(event) => setMob(event.target.value)}
                />
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter E-mail"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                onClick={(event) => {
                    event.preventDefault();
                    addContact(uuidv4(), name, address, email, tel, mob);
                }}
            >
                Save
            </Button>
        </Form>
    )
}

export default Contactinput
