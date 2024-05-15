// components/Login/Login.js

import React from "react";

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
          {loginErrors.email && <p className="error">{loginErrors.email}</p>}
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
          {loginErrors.password && (
            <p className="error">{loginErrors.password}</p>
          )}
        </div>

        {/* Render general form error message */}
        {error && <p className="error">{error}</p>}

        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <h2>
          Don't have an account?{" "}
          <button onClick={handleNavigate}>Sign up</button>
        </h2>
      </div>
    </div>
  );
};

export default Login;
