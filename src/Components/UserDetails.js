import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetails = ({ match }) => {
  // const {match}=props
  //   const x = props.match.params.id;
  const { id } = match.params;
  const [user, setUser] = useState(null);
  //   when the component mount we are going to fetch the data
  // using axios=>get
  //
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response));
  }, [id]);

  return (
    <div>
      {user ? (
        <h2>{user.name}</h2>
      ) : (
        <img
          src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          alt="spinner"
        />
      )}
    </div>
  );
};

export default UserDetails;
