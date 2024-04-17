// components/DrCalendar/DrCalendarContainer.js
import React, { useState, useEffect } from "react";
import DrCalendar from "../../components/DrCalendar/DrCalendar";
import getAPI from "../../Api/axiosGet.js";
import { useParams } from "react-router-dom";

const DrCalendarContainer = () => {
  const { doctorId } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = JSON.parse(localStorage.getItem("accessToken"));

        if (!accessToken) {
          throw new Error("Access token not found");
        }

        const response = await getAPI(`/doctorForm/${doctorId}`, {
          access_token: accessToken,
        });

        if (!response || !response.data || !response.data.data) {
          throw new Error("Failed to fetch doctor details");
        }

        setDoctorDetails(response.data.data);

        console.log("Doctor details:", response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching doctor details: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [doctorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {doctorDetails.map((doctor, index) => (
        <DrCalendar
          key={index}
          doctorName={doctor.firstName + " " + doctor.lastName}
          speciality={doctor.speciality}
          experience={doctor.experience}
          email={doctor.email}
          phone={doctor.mobileNumber}
          fees={doctor.fees}
          qualification={doctor.qualification}
        />
      ))}
    </div>
  );
};

export default DrCalendarContainer;
