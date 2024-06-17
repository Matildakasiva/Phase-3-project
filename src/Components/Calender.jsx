import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function Calender() {
  const [events, setEvents] = useState([]);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function handleSelect(info) {
    const title = prompt("Enter event title");
    if (title) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  }

  return (
    <div className="container py-5">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventContent={renderEventContent}
        events={events}
        selectable={true}
        select={handleSelect}
      />
    </div>
  );
}

export default Calender;