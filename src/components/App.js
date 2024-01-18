import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchDoctors } from "./actions";

import BookingForm from "./BookingForm";

function App(store) {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyapi.com/doctors");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: "FETCH_DOCTORS_SUCCESS", payload: data });
      } catch (error) {
        console.error("Error fetching doctors:", error.message);
        dispatch({ type: "FETCH_DOCTORS_FAILURE", payload: error.message });
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="app">
      <section className="hero">
        <h1>Welcome to Fix Health</h1>
      </section>

      {/* Consultation Booking Form Section */}
      <BookingForm />
      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        {/* Add your testimonials component here */}
      </section>
    </div>
  );
}

export default App;
