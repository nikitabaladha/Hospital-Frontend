// container/DoctorForm/DoctorFormContainer.js

import React, { useState } from "react";
import DoctorForm from "../../components/DoctorForm/DoctorForm.js";
import postAPI from "../../Api/axiosPost.js";
import { useNavigate } from "react-router-dom";

const DoctorFormContainer = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [speciality, setSpecialty] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [qualification, setQualification] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") setFirstName(value);
    else if (name === "lastName") setLastName(value);
    else if (name === "email") setEmail(value);
    else if (name === "mobileNumber") setMobileNumber(value);
    else if (name === "dob") setDob(value);
    else if (name === "address") setAddress(value);
    else if (name === "city") setCity(value);
    else if (name === "state") setState(value);
    else if (name === "country") setCountry(value);
    else if (name === "zipCode") setZipCode(value);
    else if (name === "speciality") setSpecialty(value);
    else if (name === "fees") setFees(value);
    else if (name === "experience") setExperience(value);
    else if (name === "qualification") setQualification(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accessToken = JSON.parse(localStorage.getItem("accessToken"));

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const response = await postAPI(
        "/doctorForm",
        {
          firstName,
          lastName,
          email,
          mobileNumber,
          dob,
          address,
          city,
          state,
          country,
          zipCode,
          speciality,
          fees,
          experience,
          qualification,
        },
        { access_token: accessToken }
      );

      if (!response.hasError) {
        console.log("Successful form submission: ", response.data.message);

        navigate("/");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Error during Submitting Doctor form:", error);

      setError("Internal server error during login");
    }
  };

  return (
    <DoctorForm
      firstName={firstName}
      lastName={lastName}
      email={email}
      mobileNumber={mobileNumber}
      dob={dob}
      address={address}
      city={city}
      state={state}
      zipCode={zipCode}
      speciality={speciality}
      experience={experience}
      fees={fees}
      qualification={qualification}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default DoctorFormContainer;
