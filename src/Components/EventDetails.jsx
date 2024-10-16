import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { eventDetails } from "../services/apiCall";

const EventDetails = () => {
  const [singleEvent, setSingleEvent] = useState({});
  const [availableTicket, setAvaiableTicket] = useState(0);
  const [isBooked, setIsBooked] = useState({
    booking: "Book Now",
    bgColor: "gray",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const singleData = await eventDetails(id);
      setAvaiableTicket(singleData.availableSeats);
      setSingleEvent(singleData);
    })();
  }, []);
  return (
    <div className="bg-white">
      <button
        className="bg-gray-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-600 transition m-2.5"
        onClick={() => {
          navigate("/app/events");
        }}
      >
        Back
      </button>

      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {singleEvent.title}
          </h2>
          <p className="mt-4 text-gray-500">{singleEvent.description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Category</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {singleEvent.category}
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Date</dt>
              <dd className="mt-2 text-sm text-gray-500">{singleEvent.date}</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="mt-2 text-sm text-gray-500">
                ${singleEvent.price}
              </dd>
            </div>

            <div className="border-t border-gray-200 pt-4 flex flex-col">
              <span className="flex justify-between">
                <h3
                  style={{ display: "inline" }}
                  className="font-medium text-gray-900"
                >
                  Available seats:{" "}
                </h3>

                {availableTicket}
              </span>
              <button
                className={`bg-${isBooked.bgColor}-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-${isBooked.bgColor}-600 transition mt-2.5`}
                onClick={() => {
                  setAvaiableTicket(availableTicket - 1);
                  setIsBooked({ booking: "Booked", bgColor: "gray" });
                }}
                disabled={availableTicket === 0 || isBooked.booking == "Booked"}
              >
                {isBooked.booking}
              </button>
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
