// components/Signup/Signup.js

import React from "react";
import "./Signup.css";

const Signup = ({
  userName,
  email,
  password,
  role,
  handleOnChange,
  handleSubmit,
  signupErrors,
  handleNavigate,
  error,
}) => {
  return (
    <div className="signup-container-fluid">
      <div className="form-container">
        <h2 className="heading">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              name="userName"
              onChange={handleOnChange}
            />
            {signupErrors.userName && (
              <p className="error">{signupErrors.userName}</p>
            )}
          </div>

          <div className="signup-input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={handleOnChange}
            />
            {signupErrors.email && (
              <p className="error">{signupErrors.email}</p>
            )}
          </div>

          <div className="signup-input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleOnChange}
            />
            {signupErrors.password && (
              <p className="error">{signupErrors.password}</p>
            )}
          </div>

          <div className="input-group role">
            <label htmlFor="role">I am a:</label>
            <select
              value={role}
              onChange={handleOnChange}
              id="role"
              name="role"
            >
              <option value="">Select Role</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
            </select>
            {signupErrors.role && <p className="error">{signupErrors.role}</p>}
          </div>

          {error && <p className="error">{error}</p>}

          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>

        <div className="login-message-container">
          <h2 className="login-message">
            Already have an account?{" "}
            <button className="navigate-button" onClick={handleNavigate}>
              Login
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
