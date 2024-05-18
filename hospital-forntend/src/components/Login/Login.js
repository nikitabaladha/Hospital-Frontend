// components / Login / Login.js;

import React from "react";
import "./Login.css";

const Login = ({
  email,
  password,
  handleOnChange,
  handleSubmit,
  loginErrors,
  handleNavigate,
  error,
}) => {
  return (
    <div className="login-container-fluid">
      <div className="form-container">
        <h2 className="heading">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={handleOnChange}
            />
            {loginErrors.email && <p className="error">{loginErrors.email}</p>}
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            />
            {loginErrors.password && (
              <p className="error">{loginErrors.password}</p>
            )}
          </div>

          {error && <p className="error">{error}</p>}

          <div>
            <button type="submit">Login</button>
          </div>
        </form>

        <div className="signup-message-container">
          <h2 className="signup-message">
            Don't have an account?{" "}
            <button className="navigate-button" onClick={handleNavigate}>
              Sign up
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
