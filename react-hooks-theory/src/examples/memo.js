import React, { useState, useMemo, useEffect } from 'react';

function complexCompute(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? 'red' : 'black'
    }
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log('Styles changed');
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className="btn btn-success m-1"
        onClick={() => setNumber(prev => prev + 1)}
      >
        Добавить
      </button>
      <button
        className="btn btn-danger m-1"
        onClick={() => setNumber(prev => prev - 1)}
      >
        Убрать
      </button>
      <button
        className="btn btn-warning m-1"
        onClick={() => setColored(prev => !prev)}
      >
        Изменить
      </button>
    </div>
  );
}

export default App;