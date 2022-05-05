import "./styles.css";
import React, { useState } from "react";
import Output from "./Output";

export default function App() {
  const [input, setInput] = useState(null);
  const [list, setList] = useState([]);
  const [misc, setMisc] = useState(false);

  const handleList = (evt) => {
    evt.preventDefault();
    list.length > 0 ? setInput(list.split(",")) : setInput(false);
  };

  const handleMisc = (evt) => {
    evt.preventDefault();
    setInput(misc);
  };

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <h2>Write a list or any thought</h2>
      <h3>Make sure to separate your list with commas</h3>
      <h2>
        <Output data={input} />
      </h2>
      <form onSubmit={handleList}>
        <label>
          List:{" "}
          <input
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={handleMisc}>
        <label>
          Anything else:{" "}
          <input
            type="text"
            value={misc}
            onChange={(e) => setMisc(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={(e) => setInput(false)}>Reset</button>
    </div>
  );
}
