import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
	    super(props);
	   this.messagesRef = this.props.firebase.database().ref('message');

	this.state = {
	   messages: [
       { username: " " },
	     { content:  " " },
	     { sentAt: " " },
       { roomID: " " }
	   ],
	  roomMessages: []
	};
     }

	componentDidMount() {
	  this.messagesRef.on('child_added', snapshot => {
		const message = snapshot.val();
		message.key = snapshot.key;
		this.setState({ messages: this.state.messages.concat( message ) });
	   });
	}



	filterRoom(message) {
	  return (message.roomID === this.props.activeRoom.key);
	}

      render() {
         return (
	        <div className="messages" filterRoom={() => this.filterRoom() } >

          {this.state.messages.filter(this.filterRoom.bind(this)).map( (message) =>
	          <span key={message.key}>
                  {message.username}
                  {message.content}

            </span>

		   ) }
	    </div>
   );
  }
 }

export default MessageList;
