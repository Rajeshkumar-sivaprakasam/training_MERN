import { Typography } from "@material-ui/core";
import React, { useState } from "react";

export const GitUserView = () => {
  const [user, setUser] = useState(localStorage.getItem("login"));
  const [image, setImage] = useState(localStorage.getItem("avatar_url"));
  return (
    <>
      <h1>{user}</h1>
      <img src={image} alt="Avatar" style={{ borderRadius: "50%" }} />
      <Typography
        variant="body1"
        style={{ textAlign: "center", marginTop: 30 }}
      >
        This is the profile image of {user} and he is the one of a collabrator
        in GitHub{" "}
      </Typography>
    </>
  );
};
