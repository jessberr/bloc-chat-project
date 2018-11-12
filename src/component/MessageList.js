import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
	    super(props);
	   this.messagesRef = this.props.firebase.database().ref('message');


	this.state = {
	   messages: [
       { username: " " },
	     { content:  " " },
	     { sentAt: " "},
       { roomID: " " },
    ],

	};
}

	componentDidMount() {
	  this.messagesRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) });
	   });
	}

  timeStamp() {
    this.messageRef.push({sentAt: this.props.firebase.database.ServerValue.TIMESTAMP });
  }

      render() {
         return (
	        <div className="messages">
            <ul>
              {this.state.messages.filter(message => message.roomID === this.props.activeRoom.key)
              .map((message, index)=>
              <div key= {index}>
               <strong>{message.username}</strong>
               {message.content} <br />
               { message.sentAt}
            </div>
        )}
      </ul>
	    </div>
   );
  }
 }

export default MessageList;
