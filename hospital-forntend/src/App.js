// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import LoginContainer from "./containers/Login/LoginContainer";
import SignupContainer from "./containers/Signup/SignupContainer";
import DoctorFormContainer from "./containers/DoctorForm/DoctorFormContainer";
import DoctorsContainer from "./containers/Doctors/DoctorsContainer";
import DrCalendarContainer from "./containers/DrCalendar/DrCalendarContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/signup" element={<SignupContainer />} />
      <Route path="/doctorForm" element={<DoctorFormContainer />} />
      <Route path="/doctors" element={<DoctorsContainer />} />
      <Route path="/drCalendar" element={<DrCalendarContainer />} />
    </Routes>
  );
};

export default App;
