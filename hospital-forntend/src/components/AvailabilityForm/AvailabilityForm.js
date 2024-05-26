// src/components/AvailabilityForm.js

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTrashAlt } from "react-icons/fa";
import "./AvailabilityForm.css";
import { Button } from "react-bootstrap";

const AvailabilityForm = ({
  day,
  startTime,
  endTime,

  onDayChange,
  onStartTimeChange,
  onEndTimeChange,
  onSubmit,
  submittedAvailabilities,
  formErrors,
  onKeyDown,
  onDelete,
}) => {
  return (
    <div className="availability-form-container row">
      <div className="availability-form col-md-6 col-sm-12">
        <h2 className="heading">Create Your Availability</h2>
        <form onSubmit={onSubmit}>
          <div className="availability-input-group select">
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
          <div className="availability-input-group">
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
              className="datepicker-input"
            />
            <p className="text-danger">{formErrors.startTime}</p>
          </div>
          <div className="availability-input-group">
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
              className="datepicker-input"
            />
            <p className="text-danger">{formErrors.endTime}</p>
          </div>
          <div className="button-container">
            {" "}
            <button type="submit">Create Availability</button>
          </div>
        </form>
      </div>

      <div className="submitted-availabilities col-md-6 col-sm-12">
        <h2 className="heading">Submitted Availabilities</h2>
        <ul>
          {submittedAvailabilities.map((availability) => (
            <li key={availability.id}>
              {availability.day} - {availability.startTime} to{" "}
              {availability.endTime}
              <FaTrashAlt
                onClick={() => {
                  console.log("Deleting availability with ID:", availability);
                  onDelete(availability.id);
                }}
                className="delete-icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AvailabilityForm;
