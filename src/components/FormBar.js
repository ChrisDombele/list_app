import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function FormBar({ setInputText, items, setItems, inputText }) {
  const inputTextHandler = (e) => {
    setInputText(e);
  };

  const submitItemHandler = (e) => {
    e.preventDefault();
    if (inputText === '') {
      alert('empty');
      return;
    }
    setItems([...items, { text: inputText, id: Math.random() * 1000 }]);
    setInputText('');
  };

  return (
    <>
      <Form className="align-items-center">
        <Form.Row>
          <Col xs="auto" className="my-1">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
              Item Name
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="Add Item..."
              value={inputText}
              type="text"
              onChange={(e) => inputTextHandler(e.target.value)}
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button className="mr-2" type="submit" onClick={submitItemHandler}>
              Submit
            </Button>
            <Button onClick={() => setItems([])}>Delete All</Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
}

export default FormBar;
