import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './component/RoomList';
import MessageList from './component/MessageList';

// Initialize Firebase
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
   this.state = {activeRoom: undefined, activeRoomName: undefined};
 }
  handleClickRoom(e) {
   this.setState({activeRoomKey: e.target.getAttribute('data-room-key'),
                  activeRoomName: e.target.getAttribute('data-room-name')});
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc ChatterBoxes</h1>
        </header>

        <main className="App-body">
           <sidebar className="Room-list">
             <RoomList activeRoom={this.state.activeRoomKey} handleClickRoom={(e) => this.handleClickRoom(e)} firebase={firebase} />
           </sidebar>

           <div className="Message-list">
             <MessageList activeRoomKey={this.state.activeRoomKey} activeRoomName={this.state.activeRoomName} firebase={firebase} />
           </div>
        </main>




     <div>
        <footer className="App-footer">
          <h6>Copyright Jess Berrett</h6>
        </footer>
      </div>
    </div>

    );
  }
}

export default App;
