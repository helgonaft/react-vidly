import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    console.log(result);
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    // stop submittig the form which causes full page reload
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // call the server
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is requiered";
    }

    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            error={errors.password}
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
