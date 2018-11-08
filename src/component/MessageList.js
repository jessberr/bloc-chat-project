import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = { message: [ ] };
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
      <h3>Messages will show here</h3>
      </div>
    </section>
    );
  }
  }
export default MessageList;
