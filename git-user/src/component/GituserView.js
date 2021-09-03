import React, { useState } from "react";

export const GitUserView = () => {
  const [user, setUser] = useState(localStorage.getItem("login"));
  const [image, setImage] = useState(localStorage.getItem("avatar_url"));
  return (
    <>
      <h1>{user}</h1>
      <img src={image} />
    </>
  );
};
