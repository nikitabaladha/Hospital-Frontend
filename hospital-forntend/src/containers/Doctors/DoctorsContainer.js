// container/Doctors/DoctorsContainer.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Doctors from "../../components/Doctors/Doctors.js";
import getAPI from "../../Api/axiosGet.js";

const DoctorsContainer = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = JSON.parse(localStorage.getItem("accessToken"));

        if (!accessToken) {
          throw new Error("Access token not found");
        }

        const response = await getAPI("/doctorForm", {
          access_token: accessToken,
        });

        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchData();
  }, []);

  const handleBookAppointment = () => {
    navigate(`/drCalendar`);
  };

  return (
    <div>
      <h2>Doctors</h2>
      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <div>
          {doctors.map((doctor) => (
            <Doctors
              key={doctor.id}
              doctorName={`${doctor.firstName} ${doctor.lastName}`}
              speciality={doctor.speciality}
              experience={doctor.experience}
              qualification={doctor.qualification}
              email={doctor.email}
              phone={doctor.phone}
              fees={doctor.fees}
              handleBookAppointment={() => handleBookAppointment(doctor.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsContainer;
