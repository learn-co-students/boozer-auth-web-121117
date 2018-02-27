import React from 'react';

const Login = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input name="username" type="text" placeholder="login username" />
    <input name="pass" type="password" placeholder="login password" />
    <input type="submit"/>
  </form>
);

export default Login;
