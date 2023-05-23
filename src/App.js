import logo from './logo.svg';
import './App.css';
import React from 'react';
import Heading from './Heading';
import Slot from './Slot';

const App = () => {
  return <>
    <Heading />
    <div className='slot_div'>
      <Slot
        x={'😍'}
        y={'😍'}
        z={'😍'}
      />
      <Slot
        x={'🍎'}
        y={'🍎'}
        z={'💕'}
      />
      <Slot
        y={'👩‍❤️‍👩'}
        z={'👩‍❤️‍👩'}
        x={'👩‍❤️‍👩'}
      />
      <Slot
        x={'😒'}
        y={'😁'}
        z={'😁'}
      />
    </div>
  </>;
}

export default App;
