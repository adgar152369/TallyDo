import { useState } from 'react';
import Container from './components/Container/Container';
import UserInput from './components/Input/UserInput/UserInput';
import CreateList from './components/Lists/CreateList/CreateList';
import './App.css';
import cuteCat from './assets/cute-cat.png';


function App() {

  return (
    <Container>
      <img className='cat-image' src={cuteCat} alt="" />

      <UserInput />

      <CreateList />
    </Container>
  )
}

export default App;
