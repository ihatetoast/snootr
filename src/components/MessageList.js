import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'Katy Cassidy',
    text: 'Hi. Where are we meeting for the dog walk?'
  },
  {
    senderId: 'Brooke Liddle',
    text: 'Oy! I have no idea. Was there an email?'
  },
  {
    senderId: 'Katy Cassidy',
    text: 'I think so.'
  },
  {
    senderId: 'Brooke Liddle',
    text: "I didn't get one."
  }
];

class MessageList extends Component {
  render() {
    return (
      <div>
        {DUMMY_DATA.map((msg, idx) => {
          return (
            <div className="msg-block" key={idx}>
              <div className="msg-name">{msg.senderId}:</div>
              <div className="msg-tetx">{msg.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
