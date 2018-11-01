import React, { Component } from 'react';
import firebase from 'firebase'
import fire from '../../Utils/firebase'

import Content from '../Content/Content'
import Login from '../Content/Login'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if( user ) {
        this.setState({ user });
      } else {
        this.setState({user: null});
      }
    })
  }



  render() {
    return (
      <div>
        {
          this.state.user ? (<Content />) : (<Login/>)
        }
      </div>
    );
  }
}

export default App;
