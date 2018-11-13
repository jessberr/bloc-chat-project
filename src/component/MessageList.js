import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
	    super(props);
	   this.messagesRef = this.props.firebase.database().ref('message');


	this.state = {
	   messages: [
       { username: this.props.user},
	     { content:  " " },
	     { sentAt: " "},
       { roomID: " " },
    ],
    newMessage:''

	};
}

	componentDidMount() {
	  this.messagesRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) });
	   });
	}

  createMessage(e) {
    console.log('MESSAGE');
    e.preventDefault();
    this.messagesRef.push({ name: this.state.newMessage });
	  this.setState({ newMessage: '' });
  }

  handleChange(e) {
	  this.setState( { newMessage: e.target.value });
	}

  timeStamp() {
    this.messagesRef.push({sentAt: this.props.firebase.database.ServerValue.TIMESTAMP });
  }

      render() {
         return (
	        <div className="messages">
          <div className="Message-box-captions">
          <h2 className="Messages-instructions">Pick a room and start some chatter!</h2>
          </div>
            <ul>
              {this.state.messages.filter(message => message.roomID === this.props.activeRoom.key)
              .map((message, index)=>
              <div key= {index}>
               <strong>{message.username}</strong>
               {message.content} <br />
               {message.sentAt}
            </div>
        )}
      </ul>

      <div className="new-message-area">

        <form className="new-message">
          <p className="title">New Message:
            <input type="text" name="message" size="100" maxlength="150" />
            <input type="submit" name="Send" value="Send" />
          </p>
        </form>
      </div>
   </div>
   );
  }
 }

export default MessageList;
