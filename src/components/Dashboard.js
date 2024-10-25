import React, { useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
// import Navbar from './Navbar'; // Import Navbar

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const leadSourceData = {
    labels: ['Social Media', 'Website', 'Referrals', 'Events'],
    datasets: [
      {
        label: 'Lead Sources',
        data: [35, 45, 15, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  const leadStatusData = {
    labels: ['Active', 'Pending', 'Deactivated'],
    datasets: [
      {
        data: [10, 5, 3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const leadGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Leads Over Time',
        data: [10, 20, 30, 25, 35, 40],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const leads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', company: 'Company A', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', company: 'Company B', status: 'Pending' },
    { id: 3, name: 'Robert Brown', email: 'robert@example.com', company: 'Company C', status: 'Deactivated' },
    { id: 1, name: 'John Doe', email: 'john@example.com', company: 'Company A', status: 'Active' },
   
  ];

  const totalLeads = 100;
  const convertedLeads = 40;
  const conversionRate = (convertedLeads / totalLeads) * 100;

  // Filter leads based on the search term
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Navbar */}
      {/* <Navbar />

      <h1 className="dashboard-title">Lead Management Dashboard</h1> */}

      {/* Conversion Section */}
      <div id="conversion-section" className="conversion-section">
        <h2 className="conversion-title">Conversion Rate</h2>
        <p className="conversion-value">{conversionRate.toFixed(2)}%</p>
      </div>

      {/* Additional KPI Cards */}
      <div className="kpi-section">
        {/* Total Leads Card */}
        <div className="kpi-card">
          <h2>Total Leads</h2>
          <p className="kpi-value">{totalLeads}</p>
        </div>

        {/* Converted Leads Card */}
        <div className="kpi-card">
          <h2>Converted Leads</h2>
          <p className="kpi-value">{convertedLeads}</p>
        </div>

        {/* You can add more KPI cards similarly */}
      </div>

      <div className="dashboard-grid">
        {/* Lead Source Breakdown (Bar Chart) */}
        <div id="lead-source-section" className="widget">
          <h2>Lead Source Breakdown</h2>
          <Bar data={leadSourceData} />
        </div>

        {/* Lead Status Overview (Doughnut Chart) */}
        <div id="lead-status-section" className="widget">
          <h2>Lead Status Overview</h2>
          <Doughnut data={leadStatusData} />
        </div>

        {/* Lead Growth Over Time (Line Chart) */}
        <div id="lead-growth-section" className="widget">
          <h2>Lead Growth Over Time</h2>
          <Line data={leadGrowthData} />
        </div>

        {/* Recent Leads Table with Search Bar */}
        <div id="recent-leads-section" className="widget leads-widget">
          <h2>Recent Leads</h2>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />

          <table className="leads-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.company}</td>
                  <td>{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
