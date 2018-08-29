import React, { Component } from 'react';

class NewChannelForm extends Component {
  render() {
    return (
      <div className="channelForm">
        <form>
          <input type="text" placeholder="channel name" required />
          <button id="createChannelBtn" type="submit">
            ➕
          </button>
        </form>
      </div>
    );
  }
}
export default NewChannelForm;
