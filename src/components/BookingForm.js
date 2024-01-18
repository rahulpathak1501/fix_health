import { useEffect, useState } from "react";
import doctorsData from "../json/doctorsData.json";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    physioExperience: "",
    selectedDoctor: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank You for your booking");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "physioExperience" && parseInt(formData.age, 10) < 40) {
      setFormData({ ...formData, [name]: "no" });
      return;
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const filterDoctorsByCity = (city) => {
    const filtered = doctors.filter(
      (doctor) => doctor.city.toLowerCase() === city.toLowerCase()
    );
    setFilteredDoctors(filtered);
  };

  useEffect(() => {
    setDoctors(doctorsData);

    // Check for urlParam 'city' and override city in form data
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get("city");
    console.log(window.location.search);
    if (cityParam) {
      setFormData({ ...formData, city: cityParam });
      filterDoctorsByCity(cityParam);
    } else {
      // If no city parameter in URL, use the city entered in the form
      filterDoctorsByCity(formData.city);
    }
  }, [formData]);

  const isAgeLessThanForty = parseInt(formData.age, 10) < 40;

  return (
    <>
      <section className="booking-form">
        <h2>Book a Consultation</h2>
        <form onSubmit={handleFormSubmit}>
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
            {!isAgeLessThanForty && (
              <>
                <label>Previous Experience with Physiotherapy</label>
                <select
                  name="physioExperience"
                  value={formData.physioExperience}
                  onChange={handleInputChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </>
            )}
          </div>

          <div className="form-step">
            <label>Select Doctor</label>
            <select
              name="selectedDoctor"
              value={formData.selectedDoctor}
              onChange={handleInputChange}
            >
              {filteredDoctors.length === 0 && (
                <>
                  <option value="">Select a doctor</option>
                  <option value="" disabled="true">
                    Type Your City Name First / We Don't provide service in Your
                    City
                  </option>
                </>
              )}
              {filteredDoctors.length > 0 && (
                <>
                  <option value="">Select a doctor</option>
                  {filteredDoctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.expertise} - {doctor.city}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>

          <button type="submit">Book Now</button>
        </form>
      </section>
    </>
  );
}

export default BookingForm;
