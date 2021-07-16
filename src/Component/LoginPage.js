import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="Login">
        <h3>Login Form</h3>
        <form >
          <label>
            UserName:
            <input
              type="email"
              placeholder="Here type your UserName"
              value={username}
              onChange={(e) => SetUsername(e.target.value)}
              maxLength="12"
              required
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              placeholder="Here type your Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
        </form>
        <br />
        <button type="submit" >Submit</button>
      </div>
    </>
  );
};
export default LoginPage;
