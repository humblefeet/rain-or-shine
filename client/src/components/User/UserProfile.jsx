import React from 'react';
import './UserProfile.css';

class UserProfile extends React.Component  {
  render(){
  return (
    <div className="User-profile">
      <p>Hello, {this.props.user.name}!</p>
      <a onClick={this.props.logout}>Log Out!</a>
    </div>
  )
  }
}
export default UserProfile