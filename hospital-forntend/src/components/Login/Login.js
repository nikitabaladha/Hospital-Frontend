// components/Login/Login.js

import React from "react";

const Login = ({ email, password, handleOnChange, handleSubmit }) => {
  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <h2>
          Don't have an account? <a href="/signup">Sign up</a>
        </h2>
      </div>
    </div>
  );
};

export default Login;
