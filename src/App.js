import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["sadfs", "asdfsdf", "dsfgdgas"]);

  console.log(messages);

  const sendMessage = (event) => {
    // logic to send the message
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        action=""
      >
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
