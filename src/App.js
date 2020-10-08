import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./components/message/message.component";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Chaitu", text: "Hey Guys!" },
    { username: "Krishna", text: "Hi Chaitu :)" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    // logic to send the message
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form action="">
        <FormControl>
          <InputLabel htmlFor="send-message">Enter a message...</InputLabel>
          <Input
            id="send-message"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
