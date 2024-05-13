// containers/SignUp/SignUpContainer.js

import React, { useState } from "react";
import Signup from "../../components/Signup/Signup.js";
import postAPI from "../../Api/axiosPost.js";
import { useNavigate } from "react-router-dom";

const SignupContainer = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  const [signupErrors, setSignupErrors] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  const { userName, email, password, role } = signupData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const validateSignUpForm = () => {
    let isValid = true;
    const errors = {};

    if (!userName.trim()) {
      errors.userName = "User name cannot be empty";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email cannot be empty";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "Password cannot be empty";
      isValid = false;
    }

    if (!role.trim()) {
      errors.role = "Choose any one role";
      isValid = false;
    }

    setSignupData({ ...signupData, error: "" });
    setSignupErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateSignUpForm()) {
      return;
    }

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
        setSignupErrors({ error: response.message });
      }
    } catch (error) {
      console.error("Error during signup:", error);

      if (error.response && error.response.status === 400) {
        console.log(error.response.data.message);
      }

      setSignupErrors({
        error: error.response.data.message,
      });
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
      signupErrors={signupErrors}
      error={signupErrors.error}
    />
  );
};
export default SignupContainer;
