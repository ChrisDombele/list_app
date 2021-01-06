import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/App.css';

const Todo = ({ text, items, setItems, item }) => {
  const deleteHandler = () => {
    setItems(items.filter((element) => element.id !== item.id));
  };

  return (
    <>
      {text}
      <div className="fr">
        <Button onClick={() => deleteHandler()}>remove</Button>
      </div>
    </>
  );
};

export default Todo;
