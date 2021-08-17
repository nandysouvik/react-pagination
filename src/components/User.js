import React from 'react';
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <hr />
      <div className="userDetails">
        <div className="userInfo">
          <p>{`Full Name: ${user.name.first} ${user.name.last}`}</p>
          <p>{`Phone: ${user.phone}`}</p>
          <p>{`Address: ${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.country}`}</p>
        </div>
        <div className="userLogo">
          <img src={`${user.picture.large}`} alt="" />
        </div>
      </div>

    </div>
  )
}

export default User
