import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  return (
    <div className="card">
      <img
        src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no"
        alt="Person"
        className="card__image"
      />
      <p className="card__name">{user.name + " " + user.username}</p>
      <div className="grid-child-followers">{user.email}</div>{" "}
      <Link to={`/details/${user.id}`}>
        <button className="btn draw-border">Details</button>
      </Link>
    </div>
  );
};

export default User;
