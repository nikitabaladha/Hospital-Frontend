// // containers/SignUp/SignUpContainer.js

// import React, { useState } from "react";
// import Signup from "../../components/Signup/Signup.js";
// import postAPI from "../../Api/axiosPost.js";
// import { useNavigate } from "react-router-dom";

// const SignupContainer = () => {
//   const navigate = useNavigate();

//   const [signupData, setSignupData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [signupErrors, setSignupErrors] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const { userName, email, password, role } = signupData;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData({ ...signupData, [name]: value });
//   };

//   const validateSignUpForm = () => {
//     let isValid = true;
//     const errors = {};

//     if (!userName.trim()) {
//       errors.userName = "User name cannot be empty";
//       isValid = false;
//     }

//     if (!email.trim()) {
//       errors.email = "Email cannot be empty";
//       isValid = false;
//     }

//     if (!password.trim()) {
//       errors.password = "Password cannot be empty";
//       isValid = false;
//     }

//     if (!role.trim()) {
//       errors.role = "Choose any one role";
//       isValid = false;
//     }

//     setSignupData({ ...signupData, error: "" });
//     setSignupErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateSignUpForm()) {
//       return;
//     }

//     try {
//       const response = await postAPI("/signup", {
//         userName,
//         userType: role,
//         email,
//         password,
//       });

//       if (!response.hasError) {
//         console.log("Signup successful message: ", response.data.message);

//         navigate("/login");
//       } else {
//         setSignupErrors({ error: response.message });
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);

//       if (error.response && error.response.status === 400) {
//         console.log(error.response.data.message);
//       }

//       setSignupErrors({
//         error: error.response.data.message,
//       });
//     }
//   };

//   return (
//     <Signup
//       userName={userName}
//       email={email}
//       password={password}
//       role={role}
//       handleOnChange={handleOnChange}
//       handleSubmit={handleSubmit}
//       signupErrors={signupErrors}
//       error={signupErrors.error}
//     />
//   );
// };
// export default SignupContainer;

// =================================================================

// import React, { useState } from "react";
// import Signup from "../../components/Signup/Signup.js";
// import postAPI from "../../Api/axiosPost.js";
// import { useNavigate, useLocation } from "react-router-dom";

// const SignupContainer = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log("location: ", location);

//   const [signupData, setSignupData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [signupErrors, setSignupErrors] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const { userName, email, password, role } = signupData;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData({ ...signupData, [name]: value });
//   };

//   const validateSignUpForm = () => {
//     let isValid = true;
//     const errors = {};

//     if (!userName.trim()) {
//       errors.userName = "User name cannot be empty";
//       isValid = false;
//     }

//     if (!email.trim()) {
//       errors.email = "Email cannot be empty";
//       isValid = false;
//     }

//     if (!password.trim()) {
//       errors.password = "Password cannot be empty";
//       isValid = false;
//     }

//     if (!role.trim()) {
//       errors.role = "Choose any one role";
//       isValid = false;
//     }

//     setSignupData({ ...signupData, error: "" });
//     setSignupErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateSignUpForm()) {
//       return;
//     }

//     try {
//       const response = await postAPI(
//         "/signup",
//         {
//           userName,
//           userType: role,
//           email,
//           password,
//         },
//         false
//       );

//       if (!response.hasError) {
//         console.log("Signup successful message: ", response.data.message);

//         navigate("/login");
//       } else {
//         setSignupErrors({ error: response.message });
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);

//       if (error.response && error.response.status === 400) {
//         console.log(error.response.data.message);
//       }

//       setSignupErrors({
//         error: error.response.data.message,
//       });
//     }
//   };

//   return (
//     <Signup
//       userName={userName}
//       email={email}
//       password={password}
//       role={role}
//       handleOnChange={handleOnChange}
//       handleSubmit={handleSubmit}
//       signupErrors={signupErrors}
//       error={signupErrors.error}
//     />
//   );
// };

// export default SignupContainer;

// =================================================================
// import React, { useState } from "react";
// import Signup from "../../components/Signup/Signup.js";
// import postAPI from "../../Api/axiosPost.js";
// import { useNavigate, useLocation } from "react-router-dom";

// const SignupContainer = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [signupData, setSignupData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [signupErrors, setSignupErrors] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const { userName, email, password, role } = signupData;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData({ ...signupData, [name]: value });
//   };

//   const validateSignUpForm = () => {
//     let isValid = true;
//     const errors = {};

//     if (!userName.trim()) {
//       errors.userName = "User name cannot be empty";
//       isValid = false;
//     }

//     if (!email.trim()) {
//       errors.email = "Email cannot be empty";
//       isValid = false;
//     }

//     if (!password.trim()) {
//       errors.password = "Password cannot be empty";
//       isValid = false;
//     }

//     if (!role.trim()) {
//       errors.role = "Choose any one role";
//       isValid = false;
//     }

//     setSignupErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateSignUpForm()) {
//       return;
//     }

//     try {
//       const response = await postAPI(
//         "/signup",
//         {
//           userName,
//           userType: role,
//           email,
//           password,
//         },
//         false
//       );

//       if (!response.hasError) {
//         console.log("Signup successful message: ", response.data.message);

//         // Check if the user came from the login page
//         const cameFromLoginPage = localStorage.getItem("cameFromLoginPage");
//         if (cameFromLoginPage === "true") {
//           // Clear the flag indicating that the user came from the login page
//           localStorage.removeItem("cameFromLoginPage");
//           // Redirect the user back to the login page
//           navigate("/login");
//         } else {
//           // Redirect the user to the home page
//           navigate("/");
//         }
//       } else {
//         setSignupErrors({ error: response.message });
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);

//       if (error.response && error.response.status === 400) {
//         console.log(error.response.data.message);
//       }

//       setSignupErrors({
//         error: error.response.data.message,
//       });
//     }
//   };

//   return (
//     <Signup
//       userName={userName}
//       email={email}
//       password={password}
//       role={role}
//       handleOnChange={handleOnChange}
//       handleSubmit={handleSubmit}
//       signupErrors={signupErrors}
//       error={signupErrors.error}
//     />
//   );
// };

// export default SignupContainer;

// =================================================================

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

  const handleNavigate = () => {
    navigate("/login");
  };

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

    setSignupErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateSignUpForm()) {
      return;
    }

    try {
      const response = await postAPI(
        "/signup",
        {
          userName,
          userType: role,
          email,
          password,
        },
        false
      );

      if (!response.hasError) {
        alert(response.data.message);
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
      handleNavigate={handleNavigate}
    />
  );
};

export default SignupContainer;
