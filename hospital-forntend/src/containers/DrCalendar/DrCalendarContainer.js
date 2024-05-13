// components/DrCalendar/DrCalendarContainer.js
import React, { useState, useEffect } from "react";
import DrCalendar from "../../components/DrCalendar/DrCalendar";
import DemoApp from "../../components/DemoApp/DemoApp";

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
        const response = await getAPI(`/doctorForm/${doctorId}`);

        if (!response || !response.data || !response.data.data) {
          throw new Error("Failed to fetch doctor details");
        }

        setDoctorDetails(response.data.data);

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

  if (!Array.isArray(doctorDetails)) {
    return null;
  }

  return (
    <div>
      {doctorDetails.map((doctor, index) => (
        <div key={index}>
          <DrCalendar
            doctorName={doctor.firstName + " " + doctor.lastName}
            speciality={doctor.speciality}
            experience={doctor.experience}
            email={doctor.email}
            phone={doctor.mobileNumber}
            fees={doctor.fees}
            qualification={doctor.qualification}
          />
          <h1>My Calendar App</h1>
          <DemoApp doctorId={doctorId} />
        </div>
      ))}
    </div>
  );
};

export default DrCalendarContainer;
