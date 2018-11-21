import React, { Component } from 'react';

class RoomList extends Component {
   constructor(props) {
     super(props);
	   this.roomsRef = this.props.firebase.database().ref('_rooms');
     this.state = {
  	 rooms: [],
	   newRoomName: '',
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
	  this.setState({ newRoom: '' });
	}

	handleChange(e) {
	  this.setState( { newRoomName: e.target.value });
	}

	handleClick(room) {
	  this.props.setActiveRoom(room);
    console.log('CLICK');
	}

  deleteRoom(room) {
    const delete = this.state.room.filter((room, activeRoom)=> activeRoom !== room);
    this.setState({ room:room});
  }

  render() {
     return (
 			<div>
 			<h2 className="roomHeader">Rooms</h2>
     	<p className="roomList">{this.state.rooms.map((room) => (<button className="room-buttons" key={room.name} onClick={() => this.props.setActiveRoom(room)}>{room.name}</button>))}</p>
      <form className="newRooms" onSubmit={ (e) => this.createRoom(e) }>
  	         <input className="form-input" type="text" value={ this.state.newRoom } onChange={(e) => this.handleChange(e)} />
  	         <input className="create-button" type="submit"  value="Create New Room"/>
  	  </form>
 			</div>
 	  )
   }
 }

export default RoomList;
