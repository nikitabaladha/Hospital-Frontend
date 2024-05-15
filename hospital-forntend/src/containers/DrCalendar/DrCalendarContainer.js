// components/DrCalendar/DrCalendarContainer.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DrCalendar from "../../components/DrCalendar/DrCalendar";
import DemoApp from "../../components/DemoApp/DemoApp";
import getAPI from "../../Api/axiosGet.js";

const DrCalendarContainer = () => {
  const [doctorData, setDoctorData] = useState(null);
  const { doctorId } = useParams();

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await getAPI(`/doctorForm/${doctorId}`);
        if (!response || !response.data || !response.data.data) {
          throw new Error("Failed to fetch doctor details");
        }
        setDoctorData(response.data.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [doctorId]);

  return (
    <div>
      {doctorData ? (
        <>
          <DrCalendar
            doctorName={`${doctorData.firstName} ${doctorData.lastName}`}
            speciality={doctorData.speciality}
            experience={doctorData.experience}
            email={doctorData.email}
            phone={doctorData.phone}
            fees={doctorData.fees}
            qualification={doctorData.qualification}
          />
          <h1>My Calendar App</h1>
          <DemoApp doctorId={doctorId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DrCalendarContainer;
