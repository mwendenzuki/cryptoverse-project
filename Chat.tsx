import React, {useCallback, useEffect, useState} from 'react';
import ChatWidget from "react-styled-chat-widget";
import {Message, MessageSendHandler, SendClickHandler} from "react-styled-chat-widget";
import Loader from './Loader';

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, []);

  const onMessageSend = useCallback<MessageSendHandler>((currentID, setDeliveryStatus) => {
    setDeliveryStatus();
  }, []);

  const onSendClick = useCallback<SendClickHandler>((message: string) => {
    setMessages((messages) => {
      return [
        ...messages,
        {id: Math.floor(Math.random() * 10000), isPrimary: true, date: new Date(), sent: true, message, author: 'You'},
      ]
    })
  }, []);


  return (
    <ChatWidget
      defaultPosition={'bottomRight'}
      messages={messages} 
      loading={loading} 
      onMessageSend={onMessageSend} 
      onSendClick={onSendClick} 
      loader={<Loader />}
    >
      <div>
        <p>Welcome!</p>
        <hr/>
        <p>Here you can chat directly with other users. </p>
      </div>
    </ChatWidget>
  );
}

export default Chat;