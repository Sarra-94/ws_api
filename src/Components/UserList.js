import React, { useEffect, useState } from "react";

import axios from "axios";

import User from "./User/User";

const UserList = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.error(err));
  }, []);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      {users ? users.map((el) => <User name="mourad" user={el} />) : "loading"}
    </div>
  );
};

export default UserList;
