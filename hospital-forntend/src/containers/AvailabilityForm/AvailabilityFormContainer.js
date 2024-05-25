// src/containers/AvailabilityContainer.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvailabilityForm from "../../components/AvailabilityForm/AvailabilityForm.js";
import postAPI from "../../Api/axiosPost.js";

const AvailabilityFormContainer = () => {
  const navigate = useNavigate();

  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({
    day: "",
    startTime: "",
    endTime: "",
  });

  const [submittedAvailabilities, setSubmittedAvailabilities] = useState([]);

  const handleDayChange = (event) => {
    setDay(event.target.value);
    setFormErrors({ ...formErrors, day: "" });
  };

  const handleStartTimeChange = (date) => {
    setStartTime(date);
    setFormErrors({ ...formErrors, startTime: "" });
  };

  const handleEndTimeChange = (date) => {
    setEndTime(date);
    setFormErrors({ ...formErrors, endTime: "" });
  };

  const preventTyping = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let errors = {};

    if (!day) {
      errors.day = "Please select a day";
    }
    if (!startTime) {
      errors.startTime = "Please select a start time";
    }
    if (!endTime) {
      errors.endTime = "Please select an end time";
    }
    if (startTime >= endTime) {
      errors.endTime = "End time must be greater than start time";
    }

    const timeDifference = (endTime - startTime) / (1000 * 60 * 60);
    if (timeDifference < 3) {
      errors.endTime = "End time must be at least 3 hours after start time";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const formatTime = (date) => {
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    };

    try {
      const response = await postAPI("/availability", {
        day,
        startTime: formatTime(startTime),
        endTime: formatTime(endTime),
      });

      if (!response.data.hasError) {
        const newAvailability = {
          day,
          startTime: formatTime(startTime),
          endTime: formatTime(endTime),
        };

        setSubmittedAvailabilities([
          ...submittedAvailabilities,
          newAvailability,
        ]);
        setMessage(response.data.message);

        setDay("");
        setStartTime(new Date());
        setEndTime(new Date());
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error during Submitting Availability form:", error);

      const errorMessage =
        error.response?.data?.message ||
        "There was an error creating the availability";
      setMessage(errorMessage);
    }
  };

  return (
    <AvailabilityForm
      day={day}
      startTime={startTime}
      endTime={endTime}
      message={message}
      onDayChange={handleDayChange}
      onStartTimeChange={handleStartTimeChange}
      onEndTimeChange={handleEndTimeChange}
      onSubmit={handleSubmit}
      submittedAvailabilities={submittedAvailabilities}
      formErrors={formErrors}
      onKeyDown={preventTyping}
    />
  );
};

export default AvailabilityFormContainer;
