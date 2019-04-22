import React, { Component } from "react";
import PropTypes from "prop-types";

import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      failedLogin: false,
      username: "",
      password: "",
    };
  }

  onSignInClickHandler = () => {
    if (this.state.username !== "username" && this.state.password !== "password") {
      this.setState({
        failedLogin: true,
      });
    } else {
      this.props.history.push("/products");
    }
  }

  onInputChangeHandler = (event) => {
    if (event.target.dataset.id) {
      const dataId = event.target.dataset.id;
      if (dataId === "username") {
        this.setState({
          username: event.target.value,
          failedLogin: false,
        });
      } else {
        this.setState({
          password: event.target.value,
          failedLogin: false,
        });
      }
    }
  }

  renderFailedLogin = () => (this.state.failedLogin ? <p>Bad username or password, please try again</p> : null)

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Please login with username/password to continue
          </p>
          {this.renderFailedLogin()}
          <input
            data-test-id="inputUsername"
            data-id="username"
            onChange={this.onInputChangeHandler}
            type="text"
            placeholder="Username"
            className="loginInput"
          />
          <input
            data-test-id="inputPassword"
            data-id="password"
            type="password"
            placeholder="Password"
            className="loginInput"
          />
          <button
            type="button"
            data-test-id="btnLogin"
            onClick={this.onSignInClickHandler}
            className="signInButton"
          >
Sign in
          </button>
        </header>
      </div>
    );
  }
}

export default LoginPage;

LoginPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
