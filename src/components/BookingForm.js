import { useEffect, useState } from "react";

function BookingForm() {
  const [doctors, setDoctors] = useState([]);

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    physioExperience: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform booking form submission logic here
    console.log("Form Data Submitted:", formData);
    // You can also filter doctors based on the selected city here
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const filterDoctorsByCity = (city) => {
    const filtered = doctors.filter(
      (doctor) => doctor.city.toLowerCase() === city.toLowerCase()
    );
    setFilteredDoctors(filtered);
  };
  useEffect(() => {
    // Check for urlParam 'city' and override city in form data
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get("city");
    if (cityParam) {
      setFormData({ ...formData, city: cityParam });
      filterDoctorsByCity(cityParam);
    }
  }, [formData]);

  return (
    <>
      <section className="booking-form">
        <h2>Book a Consultation</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Form Steps */}
          <div className="form-step">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-step">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-step">
            <label>Chief Complaints</label>
            <textarea
              name="chiefComplaints"
              value={formData.chiefComplaints}
              onChange={handleInputChange}
              required
            />
            <label>Previous Experience with Physiotherapy</label>
            <select
              name="physioExperience"
              value={formData.physioExperience}
              onChange={handleInputChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button type="submit">Book Now</button>
        </form>
      </section>
    </>
  );
}

export default BookingForm;
