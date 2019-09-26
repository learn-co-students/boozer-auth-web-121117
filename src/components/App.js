import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import CocktailsPageContainer from '../containers/CocktailsPageContainer'
import LoginForm from './LoginForm'

class App extends Component {
  state = {
    loggedIn: false,
    username: ""
  }

  handleLogin = (event) => {
    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value
    fetch("http://localhost:3000/api/v1/sessions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(res => res.json()).then(json => {
        this.setState({
          loggedIn: true,
          username: username
        })
      })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Boozer {this.state.username}</h2>
          {this.state.loggedIn ? null : <LoginForm handleLogin={this.handleLogin}/>}
          <Link to='/'>Home</Link><br/>
          <Link to='/cocktails'>See All Cocktails</Link>
        </div>
        <Route path="/cocktails" component={CocktailsPageContainer} />
      </div>
    );
  }
}

export default App;
