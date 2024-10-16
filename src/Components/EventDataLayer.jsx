import React, { useEffect, useState, useMemo } from "react";
import { eventData } from "../services/apiCall";
import EventListing from "./EventListing";
import EventHeader from "./EventHeader";
import EventsPagination from "./EventsPagination";

const pageSize = 10;

const EventDataLayer = () => {
  const [allEvents, setEvents] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = useMemo(() => {
    if (!allEvents) return [];
    return allEvents.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [allEvents, search]);

  const events = useMemo(() => {
    const prevIndex = pageSize * (currentPage - 1);
    return filteredEvents.filter((_, index) => {
      if (index + 1 < prevIndex) return false;
      if (index + 1 > prevIndex + pageSize) return false;
      return true;
    });
  }, [filteredEvents, currentPage]);

  useEffect(() => {
    (async () => {
      let data = await eventData();
      setEvents(data);
    })();
  }, []);

  return (
    <>
      <EventHeader setSearch={setSearch} />
      <EventListing events={events} />
      <EventsPagination
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={filteredEvents.length}
      />
    </>
  );
};

export default EventDataLayer;
