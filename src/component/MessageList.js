import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {message:[] };
    this.messageRef = this.props.firebase.database().ref('message');
  }

  componentDidMount() {
    this.messageRef.on('child_added', snapshot => {
      const message = snapshot.val();
         message.key = snapshot.key;
         this.setState({ message: this.state.message.concat( message ) })
         });
  }

  render() {
    return (
    <section className="list-messages">

      <div className="room-messages">
      <h3>{this.props.activeRoomName}</h3>
        {this.state.message
            .filter((message) => this.props.activeRoom === message.roomId)
            .map((message, index) =>
              <p key={index} data-username={message.username} data-sent-at={message.sentAt}>
                {message.username}: {message.content}
              </p>
        )}
      </div>
    </section>
    );
  }
  }





export default MessageList;
