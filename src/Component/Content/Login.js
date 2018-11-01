import React, { Component } from 'react';
import firebase from 'firebase'
import fire from '../../Utils/firebase'

class Login extends Component {

  constructor(props) {
      super(props);
      this.login = this.login.bind(this)
      this.signup = this.signup.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
          email: '',
          password: '',
      }
  }
  
  login(e) {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {}).catch((error) => {
          console.log(error)
      })      
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {}).catch((error) => {
        console.log(error)
    })      
  }

  handleChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
        <form>
            <div className='form-group'>
                <label>Email Address</label>
                <input 
                    value={this.state.email} onChange={this.handleChange} 
                    type='email' name='email' className='form-control'
                    id='inputEmail' placeholder='Enter email' />                
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input 
                    value={this.state.password} onChange={this.handleChange} 
                    type='password' name='password' className='form-control'
                    id='inputPassword' placeholder='Enter password' />                
            </div>

            <button type='submit' onClick={this.login} className='btnLogin'>Login</button>
            <button type='submit' onClick={this.signup} className='btnLogin'>SignUp</button>
        </form>
    );
  }
}

export default Login;