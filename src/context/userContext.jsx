import React, { Component, createContext } from "react";

export const userContext = createContext(null);

export default class UserContext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
    };
  }

  logout = () => {
    localStorage.removeItem("user");
    this.setState({ user: null });
  };

  render() {
    return (
      <userContext.Provider
        value={{
          user: this.state.user,
          setUser: (user) => this.setState({ user }),
          logout: this.logout,
        }}
      >
        {this.props.children}
      </userContext.Provider>
    );
  }
}

