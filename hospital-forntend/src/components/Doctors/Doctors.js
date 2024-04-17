// components/Doctors/Doctors.js
import React from "react";

const Doctors = ({
  doctorName,
  speciality,
  experience,
  qualification,
  email,
  phone,
  fees,
  id,
  handleBookAppointment,
}) => {
  return (
    <div key={id}>
      <h3>{doctorName}</h3>
      <p>{speciality}</p>
      <p>Experience: {experience} years</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Fees: {fees}</p>
      <p>Qualification: {qualification}</p>
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default Doctors;
