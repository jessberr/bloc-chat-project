import React, { Component } from 'react';

class User extends Component {

  signInWithPopup(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(){
    this.props.firebase.auth().signOut();
  }

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

render() {
  return(

  <div>
    <div className="display-user-name">Welcome <strong className="specific-user">{ this.props.user ? this.props.user.displayName : "Guest" }!</strong></div>
    <button className="login-button" onClick={() =>this.signInWithPopup()}>Login</button>
    <button className="log-out-button" onClick={() => this.props.firebase.auth().signOut()}>Logout</button>
  </div>
  )
}

}

export default User;
