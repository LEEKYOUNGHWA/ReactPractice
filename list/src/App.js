import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainList from './component/MainList';
import Form from './component/Form';
import List from './component/List';

function App() {
  return (
    <div className="App">
      <MainList/>
      <Form/>
      <List/>
    </div>
  );
}

export default App;
