// containers/SignUp/SignUpContainer.js

import React, { useState } from "react";
import Signup from "../../components/Signup/Signup.js";
import postAPI from "../../Api/axios.js";
import { useNavigate } from "react-router-dom";

const SignupContainer = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "userName") setUserName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "role") setRole(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postAPI("/signup", {
        userName,
        userType: role,
        email,
        password,
      });

      if (!response.hasError) {
        console.log("Signup successful message: ", response.data.message);

        navigate("/login");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);

      if (error.response && error.response.status === 400) {
        console.log(error.response.data.message);
      }

      setError("Internal server error during signup");
    }
  };

  return (
    <Signup
      userName={userName}
      email={email}
      password={password}
      role={role}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default SignupContainer;
