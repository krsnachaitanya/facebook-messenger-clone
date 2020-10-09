import React, { useEffect, useState } from "react";
import "./App.css";
import { FormControl, Input, IconButton } from "@material-ui/core";
import Message from "./components/message/message.component";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/SendRounded";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
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
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            id="send-message"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <IconButton
            className="app__iconbutton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
