import React, { useState } from "react";
import axios from "axios";
import './BreakdownForm.css'; // Import a CSS file for styles

const BreakdownForm = () => {
  const [breakdown, setBreakdown] = useState({
    BreakdownReference: "",
    CompanyName: "",
    DriverName: "",
    RegistrationNumber: "",
    BreakdownDate: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    breakdown.BreakdownReference = ""; // Reset BreakdownReference if needed

    try {
      const response = await axios.post(
        "https://localhost:7100/Breakdown/create-breakdown",
        breakdown
      );
      setSuccess("Breakdown created successfully!");
      console.log(response.data);
      // Optionally reset the form
      setBreakdown({
        BreakdownReference: "",
        CompanyName: "",
        DriverName: "",
        RegistrationNumber: "",
        BreakdownDate: "",
      });
    } catch (error) {
      setError("Failed to create breakdown. Please try again.");
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBreakdown({ ...breakdown, [name]: value });
  };

  return (
    <form className="breakdown-form" onSubmit={handleSubmit}>
      <h2>Create Breakdown</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      <label>
        Company Name:
        <input
          type="text"
          name="CompanyName"
          value={breakdown.CompanyName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Driver Name:
        <input
          type="text"
          name="DriverName"
          value={breakdown.DriverName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Registration Number:
        <input
          type="text"
          name="RegistrationNumber"
          value={breakdown.RegistrationNumber}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Breakdown Date:
        <input
          type="datetime-local"
          name="BreakdownDate"
          value={breakdown.BreakdownDate}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Create Breakdown</button>
    </form>
  );
};

export default BreakdownForm;
