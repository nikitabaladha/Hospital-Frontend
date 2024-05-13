// components/DemoApp/DemoApp.js
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import getAPI from "../../Api/axiosGet.js";
import "./index.css";
import moment from "moment";

function DemoApp({ doctorId }) {
  const [availability, setAvailability] = useState([]);
  const [todayAvailability, setTodayAvailability] = useState({
    min: "00:00",
    max: "00:00",
  });

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await getAPI(`/availability/${doctorId}`);

        if (!response || !response.data || !response.data.data) {
          throw new Error("Failed to fetch availability data");
        }

        const data = response.data.data;
        console.log(data);
        setAvailability(data);
        getMaxAndMinTime();
      } catch (error) {
        console.error("Error fetching availability data:", error);
      }
    };

    fetchAvailability();
  }, [doctorId]);

  function customDayCellRender({ date, dayNumberText }) {
    const dayOfWeek = moment(date).format("dddd");

    if (!availability.some((item) => item.day === dayOfWeek)) {
      return (
        <div
          className="fc-daygrid-day-top fc-day fc-day-sun fc-day-other fc-day-past"
          data-date={date}
        >
          <span className="fc-daygrid-day-number">Holiday</span>
        </div>
      );
    } else {
      return (
        <div
          className="fc-daygrid-day-top fc-day fc-day-other fc-day-past"
          data-date={date}
        >
          <span className="fc-daygrid-day-number">{dayNumberText}</span>
        </div>
      );
    }
  }

  function onDayChangeHandler(event) {
    if (event.view.type === "timeGridDay") getMaxAndMinTime(event.start);
  }

  function handleDateSelect(selectInfo) {
    const selectedDate = moment(selectInfo.start).format("YYYY-MM-DD");
    const today = moment().format("YYYY-MM-DD");

    if (selectedDate < today) {
      alert("Appointments cannot be booked for past dates.");
      return;
    }

    let title = prompt("What is the purpose of your visit today?");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: title,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      window.confirm(
        `Are you sure you want to delete your Appointment booking '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  // function getMaxAndMinTime(date = moment()) {
  //   const day = moment(date).format("dddd");
  //   const daysOfWeek = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ];

  //   if (!daysOfWeek.includes(day)) {
  //     setTodayAvailability({
  //       min: "00:00",
  //       max: "00:00",
  //     });
  //     return;
  //   }
  //   if (availability?.length) {
  //     const todayAvailability = availability.find((ava) => ava.day === day);
  //     if (todayAvailability)
  //       setTodayAvailability({
  //         min: todayAvailability.startTime,
  //         max: todayAvailability.endTime,
  //       });
  //   } else {
  //     // If day is not found, set default min and max values
  //     setTodayAvailability({
  //       min: "00:00",
  //       max: "00:00",
  //     });
  //   }
  // }

  function getMaxAndMinTime(date = moment()) {
    const day = moment(date).format("dddd");

    if (!daysOfWeek.includes(day)) {
      setTodayAvailability({
        min: "00:00",
        max: "00:00",
      });
      return;
    }

    if (availability?.length) {
      const todayAvailability = availability.find((ava) => ava.day === day);
      if (todayAvailability) {
        setTodayAvailability({
          min: todayAvailability.startTime,
          max: todayAvailability.endTime,
        });
      } else {
        setTodayAvailability({
          min: "00:00",
          max: "00:00",
        });
      }
    } else {
      setTodayAvailability({
        min: "00:00",
        max: "00:00",
      });
    }
  }

  return (
    <div className="demo-app">
      <Sidebar availability={availability} />
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          dateIncrement={onDayChangeHandler}
          events={availability.map((availabilityItem) => ({
            id: availabilityItem.id,
            title: availabilityItem.day,
            start: availabilityItem.startTime,
            end: availabilityItem.endTime,
          }))}
          select={handleDateSelect}
          eventClick={handleEventClick}
          slotMinTime={todayAvailability.min}
          slotMaxTime={todayAvailability.max}
          datesSet={onDayChangeHandler}
          dayCellContent={customDayCellRender}
        />
      </div>
    </div>
  );
}

function Sidebar({ availability }) {
  return (
    <div className="demo-app-sidebar">
      <h2>Availability</h2>
      <ul>
        {availability.map((availabilityItem) => (
          <li key={availabilityItem.id}>
            <span>{availabilityItem.day}</span>
            <span>
              {availabilityItem.startTime} - {availabilityItem.endTime}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoApp;
