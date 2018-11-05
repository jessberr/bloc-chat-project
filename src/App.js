import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './component/RoomList';

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
          <nav id='navigation'>
            <Link to='/'>Chatterboxes</Link>
          </nav>
          <nav>
            <Link to='/rooms'>Rooms</Link>
          </nav>
        </header>

        <main className="App-body">
         <RoomList firebase= { firebase } />
        </main>


<hr></hr>

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
