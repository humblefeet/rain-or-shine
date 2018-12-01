import React, { Component } from "react";
import "../../pages/App/App.css";
import { Link } from "react-router-dom";
import "./Nav.css";

class NavButton extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        {/* <button>Show menu</button> */}
        <i onClick={this.showMenu} className="material-icons NavButton">
          menu
        </i>
        {this.state.showMenu ? (
          <div className="menu">
            <Link to="/signin">Sign In</Link>
            <Link to="/weather">Weather</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/recommendations/:id">Recommendation Detail</Link>
            <Link to="/">Log Out</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default NavButton;
