// containers/Login/LoginContainer.js

import React, { useState } from "react";
import Login from "../../components/Login/Login.js";
import postAPI from "../../Api/axiosPost";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postAPI("/login", {
        email,
        password,
      });

      if (!response.hasError) {
        console.log("Login successful Message:", response.data.message);

        const userDetails = {
          userName: response.data.userDetails.userName,
          userType: response.data.userDetails.userType,
          email: response.data.userDetails.email,
          status: response.data.userDetails.status,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );

        if (
          response.data.userDetails.userType === "Doctor" &&
          response.data.userDetails.status === "Pending"
        ) {
          navigate("/doctorForm");
        } else {
          navigate("/");
        }
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        console.log(error.response.data.message);
      }
      setError("Internal server error during login");
    }
  };

  return (
    <Login
      email={email}
      password={password}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default LoginContainer;
