import React, { Component } from "react";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messagesRef = this.props.firebase.database().ref("message");

    this.state = {
      messages: [],
      newMessage: ""
    };
  }

  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  createMessage(e) {
    console.log("MESSAGE");
    e.preventDefault();
    this.messagesRef.push({
      content: this.state.newMessage,
      username: this.props.user ? this.props.user.displayName : "Guest: ",
      roomID: this.props.activeRoom.key,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({ newMessage: "" });
  }

  handleChange(e) {
    this.setState({ newMessage: e.target.value });
  }

  timeStamp() {
    this.messagesRef.push({
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
  }

  convertTimeStamp(milliseconds) {
    let d = new Date(milliseconds);
    let hour = d.getHours();
 		let min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
 		let sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();;
 		let time = hour + ':' + min + ':' + sec ;
 		return time;
  }

  sendMessageForm(activeRoom) {
     if (activeRoom.key) {
         return <form className="new-message" onSubmit={e => this.createMessage(e)}>
           <p className="title">
             New Message:
             <input
               type=" text"
               name="message"
               size="100"
               maxLength="150"
               value={this.state.newMessage}
               onChange={e => this.handleChange(e)}
             />
             <input
               className="send-button"
               type="submit"
               name="Send"
               value="Send"
             />
           </p>
         </form>
     } else {
         return <p> <em>Pick a room and start chatting!</em></p>
     }
 }


 render(){
   return (
     <div className="messages">
       <ul>
         {this.state.messages
           .filter(message => message.roomID === this.props.activeRoom.key)
           .map((message, index) => (
             <div key={index}>
               <strong>{message.username}</strong>
               {message.content} <br />
               {this.convertTimeStamp(message.sentAt)}
             </div>
           ))}
       </ul>
       <span>
         {sendMessageForm(this.props.activeRoom)}
       </span>

     </div>
  );
}
}


export default MessageList;
