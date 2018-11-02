import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RoomList from './component/RoomList';
import * as firebase from 'firebase';

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
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/rooms'>Rooms</Link>
          </nav>
          <h1>Chatterboxes</h1>
        </header>


        <main className="App-body">
          <Route path="/room" component={ RoomList }> Rooms />
        </main>

        <footer className="App-footer">
          <h6>Copyright Jess Berrett</h6>
        </footer>
      </div>

    );
  }
}

export default App;
