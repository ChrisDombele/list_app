import React from 'react';
import Todo from './Todo';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/App.css';

const TodoList = ({ items, setItems }) => {
  return (
    <>
      <ListGroup className="lgw my-3">
        {items.map((item) => (
          <ListGroup.Item key={item.id} className="">
            <Todo
              item={item}
              items={items}
              setItems={setItems}
              text={item.text}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TodoList;
