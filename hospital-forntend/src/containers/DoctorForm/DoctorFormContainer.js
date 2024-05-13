// container/DoctorForm/DoctorFormContainer.js

import React, { useState } from "react";
import DoctorForm from "../../components/DoctorForm/DoctorForm.js";
import postAPI from "../../Api/axiosPost.js";
import { useNavigate } from "react-router-dom";

const DoctorFormContainer = () => {
  const navigate = useNavigate();

  const [doctorFormData, setDoctorFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    speciality: "",
    experience: "",
    fees: "",
    qualification: "",
  });

  const [doctorFormError, setDoctorFormError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDoctorFormData({ ...doctorFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postAPI("/doctorForm", doctorFormData);

      if (!response.hasError) {
        console.log("Successful form submission: ", response.data.message);

        navigate("/");
      } else {
        setDoctorFormError(response.message);
      }
    } catch (error) {
      console.error("Error during Submitting Doctor form:", error);

      setDoctorFormError({
        error: error.response.data.message,
      });
    }
  };

  return (
    <DoctorForm
      {...doctorFormData}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      error={doctorFormError.error}
    />
  );
};

export default DoctorFormContainer;
