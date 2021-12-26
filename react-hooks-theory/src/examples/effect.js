import React, { useState, useEffect } from 'react';

function App() {

  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPose] = useState({
    x: 0,
    y: 0
  })

  // useEffect(() => {
  //   console.log('Render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('Clean type');
    }
  }, [type])

  const mouseMoveHandler = e => {
    setPose({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount');

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>

      <button
        className="btn btn-success m-2"
        onClick={() => setType('users')}>
          Пользователи
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => setType('todos')}>
          Todos
      </button>
      <button
       className="btn btn-warning m-2"
       onClick={() => setType('posts')}>
          Посты
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;