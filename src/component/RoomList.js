import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props)
    this.state = {
      rooms: [],
      newRoom: '',
    };
    this.roomsRef = this.props.firebase.database().ref('_rooms');
  }

componentDidMount() {
 this.roomsRef.on('child_added', snapshot => {
   const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
      });
}

handleChange (e) {
  this.setState({newRoom: e.target.value});
}

roomCreation (e) {
  e.preventDefault();
  if (this.state.newRoom !== '') {
    this.roomsRef.push({
      name: this.state.newRoom
    });
    this.setState({newRoom:''});
  }
}

render() {
  return (
    <div className="chatRooms">

      <h3>Chat Rooms:</h3>
      {this.state.rooms.map((room) =>
        <div key={room.key}>{room.name}</div>
      )}

    <form className="newRooms" onSubmit={(e) => this.roomCreation(e)}>
      <input className="form-input" type="text" value={ this.state.newRoom } onChange={(e) => this.handleChange(e)} />
      <input className="create-button" type="submit" name="submit" value="Create"/>
    </form>

    </div>
  );
}
}
export default RoomList;
