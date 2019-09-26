import React from 'react'

const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleLogin}>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  )
}

export default LoginForm
