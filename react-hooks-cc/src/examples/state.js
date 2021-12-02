import React, { useState} from 'react';

function computeInitialCounter() {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {

  const [ counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [ state, setState ] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  function increment() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
    setCounter(prevCounter => prevCounter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'Новое название'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик: { counter }</h1>
      <button
        className="btn btn-success"
        onClick={increment}>
          Добавить
      </button>
      <button
        className="btn btn-danger"
        onClick={decrement}>
          Убрать
      </button>
      <button
        className="btn btn-primary"
        onClick={updateTitle}>
          Изменить название
      </button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
}

export default App;