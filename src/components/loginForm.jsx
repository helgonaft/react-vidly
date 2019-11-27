import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  componentDidMount() {
    this.username.current.focus();
  }

  handleSubmit = e => {
    // stop submittig the form which causes full page reload
    e.preventDefault();
    // call the server
  };
  state = {};
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              ref={this.username}
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;