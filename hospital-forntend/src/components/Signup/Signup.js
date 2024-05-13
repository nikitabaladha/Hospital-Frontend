// components/Signup/Signup.js

import React from "react";

const Signup = ({
  userName,
  email,
  password,
  role,
  handleOnChange,
  handleSubmit,
  signupErrors,
  error,
}) => {
  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
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

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={handleOnChange}
          />
          {signupErrors.email && <p className="error">{signupErrors.email}</p>}
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
          {signupErrors.password && (
            <p className="error">{signupErrors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="role">I am a:</label>
          <select value={role} onChange={handleOnChange} id="role" name="role">
            <option value="">Select Role</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>
          {signupErrors.role && <p className="error">{signupErrors.role}</p>}
        </div>

        {/* Render general form error message */}
        {error && <p className="error">{error}</p>}

        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
