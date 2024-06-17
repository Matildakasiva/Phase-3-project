import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import SideNavbar from './SideNavbar';

function Calendar() {
  const [events, setEvents] = useState([]);

  function handleDateClick(dateClickInfo) {
    const title = prompt('Enter event title');
    if (title) {
      const newEvent = {
        title,
        start: dateClickInfo.dateStr,
        end: dateClickInfo.dateStr,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  }

  function handleEventClick(eventClickInfo) {
    const eventId = eventClickInfo.event.id;
    const event = events.find((event) => event.id === eventId);
    if (event) {
      const newTitle = prompt('Edit event title', event.title);
      if (newTitle) {
        setEvents((prevEvents) =>
          prevEvents.map((e) => (e.id === eventId ? { ...e, title: newTitle } : e))
        );
      } else {
        setEvents((prevEvents) => prevEvents.filter((e) => e.id !== eventId));
      }
    }
  }

  return (
    <div>
      <div>
        <SideNavbar/>
      </div>
    <div className="container py-5">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
      />
    </div>
    </div>
    
  );
}

export default Calendar;