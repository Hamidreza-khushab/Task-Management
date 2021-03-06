import { React, useState } from 'react'
import { Navbar, Container, Button, Nav, Form, FormControl } from "react-bootstrap";
import Contact from '../contact/Contact';
import Task from '../task/Task'

const Navapp = ({ addTask, addContact, contacts, inputWord }) => {
    const [showTask, setshowTask] = useState(false)
    const [showContact, setshowContact] = useState(false)
    const [word, setWord] = useState()

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
                                placeholder="Search Phone Book"
                                className="me-2"
                                aria-label="Search"
                                value={word}
                                onChange={(event) => setWord(event.target.value)}
                            />
                            <Button
                                variant="outline-dark"
                                onClick={(event) => {
                                    event.preventDefault();
                                    inputWord(word.trim())
                                }}
                            >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <Task
                showTask={showTask}
                contacts={contacts}
                hideModaltask={() => setshowTask(false)}
                addTask={(id, title, person, estimateDo, description, date) => addTask(id, title, person, estimateDo, description, date)}
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
