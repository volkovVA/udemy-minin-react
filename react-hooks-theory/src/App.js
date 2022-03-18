import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("Value changed", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    clear,
  };
}

function App() {
  const input = useInput("");

  useLogger(input.value);

  return (
    <div className="container pt-3">
      <input
        type="text"
        // value={input.value}
        // onChange={input.onChange}
        {...input.bind}
        className="m-1"
      />
      <button className="btn btn-success" onClick={() => input.clear()}>
        Очистить
      </button>
      <hr />
      <h1>{input.bind.value}</h1>
    </div>
  );
}

export default App;
