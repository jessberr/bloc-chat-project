import React, { Component } from 'react';

class RoomList extends Component {
   constructor(props) {
     super(props);
	   this.roomsRef = this.props.firebase.database().ref('_rooms');
     this.state = {
  	 rooms: [],
	   newRoomName: ''
     };
  }
	componentDidMount() {
	  this.roomsRef.on('child_added', snapshot => {
		const room = snapshot.val();
		room.key = snapshot.key;
		this.setState({ rooms: this.state.rooms.concat( room ) });
	   });
	}

	createRoom(e) {
	  e.preventDefault();
    this.roomsRef.push({ name: this.state.newRoomName });
	  this.setState({ newRoomName: '' });
	}

	handleChange(e) {
	  this.setState( { newRoomName: e.target.value });
	}

	handleClick(room) {
	  this.props.setActiveRoom(room);
    console.log('CLICK');
	}

 render() {
    return (
	<div className="chatRooms">
	  <h3>Chat Rooms:</h3>
	  <section className="room-list">
      {this.state.rooms.map((room) =>
	      <h3 key={room.key}
            onClick={(e) =>
            this.handleClick(room) } >
          {room.name} </h3>


	     )
	    }
	</section>

	  <form className="newRooms" onSubmit={ (e) => this.createRoom(e) }>
	         <input className="form-input" type="text" value={ this.state.newRoom } onChange={(e) => this.handleChange(e)} />
	         <input className="create-button" type="submit" name="submit" value="Create"/>
	  </form>

 </div>
    );
  }
}

export default RoomList;
