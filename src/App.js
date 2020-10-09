import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./components/message/message.component";
import firebase from "firebase";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    // logic to send the message
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
