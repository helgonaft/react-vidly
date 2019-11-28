import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  //username = React.createRef();

  componentDidMount() {
    //this.username.current.focus();
  }

  handleSubmit = e => {
    // stop submittig the form which causes full page reload
    e.preventDefault();
    // call the server
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  state = { account: { username: "", password: "" } };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
