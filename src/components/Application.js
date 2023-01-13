import React from "react";
import React, { useState } from "react";

import "components/Application.scss";
import DayList from "./DayList";

<DayList
  days={days}
  day={"Monday"}
  setDay={day => console.log(day)}
/>
const [day, setDay] = useState("Monday");

export default function Application(props) {
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu"></nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
