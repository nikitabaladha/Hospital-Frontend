// components / Login / Login.js;

// import React from "react";
// import "./index.css";

// const Login = ({
//   email,
//   password,
//   handleOnChange,
//   handleSubmit,
//   loginErrors,
//   handleNavigate,
//   error,
// }) => {
//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             name="email"
//             onChange={handleOnChange}
//           />
//           {loginErrors.email && <p className="error">{loginErrors.email}</p>}
//         </div>

//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handleOnChange}
//           />
//           {loginErrors.password && (
//             <p className="error">{loginErrors.password}</p>
//           )}
//         </div>

//         {/* Render general form error message */}
//         {error && <p className="error">{error}</p>}

//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>

//       <div>
//         <h2>
//           Don't have an account?{" "}
//           <button onClick={handleNavigate}>Sign up</button>
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React from "react";

// const Login = ({
//   email,
//   password,
//   handleOnChange,
//   handleSubmit,
//   loginErrors,
//   handleNavigate,
//   error,
// }) => {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     backgroundColor: "#f0f0f0",
//     padding: "20px",
//   };

//   const formStyle = {
//     backgroundColor: "#fff",
//     padding: "40px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "400px",
//   };

//   const inputGroupStyle = {
//     marginBottom: "20px",
//   };

//   const labelStyle = {
//     display: "block",
//     marginBottom: "8px",
//     fontSize: "14px",
//     color: "#333",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     fontSize: "14px",
//     borderRadius: "5px",
//     border: "1px solid #ddd",
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     cursor: "pointer",
//   };

//   const errorMessageStyle = {
//     color: "red",
//     fontSize: "12px",
//   };

//   const navigateButtonStyle = {
//     background: "none",
//     border: "none",
//     color: "#007BFF",
//     cursor: "pointer",
//     textDecoration: "underline",
//     fontSize: "16px",
//   };

//   const headingStyle = {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={formStyle}>
//         <h2 style={headingStyle}>Login</h2>

//         <form onSubmit={handleSubmit}>
//           <div style={inputGroupStyle}>
//             <label style={labelStyle} htmlFor="email">
//               Email:
//             </label>
//             <input
//               style={inputStyle}
//               type="email"
//               id="email"
//               value={email}
//               name="email"
//               onChange={handleOnChange}
//             />
//             {loginErrors.email && (
//               <p style={errorMessageStyle}>{loginErrors.email}</p>
//             )}
//           </div>

//           <div style={inputGroupStyle}>
//             <label style={labelStyle} htmlFor="password">
//               Password:
//             </label>
//             <input
//               style={inputStyle}
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handleOnChange}
//             />
//             {loginErrors.password && (
//               <p style={errorMessageStyle}>{loginErrors.password}</p>
//             )}
//           </div>

//           {error && <p style={errorMessageStyle}>{error}</p>}

//           <div>
//             <button style={buttonStyle} type="submit">
//               Login
//             </button>
//           </div>
//         </form>

//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h2 style={{ fontSize: "16px" }}>
//             Don't have an account?{" "}
//             <button style={navigateButtonStyle} onClick={handleNavigate}>
//               Sign up
//             </button>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import "./Login.css"; // Import the external CSS file

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
          <div className="input-group">
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

          <div className="input-group">
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

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2 style={{ fontSize: "16px" }}>
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
