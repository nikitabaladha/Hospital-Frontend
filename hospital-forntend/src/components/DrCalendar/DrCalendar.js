// // components/DrCalendar/DrCalendar.js
// import React from "react";

// const DrCalendar = ({
//   doctorName,
//   speciality,
//   experience,
//   email,
//   phone,
//   fees,
//   qualification,
// }) => {
//   return (
//     <div>
//       <h3>{doctorName}</h3>
//       <p>{speciality}</p>
//       <p>Experience: {experience} years</p>
//       <p>Email: {email}</p>
//       <p>Phone: {phone}</p>
//       <p>Fees: {fees}</p>
//       <p>Qualification: {qualification}</p>
//     </div>
//   );
// };

// export default DrCalendar;

import React from "react";

import "./DrCalendar.css"; // Import custom CSS

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
    <div className="card dr-calendar-card">
      <div className="card-body">
        <h3 className="card-title">{doctorName}</h3>
        <p className="card-text">
          <strong>Speciality:</strong> {speciality}
        </p>
        <p className="card-text">
          <strong>Experience:</strong> {experience} years
        </p>
        <p className="card-text">
          <strong>Email:</strong> {email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="card-text">
          <strong>Fees:</strong> {fees}
        </p>
        <p className="card-text">
          <strong>Qualification:</strong> {qualification}
        </p>
      </div>
    </div>
  );
};

export default DrCalendar;
