import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axiosCalls/axiosCalls";
import { userContext } from "../../context/userContext";

import "../Login/Login.scss";

export default class Login extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  submit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/user/login", { ...this.state });

    if (data.code === "incorrect") return this.setState({ error: data.message });

    this.context.setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    window.location.replace("/");
  };

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={(e) => this.submit(e)} className="login__form">
          <h3 className="login__text">Login : </h3>

          <input
            type="email"
            placeholder="Email"
            className="login__input"
            name="email"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="login__input"
            name="password"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <button type="submit" className="login__button">Login</button>

          {this.state.err && <span>{this.state.err}</span>}

          <Link to="/register" className="login__link">Don't Have an account ?</Link>
        </form>
      </div>
    );
  }
}
