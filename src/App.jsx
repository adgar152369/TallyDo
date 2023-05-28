import React, { useState } from 'react';
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

  function handleAddToQuickList(newQuickItem) {
    setQuickList([...quickList, newQuickItem]);
  }

  function deleteFromQuickList(index) {
    setQuickList(prev => prev.filter((item, i) => i !== index));
  }

  function handleItemInputChange({ target }) {
    setItemInput(target.value);
  }

  function handleEditedItem(e) {
    setEditedItemInput(e.target.value);
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
        userEditedItem={editedItemInput}/>
    </Container>
  )
}

export default App;
