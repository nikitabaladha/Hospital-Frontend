// src/components/AvailabilityForm.js

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AvailabilityForm = ({
  day,
  startTime,
  endTime,
  message,
  onDayChange,
  onStartTimeChange,
  onEndTimeChange,
  onSubmit,
  submittedAvailabilities,
  formErrors,
  onKeyDown,
}) => {
  return (
    <div>
      <h2>Create Availability</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Day:</label>
          <select value={day} onChange={onDayChange}>
            <option value="">Select a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <p className="text-danger">{formErrors.day}</p>
        </div>
        <div>
          <label>Start Time:</label>
          <DatePicker
            selected={startTime}
            onChange={onStartTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Start Time"
            dateFormat="HH:mm"
            timeFormat="HH:mm"
            onKeyDown={onKeyDown}
          />
          <p className="text-danger">{formErrors.startTime}</p>
        </div>
        <div>
          <label>End Time:</label>
          <DatePicker
            selected={endTime}
            onChange={onEndTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="End Time"
            dateFormat="HH:mm"
            timeFormat="HH:mm"
            onKeyDown={onKeyDown}
          />
          <p className="text-danger">{formErrors.endTime}</p>
        </div>
        <button type="submit">Create Availability</button>
      </form>
      {message && <p>{message}</p>}

      <h3>Submitted Availabilities</h3>
      <ul>
        {submittedAvailabilities.map((availability, index) => (
          <li key={index}>
            {availability.day} - {availability.startTime} to{" "}
            {availability.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityForm;
