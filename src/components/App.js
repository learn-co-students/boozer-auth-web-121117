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
    this.setState({
      loggedIn: true,
      username: event.target[0].value.toUpperCase()
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
