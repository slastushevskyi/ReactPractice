import React, { useState } from "react";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  const [value, setValue] = useState("Enter your text here");

  return (
    <>
      <h1>Hello React!</h1>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
