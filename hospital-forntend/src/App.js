// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Home from "./components/Home/Home.js";
// import About from "./components/About/About.js";
// import Service from "./components/Service/Service.js";
// import Doctors from "./components/Doctors/Doctors.js";
// import Contact from "./components/Contact/Contact.js";
// import Blog from "./components/Blog/Blog.js";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup.js";
// import Appointment from "./components/Appointment/Appointment.js";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/appointment" element={<Appointment />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import LoginContainer from "./containers/Login/LoginContainer";
import SignupContainer from "./containers/Signup/SignupContainer";
import DoctorFormContainer from "./containers/DoctorForm/DoctorFormContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignupContainer />} />
      <Route path="/doctorForm" element={<DoctorFormContainer />} />
    </Routes>
  );
};

export default App;
