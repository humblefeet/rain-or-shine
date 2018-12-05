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

  closeMenu(event) {
    event.preventDefault();
    // if (!this.dropdownMenu.contains(event.target)) {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
    // }
  }

  render() {
    return (
      <div>
        <i onClick={this.showMenu} className="material-icons NavButton">
          menu
        </i>
        <div className="dropdown">
          {this.state.showMenu ? (
            <div
              ref={element => {
                this.dropdownMenu = element;
              }}
            >
              <Link to="/favorites">
                <div className="dropdown-links">Favorites</div>
              </Link>
              <Link to="/recommendations">
                <div className="dropdown-links">Recommendations</div>
              </Link>
              <span onClick={this.props.logout}><h6>Log Out</h6> </span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default NavButton;
