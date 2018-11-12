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
	     if (this.props.user) {
		this.props.setUser(user);
		} else {
		    this.props.setUser(this.props.guest)
            }
    });
  }

render() {
  return(
  <div>

    <button onClick={() =>this.signInWithPopup()}>Sign In</button>
    <button onClick={() => this.props.auth().signOut()}>Sign Out</button>
  </div>
  )
}

}

export default User;
