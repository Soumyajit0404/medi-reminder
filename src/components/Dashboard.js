// src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to MediRemind, {user.email}!</h2>
      <p>Your medication reminders will appear here.</p>
      <div className="dashboard-placeholder">
        <p>You have no reminders set yet.</p>
        <button className="add-reminder-btn">Add Your First Reminder</button>
      </div>
    </div>
  );
};

export default Dashboard;