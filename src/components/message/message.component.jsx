import React from "react";
import "./message.styles.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <Card className={`${isUser ? "message__user" : ""} message__card`}>
      <CardContent>
        <Typography variant="h5">{message.message}</Typography>
        <Typography color="textSecondary">{message.username}</Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
