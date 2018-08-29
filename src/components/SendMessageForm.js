import React, { Component } from 'react';

class SendMsgForm extends Component {
  render() {
    return (
      <div className="msgForm">
        <form>
          <input type="text" placeholder="message ..." />
        </form>
      </div>
    );
  }
}
export default SendMsgForm;
