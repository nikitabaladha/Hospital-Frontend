// components/DrCalendar/DrCalendar.js
import React from "react";

const DrCalendar = ({
  doctorName,
  speciality,
  experience,
  email,
  phone,
  fees,
  qualification,
}) => {
  return (
    <div>
      <h3>{doctorName}</h3>
      <p>{speciality}</p>
      <p>Experience: {experience} years</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Fees: {fees}</p>
      <p>Qualification: {qualification}</p>
    </div>
  );
};

export default DrCalendar;
