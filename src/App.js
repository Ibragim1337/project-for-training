import './styles/counter.css'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () =>{
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик</h2>
        <h1>{count}</h1>
        <button className='minus' onClick={onClickMinus}>minus</button>
        <button className='plus' onClick={onClickPlus}>plus</button>
      </div>
    </div>
  );
}

export default App;
