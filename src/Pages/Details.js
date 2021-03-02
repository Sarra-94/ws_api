import React from "react";
import UserDetails from "../Components/UserDetails";

const Details = (props) => {
  return (
    <div>
      <UserDetails {...props} />
    </div>
  );
};

export default Details;
