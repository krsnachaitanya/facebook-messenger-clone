import React, { forwardRef } from "react";
import "./message.styles.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Message = forwardRef(({ message, username, timeStamp }, ref) => {
  const isUser = username === message.username;
  return (
    <Card
      ref={ref}
      className={`${isUser ? "message__user" : ""} message__card`}
    >
      <CardContent>
        <Typography variant="h5">{message.message}</Typography>
        <Typography color="textSecondary">
          {!isUser && (message.username || "Unknown User")}
        </Typography>
      </CardContent>
    </Card>
  );
});

export default Message;
