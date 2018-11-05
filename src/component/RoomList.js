import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props)
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('_rooms');

  }

componentDidMount() {
 //console.log('FIREBASE', this.props.firebase.database);
 this.roomsRef.on('child_added', snapshot => {
   const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
      });
}


render() {
  return (
    <div className="chatRooms">
      <h3>Chat Rooms</h3>
      {this.state.rooms.map((room) =>
        <div key={room.key}>{room.name}</div>
      )}
    </div>
  );
}
}
export default RoomList;
