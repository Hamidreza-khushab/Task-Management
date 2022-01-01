import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";

import Navapp from './components/nav/Nav'
import './App.css';
import Showtask from "./components/showtask/Showtask";
import CurrentDate from "./components/Currentdate/CurrentDate";
import Showcontact from "./components/showcontact/Showcontact";

function App() {

  const [tasks, setTasks] = useState([]);
  const addTask = (id, title, estimateDo, description, date) => {
    setTasks([
      {
        id: id,
        title: title,
        estimateDo: estimateDo,
        description: description,
        date: date,
      }, ...tasks
    ]);
  };
  const [contacts, setContacts] = useState([]);
  const addContact = (id, name, address, email, tel, mob) => {
    setContacts([
      ...contacts,
      {
        id: id,
        name: name,
        address: address,
        email: email,
        tel: tel,
        mob: mob,
      },
    ]);
  };
  const setTaskDone = (id) => {
    const editiedTodos = tasks.filter(element => element.id !== id);
    setTasks(editiedTodos);
  };
  return (
    <>
      <Navapp
        addTask={(id, title, estimateDo, description, date) => addTask(id, title, estimateDo, description, date)}
        addContact={(id, name, address, email, tel, mob) => addContact(id, name, address, email, tel, mob)}
      />
      <br></br>
      <Container>
        <Card className="text-center"  >
          <Card.Header bg='success' >
            <CurrentDate />
          </Card.Header>
          <Card.Body style={{ overflow: 'auto', height: '32vh' }}>
            <Card.Text>
              <Showtask
                tasks={tasks}
                setTaskDone={(id) => setTaskDone(id)}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <Card className="text-center" >
          <Card.Header>
            <h3>Phone Book</h3>
          </Card.Header>
          <Card.Body style={{ overflow: 'auto', height: '32vh' }}>
            <Card.Text>
              <Showcontact
                contacts={contacts}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>

  );
}

export default App;
