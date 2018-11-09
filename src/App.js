import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './component/RoomList';
import MessageList from './component/MessageList';


var config = {
  apiKey: "AIzaSyB1gntTp8UUUMZngTL_x2N3hQexpZLh8Pg",
  authDomain: "bloc-chat-app-9aa67.firebaseapp.com",
  databaseURL: "https://bloc-chat-app-9aa67.firebaseio.com",
  projectId: "bloc-chat-app-9aa67",
  storageBucket: "bloc-chat-app-9aa67.appspot.com",
  messagingSenderId: "250045315924"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
	    activeRoom: [
	      { name: '' },
	      { key: '' }
	    ],
  	isActive: true,

   };
 }

setActiveRoom(room) {
  this.setState({ activeRoom: room, isActive: true });
 }

  render() {
    return (
      <div className="App">
          <header className="App-header">
             <h1>Bloc ChatterBoxes</h1>
           </header>
      <main className="App-body">
        <aside className="Room-list">
           <RoomList
             firebase={firebase}
             isActive={this.state.isActive}
             setActiveRoom={this.setActiveRoom.bind(this)}
             activeRoom={this.state.activeRoom}
             createRoom={(e) => this.createRoom(e)}
             handleChange={(e) => this.handleChange}
             handleClick={(e) => this.handleClick(e)}
             roomMessages={this.state.roomMessages}
           />
         </aside>
         <div className="list-messages">
           <MessageList
             firebase={firebase}
             isActive={this.state.isActive}
             activeRoom={this.state.activeRoom}
             messages={this.state.message}
           />
         </div>
      </main>

      <footer className="App-footer">
        <h6>Copyright Jess Berrett</h6>
      </footer>

      </div>
    );
  }
}


export default App;
