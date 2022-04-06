import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axiosCalls/axiosCalls";
import { userContext } from "../../context/userContext";

import "./Register.scss";

export default class Login extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      error: "",
    };
  }

  submit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/user/register", { ...this.state });

    if (data.code === "exist") return this.setState({ error: data.message });

    this.context.setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    window.location.replace("/");
  };

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signup">
        <form onSubmit={(e) => this.submit(e)}>
          <h3>Register : </h3>

          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <button type="submit">Register</button>

          {this.state.err && <span>{this.state.err}</span>}

          <Link to="/login">Already Have an account ?</Link>
        </form>
      </div>
    );
  }
}
