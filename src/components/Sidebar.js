
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Sidebar = () => (
  <div className="sidebar">
    <h2>LeadManagement</h2>
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/leads">
            <FontAwesomeIcon icon={faUsers} /> Leads
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <FontAwesomeIcon icon={faChartLine} /> Analytics
          </Link>
        </li>
        <li>
          <Link to="/reports">
            <FontAwesomeIcon icon={faFileAlt} /> Reports
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
