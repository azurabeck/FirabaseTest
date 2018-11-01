import React, { Component } from 'react';
import fireInit from '../../Utils/firebase';
import firebase from 'firebase'

class Content extends Component {

  constructor() {
    super();    
    this.logout = this.logout.bind(this)
    this.state = {
      speed: 10
    };
  }

  //Conect RealTimeDataBase
  componentDidMount(){
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
  }

  logout() {
    fireInit.auth().signOut();
  }

  render() {
    return (

        <div>
          <h1>{this.state.speed}</h1>
          <button onClick={this.logout}>LogOut</button>
        </div>
    );
  }
}

export default Content;