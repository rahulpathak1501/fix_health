import { useEffect, useState } from "react";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTestimonials([
      {
        name: "Nishith Patel",
        age: 66,
        profession: "Business Owner",
        feedback: "Fixed back pain from home",
      },
      {
        name: "Rashmi",
        age: 43,
        profession: "HR Professional",
        feedback:
          "Sitting job back pain eased. Quality, pocket-friendly & consistent care is what Fix Health stands for.",
      },
      {
        name: "Pranjal Deep",
        age: 29,
        profession: "Experience Designer, McKinsey",
        feedback:
          "They worked around time zone variations to accommodate my schedule. Injury of 12 years is fixed.",
      },
      {
        name: "Dr. Nasir Kamal",
        age: 64,
        profession: "General Physician",
        feedback:
          "6 months with Fix Health was less than 1 month of my insurance co-pay. Effective post-surgery rehab.",
      },
      {
        name: "Rajesh Chainani",
        age: 54,
        profession: "Senior Director, Cisco",
        feedback:
          "Loved the personal touch of the Physio's, Doctors, and care manager. Surgery-free neck pain relief.",
      },
      {
        name: "Neil Pinherio",
        age: 42,
        profession: "Consultant",
        feedback:
          "I realized treatment could be done remotely, eliminating the need for in-person visits.",
      },
    ]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Slide to the next testimonial
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials]);

  //   const handlePrevClick = () => {
  //     setCurrentIndex(
  //       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
  //     );
  //   };

  //   const handleNextClick = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   };

  return (
    <>
      <div className="testimonials">
        <h2 style={{ textAlign: `center`, width: `100%` }}>
          Our Patient Recovery Stories
        </h2>
        <div
          className="testimonial-container"
          style={{
            transform: `translateX(${-currentIndex * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <h3>{testimonial.name}</h3>
              <p>{`${testimonial.age}, ${testimonial.profession}`}</p>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
