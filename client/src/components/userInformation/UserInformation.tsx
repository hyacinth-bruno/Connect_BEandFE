
import React, { useState, useEffect } from "react";
import axios from "axios";

type User = {
  email: string;
  firstName: string;
  image: string;
};

export default function UserInformation() {
  const [user, setUser] = useState<User>({
    email: "",
    firstName: "",
    image: "",
    
  });

  const url = "http://localhost:8000/users/1";

  function fetchData() {
    axios
      .get(url)
      .then((res) => res.data)
      .then(({ email, firstName, image }) =>
        setUser({ email, firstName, image })
      );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      <p>Email: {user.email}</p>
      <p>First Name: {user.firstName}</p>
      {/* <p>Image: <img src = {user.image} alt = {user.email}/></p> */}
    </div>
  );
}
