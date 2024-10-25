import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Reports from './components/Reports';
import 'bootstrap/dist/css/bootstrap.min.css';
import Analytics from './components/Analytics';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics analytics={{ total: 15, Active: 6, Deactivated: 4, "Pending Setup": 5 }} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;