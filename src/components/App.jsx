import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [updatedName, setUpdatedName] = useState("");

  function handlevent(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function submit(event) {
    setUpdatedName(name);
  }

  return (
    <div className="container">
      <h1>Hello {updatedName} </h1>
      <input
        onChange={handlevent}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
