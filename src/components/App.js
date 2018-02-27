import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import CocktailsPageContainer from '../containers/CocktailsPageContainer'
import Login from './Login'

class App extends Component {
  
  state = {
    loggedIn: false,
    currentUser: {}
  }
  
  handleSubmit = (event) => {
    //this should be a controlled input but I'm just tryna get this done
    event.preventDefault()
    let username = event.target.username.value
    let password = event.target.pass.value
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then(res => res.json()).then(json => {
      this.state.currentUser.name = json.name
      this.state.currentUser.id = json.id
      this.setState({loggedIn: true})
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Boozer</h2>
          <Link to='/cocktails'>See All Cocktails</Link>
          <Link to='/'>Home</Link>
          {this.state.loggedIn ? 'User: ' + this.state.currentUser.name : <Login handleSubmit={this.handleSubmit}/>}
        </div>
        <Route path="/cocktails" component={CocktailsPageContainer} />
      </div>
    );
  }
}

export default App;
