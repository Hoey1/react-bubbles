import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const history = useHistory("");

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCreds({ ...creds, [name]: value });
  };
  // make a post request to retrieve a token from the api

  const onLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/login", creds)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        history.push("/bubbles-page");
      })
      .catch((err) => {
        console.log("there was an error with your credentials ->", err);
      });
  };

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={onChange}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={onChange}
          name="password"
        />
        <button onClick={onLogin}>Go!</button>
      </form>
    </>
  );
};
export default Login;
