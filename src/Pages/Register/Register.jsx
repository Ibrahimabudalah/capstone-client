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
        <form onSubmit={(e) => this.submit(e)} className="signup__form">
          <h3 className="signup__text">Register : </h3>

          <input
            type="text"
            placeholder="Fullname"
            className="signup__input"
            name="fullname"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="signup__input"
            name="email"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="signup__input"
            name="password"
            onChange={({ target: { value, name } }) =>
              this.handleChange(value, name)
            }
            required
          />

          <button type="submit" className="signup__button">Register</button>

          {this.state.err && <span>{this.state.err}</span>}

          <Link to="/login" className="signup__link">Already Have an account ?</Link>
        </form>
      </div>
    );
  }
}
