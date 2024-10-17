import React, { useState, useEffect } from "react";
import axios from "axios";

const BreakdownList = () => {
  const [breakdowns, setBreakdowns] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7100/Breakdown/get-breakdowns")
      .then((response) => {
        setBreakdowns(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {breakdowns.map((breakdown) => (
        <li key={breakdown.breakdownReference} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
          <strong>Reference:</strong> {breakdown.breakdownReference} <br />
          <strong>Company:</strong> {breakdown.companyName} <br />
          <strong>Driver:</strong> {breakdown.driverName} <br />
          <strong>Registration:</strong> {breakdown.registrationNumber} <br />
          <strong>Date:</strong> {new Date(breakdown.breakdownDate).toLocaleDateString()} {new Date(breakdown.breakdownDate).toLocaleTimeString()}
        </li>
      ))}
    </ul>
  );
  
};

export default BreakdownList;
