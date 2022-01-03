import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Container } from "react-bootstrap";

import Navapp from './components/nav/Nav'
import './App.css';
import Showtask from "./components/showtask/Showtask";
import CurrentDate from "./components/Currentdate/CurrentDate";
import Showcontact from "./components/showcontact/Showcontact";
import Footer from "./components/fotter/Footer";
import useLocalStorage from "./components/locaStorage/useLocalStorag";
import Search from "./components/srarch/Search";

function App() {

  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const addTask = (id, title, person, estimateDo, description, date) => {
    setTasks([...tasks,
    {
      id: id,
      title: title,
      person: person,
      estimateDo: estimateDo,
      description: description,
      date: date,
    },
    ]);
  };
  const [contacts, setContacts] = useLocalStorage('contacts', []);
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
  const [showSerch, setshowSearch] = useState(false)

  const [search, setSearch] = useState([{ word: 'none' }])
  const inputWord = (word) => {
    setSearch([...search, { word: word }])
    if (search[search.length === 0 ? 0 : search.length - 1].word === word)
      setshowSearch(true)
  }




  const setTaskDone = (id) => {
    const editiedTodos = tasks.filter(element => element.id !== id);
    setTasks(editiedTodos);
  };
  return (
    <>
      <Navapp
        contacts={contacts}
        addTask={(id, title, person, estimateDo, description, date) => addTask(id, title, person, estimateDo, description, date)}
        addContact={(id, name, address, email, tel, mob) => addContact(id, name, address, email, tel, mob)}
        inputWord={(word) => inputWord(word)}
      />
      <br></br>
      <Container style={{ overflow: 'auto', height: '80vh' }} >
        <Card className="text-center"  >
          <Card.Header bg='success' >
            <h3>  <CurrentDate /></h3>

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
        <Search
          search={search}
          contacts={contacts}
          showSerch={showSerch}
          hideModasearch={() => setshowSearch(false)}
        />
      </Container>
      <Footer />
    </>

  );
}

export default App;
