import React, { useState, useEffect } from "react";

const EventList = ({ eventsData }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, [eventsData]);

  return (
    <div className="flex overflow-x-auto py-4">
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md mx-2 relative">
          <div className="absolute top-2 right-2 rounded-full p-1 bg-black opacity-50">
            <span className="text-sm font-semibold opacity-100 text-white">
              Upvotes: {event.upvotes || 0}
            </span>
          </div>
          <img
            src={event.imageUrl + "?random=" + Math.random()}
            alt={event.title}
            className=" aspect-video rounded-t-lg h-50"
          />
          <div className="flex justify-between">
            <div className="px-4 py-1">
              <h3 className="text-sm font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
            </div>
            <div className="p-4">
              <button className=" border-2 border-blue-500 p-1 w-max rounded-md">View details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
