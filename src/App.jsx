import React, { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import UserInput from './components/Input/UserInput/UserInput';
import CreateList from './components/Lists/CreateList/CreateList';
import QuickList from './components/Lists/QuickList/QuickList';
import cuteCat from './assets/cute-cat.png';
import './App.css';


function App() {

  const [quickList, setQuickList] = useState(['Mow the lawn', 'Buy groceries']);
  const [itemInput, setItemInput] = useState('');
  const [editedItemInput, setEditedItemInput] = useState('');
  const [editedItemIndex, setEditedItemIndex] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);

  console.log(quickList)

  useEffect(() => {
    console.log(isEditing);
    if (isEditing) {
      const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
          setIsEditing(false);
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isEditing]);

  function handleAddToQuickList(newQuickItem) {
    setQuickList([...quickList, newQuickItem]);
  }

  function deleteFromQuickList(index) {
    setQuickList(prev => prev.filter((item, i) => i !== index));
  }

  function handleItemInputChange({ target }) {
    setItemInput(target.value);
  }

  function handleEditedItem(e, index, editedItem) {
    e.preventDefault();
    setEditedItemInput(editedItem);
    console.log(editedItem);

    for (let i = 0; i < quickList.length; i++) {
      if (i === index) {
        setEditedItemIndex(i);
      }
    }
  }

  return (
    <Container>
      <div className="input-container custom-lg:flex">
        <img className='cat-image' src={cuteCat} />
        <UserInput
          onSetQuickList={handleAddToQuickList} userItemInput={itemInput}
          onSetItemInput={setItemInput}
          onHandleItemInputChange={handleItemInputChange} />
      </div>

      <QuickList
        list={quickList}
        onDeleteItem={deleteFromQuickList}
        onHandleItemInputChange={handleItemInputChange}
        onHandleEditedItem={handleEditedItem}
        userEditedItem={editedItemInput}
        editedItemIndex={editedItemIndex}
        isEditing={isEditing}
        onSetIsEditing={setIsEditing} />
    </Container>
  )
}

export default App;
