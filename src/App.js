import React from 'react';
import Header from './Component/Header/index';
import Headline from './Component/Headline/index';
import './App.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

function App() {
  return (
    <div className="App">
      <Header />
      <Headline header="Ravikirana" desc="klsajkdja lkajsdlkjsajd lkjlkdsjkjasdj ljlkjdlkjsalkjdkjsa ljalksdjkjsakjd" tempArr={tempArr}/>
    </div>
  );
}

export default App;
