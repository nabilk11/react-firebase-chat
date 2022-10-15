import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container">
      <h1 className="logo">carolina🔥chat</h1>
      <div className="wrapper">
        <big>register here</big>
        <form action="" method="">
          <input type="text" placeholder="username" />
          <input type="email" placeholder="meow@meow.com" />
          <input type="password" placeholder="password" />
          <input type="file" />

          <button type="submit">register</button>
        </form>
        <p>already have an account? <Link to={"/login"}>login here!</Link> </p>
      </div>
    </div>
  );
};
