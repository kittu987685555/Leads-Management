import React from 'react';
import './Analytics.css';
import { FaChartBar, FaUserFriends, FaFileAlt } from 'react-icons/fa';

const Analytics = () => {
  return (
    <div className="analytics">
      <h2>Analytics Overview</h2>
      <div className="rowst">
        <div className="card">
          <div className="card-body">
            <FaChartBar size={40} color="#007bff" />
            <h5>Sales</h5>
            <p>$10,000</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <FaUserFriends size={40} color="#007bff" />
            <h5>Users</h5>
            <p>120</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <FaFileAlt size={40} color="#007bff" />
            <h5>Reports</h5>
            <p>20</p>
          </div>
        </div>
      </div>
      <button className="btn">View More</button>
    </div>
  );
};

export default Analytics;
