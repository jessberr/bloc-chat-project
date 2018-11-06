import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {messages: []};
    this.messagesRef = this.props.firebase.database().ref('_messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
         message.key = snapshot.key;
         this.setState({ messages: this.state.messages.concat( message ) })
         });
  }

  render() {
    return (
    <section className="list-messages">
      <div className="pick-room">
        <h2>Pick a room and start chatting!</h2>
      </div>
      <div className="room-messages">
      </div>
    </section>
    );
  }
  }





export default MessageList;
