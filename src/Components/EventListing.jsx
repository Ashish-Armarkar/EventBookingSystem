import React from "react";
import { EventItem } from "./EventItem";

const EventListing = ({ events }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 grid grid-cols-2 gap-20">
        {events != null
          ? events.map((event) => <EventItem key={event.title} event={event} />)
          : null}
      </div>
    </div>
  );
};

export default EventListing;
