import "./App.css";
import { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import userContext, { MyProvider } from "./Store/store";
const EventDetails = lazy(() => import("./Components/EventDetails"));
const LoginDataLayer = lazy(() => import("./auth/LoginDataLayer"));
const AccessGuard = lazy(() => import("./auth/AccessGuard"));
const EventDataLayer = lazy(() => import("./Components/EventDataLayer"));

function App() {
  return (
    <Suspense fallback={<div>Loding...</div>}>
      <MyProvider>
        <Router basename="/EventBookingSystem">
          <Routes>
            <Route path="/" element={<LoginDataLayer />} />
            <Route path={"/app"} element={<AccessGuard><Outlet /></AccessGuard>}>
              <Route path="events" element={<EventDataLayer />} />
              <Route path={"events/:id"} element={<EventDetails />} />
            </Route>
          </Routes>
        </Router>
      </MyProvider>
    </Suspense>
  );
}

export default App;
