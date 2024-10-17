import React from "react";
import BreakdownForm from "./BreakdownForm";
import BreakdownList from "./BreakdownList";
import BreakdownUpdateForm from "./BreakdownUpdateForm";
import './App.css'; // Import a CSS file for styles

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Breakdown Application</h1>
      <div className="form-container">
        <BreakdownForm />
      </div>
      <div className="list-container">
        <h2>Breakdown List</h2>
        <BreakdownList />
      </div>
      <div className="update-container">
        <h2>Update Breakdown</h2>
        <BreakdownUpdateForm
          breakdown={{
            BreakdownReference: "12345",
            CompanyName: "ABC Inc.",
            DriverName: "John Doe",
            RegistrationNumber: "ABC123",
            BreakdownDate: "2023-03-01T12:00:00",
          }}
        />
      </div>
    </div>
  );
};

export default App;
