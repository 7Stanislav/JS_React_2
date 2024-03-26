import React from 'react';
import './Message.css'; // Импорт стилей

const Message = ({ text }) => {
  return (
    <div className="message">
      {text}
    </div>
  );
}

export default Message;
