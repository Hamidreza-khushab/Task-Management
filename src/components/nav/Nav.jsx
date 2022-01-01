import { React, useState } from 'react'
import { Navbar, Container, Button, Nav, Form, FormControl } from "react-bootstrap";
import Contact from '../contact/Contact';
import Task from '../task/Task'

const Navapp = ({ addTask, addContact }) => {
    const [showTask, setshowTask] = useState(false)
    const [showContact, setshowContact] = useState(false)
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Calender App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Button variant="info" className='m-1' onClick={() => setshowContact(true)}>New Contacts</Button>
                            <Button variant="info" className='m-1' onClick={() => setshowTask(true)}>New Tasks</Button>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <Task
                showTask={showTask}
                hideModaltask={() => setshowTask(false)}
                addTask={(id, title, estimateDo, description, date) => addTask(id, title, estimateDo, description, date)}
            />
            <Contact
                showContact={showContact}
                hideModalcontact={() => setshowContact(false)}
                addContact={(id, name, address, email, tel, mob) => addContact(id, name, address, email, tel, mob)}
            />
        </>
    )
}
export default Navapp
