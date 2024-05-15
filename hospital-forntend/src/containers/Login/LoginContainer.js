// containers/Login/LoginContainer.js

import React, { useState } from "react";
import Login from "../../components/Login/Login.js";
import postAPI from "../../Api/axiosPost";
import { useLocation, useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const doctorId = queryParams.get("doctorId");

  const handleNavigate = () => {
    localStorage.setItem("locationPathname", location.pathname);
    localStorage.setItem(
      "queryParams",
      JSON.stringify(Object.fromEntries(queryParams.entries()))
    );

    navigate("/signup");
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validateLoginForm = () => {
    let isValid = true;
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email cannot be empty";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password cannot be empty";
      isValid = false;
    }

    setLoginData({ ...loginData, error: "" });
    setLoginErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateLoginForm()) {
      return;
    }

    try {
      const response = await postAPI(
        "/login",
        {
          email,
          password,
        },
        false
      );

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
          const storedPathname = localStorage.getItem("locationPathname");
          const storedDoctorId = localStorage.getItem("queryParams")
            ? JSON.parse(localStorage.getItem("queryParams")).doctorId
            : null;

          if (storedPathname === "/login" && storedDoctorId) {
            navigate(`/drCalendar/${storedDoctorId}`);
          } else if (doctorId) {
            navigate(`/drCalendar/${doctorId}`);
          } else {
            navigate("/");
          }
        }
        localStorage.removeItem("locationPathname");
        localStorage.removeItem("queryParams");
      } else {
        setLoginErrors({ error: response.data.message });
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
      setLoginErrors({
        error: error.response.data.message,
      });
    }
  };

  return (
    <Login
      email={email}
      password={password}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      loginErrors={loginErrors}
      handleNavigate={handleNavigate}
      error={loginErrors.error}
    />
  );
};

export default LoginContainer;
