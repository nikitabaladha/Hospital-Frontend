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
        const response = await getAPI("/doctorForm", false);

        if (!response || !response.data || !response.data.data) {
          throw new Error("Failed to fetch doctor details");
        }

        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchData();
  }, []);

  const handleBookAppointment = (doctorId) => {
    console.log(doctorId);
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    if (!accessToken) {
      navigate(`/login?doctorId=${doctorId}`);
    } else {
      navigate(`/drCalendar/${doctorId}`);
    }
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
