import React, { useState } from "react";
import axios from "axios";
import './BreakdownUpdateForm.css'; // Import a CSS file for styles

const BreakdownUpdateForm = ({ breakdown }) => {
  const [updatedBreakdown, setUpdatedBreakdown] = useState(breakdown);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state
    setSuccess(null); // Reset success state

    try {
      const response = await axios.put(
        `https://localhost:7100/Breakdown/update-breakdown`,
        updatedBreakdown
      );
      setSuccess("Breakdown updated successfully!");
      console.log(response.data);
    } catch (error) {
      setError("Failed to update breakdown. Please try again.");
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedBreakdown({ ...updatedBreakdown, [name]: value });
  };

  return (
    <form className="breakdown-update-form" onSubmit={handleSubmit}>
      <h2>Update Breakdown</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      <label>
        Breakdown Reference:
        <input
          type="text"
          name="BreakdownReference"
          value={updatedBreakdown.BreakdownReference}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Company Name:
        <input
          type="text"
          name="CompanyName"
          value={updatedBreakdown.CompanyName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Driver Name:
        <input
          type="text"
          name="DriverName"
          value={updatedBreakdown.DriverName}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Registration Number:
        <input
          type="text"
          name="RegistrationNumber"
          value={updatedBreakdown.RegistrationNumber}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Breakdown Date:
        <input
          type="datetime-local"
          name="BreakdownDate"
          value={updatedBreakdown.BreakdownDate}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Update Breakdown</button>
    </form>
  );
};

export default BreakdownUpdateForm;
