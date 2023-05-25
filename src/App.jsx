import React, { useState } from 'react';
import Container from './components/Container/Container';
import UserInput from './components/Input/UserInput/UserInput';
import CreateList from './components/Lists/CreateList/CreateList';
import QuickList from './components/Lists/QuickList/QuickList';
import cuteCat from './assets/cute-cat.png';
import './App.css';


function App() {

  const [quickList, setQuickList] = useState(['Bread', 'Coffee', 'Honey', 'Some Diapers']);

  function handleAddToQuickList(newQuickItem) {
    setQuickList([...quickList, newQuickItem]);
  }

  function deleteFromQuickList(index) {
    setQuickList(prev => prev.filter((item, i) => i !== index));
  }

  return (
    <Container>
      <img className='cat-image' src={cuteCat} alt="" />

      <UserInput onSetQuickList={handleAddToQuickList} />

      <QuickList list={quickList} />
    </Container>
  )
}

export default App;
