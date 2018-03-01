import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import CocktailsPageContainer from '../containers/CocktailsPageContainer'
import Login from './Login'

const USERURL = 'http://localhost:3000/api/v1/login'

class App extends Component {

  state = {
    logged_in: false,
    user_info: {}
  }

  LogIn = (event) => {
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.password.value
    fetch(USERURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === "User Not Found") {
        this.setState({
          logged_in: false
        })
      } else {
        this.setState({
          user_info: data,
          logged_in: true
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Boozer</h2>
          <Link to='/cocktails'>See All Cocktails</Link>
          <Link to='/'>Home</Link>
          <br />
          {this.state.logged_in ? `Welcome Back, ${this.state.user_info.username}` : <Login handleLogin={this.LogIn}/>}
        </div>
        <Route path="/cocktails" component={CocktailsPageContainer} />
      </div>
    );
  }
}

export default App;
