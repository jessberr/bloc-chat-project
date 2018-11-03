import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props)
    this.state = {
      rooms: []
    };
  }

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
       console.log(snapshot);
     });
}


  render () {
    return (
      <div >
        <h1> Rooms </h1>
      </div>
    );
  }
}
export default RoomList;
