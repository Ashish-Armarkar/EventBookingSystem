import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import userContext from "../Store/store";

export const EventItem = ({ event }) => {
  const navigate = useNavigate();
  const { userCredentials } = useContext(userContext);
  return (
    <div
      onClick={() => {
        navigate(`/app/events/:${event.id}`);
      }}
    >
      <h2 className="text-l font-bold tracking-tight text-gray-900 flex justify-evenly">
        <span>{event.title}</span> <span>{event.date}</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10">
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men&#039;s Basic Tee in black."
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  {event.description}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{event.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${event.price}</p>
          </div>
          <div>hu</div>
        </div>
      </div>
    </div>
  );
};
