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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bloc ChatterBoxes</h1>
        </header>

        <main className="App-body">
           <sidebar className="Room-list">
             <RoomList firebase= { firebase } />
           </sidebar>

           <div className="Message-list">
             <MessageList firebase= { firebase } />
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
