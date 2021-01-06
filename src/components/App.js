import { useState, useEffect } from 'react';
import '../css/App.css';
import FormBar from './FormBar.js';
import TodoList from './TodoList.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  //run once when the app starts
  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    //save to local storage
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const getLocalStorage = () => {
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify([]));
    } else {
      let itemsLocal = JSON.parse(localStorage.getItem('items'));
      setItems(itemsLocal);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">List</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <FormBar
              setInputText={setInputText}
              inputText={inputText}
              setItems={setItems}
              items={items}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <TodoList items={items} setItems={setItems} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
