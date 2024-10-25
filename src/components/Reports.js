import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Reports.css';

const Reports = () => {
  const leads = [
    { id: 1, date: '27/05/2022', businessName: 'Flores Peters Ven', phone: '07042283902', email: 'f_peters@gmail.com', status: 'Active' },
    { id: 2, date: '27/05/2022', businessName: 'Flores Peters Ven', phone: '07042283902', email: 'f_peters@gmail.com', status: 'Unverified' },
    { id: 3, date: '27/05/2022', businessName: 'Flores Peters Ven', phone: '07042283902', email: 'f_peters@gmail.com', status: 'Deactivated' },
    { id: 4, date: '27/05/2022', businessName: 'Flores Peters Ven', phone: '07042283902', email: 'f_peters@gmail.com', status: 'Pending Setup' },
    { id: 5, date: '27/05/2022', businessName: 'Flores Peters Ven', phone: '07042283902', email: 'f_peters@gmail.com', status: 'Active' },
    // Add additional leads...
  ];

  // Function to export filtered leads to PDF
  const exportLeadsToPDF = (filterStatus) => {
    const filteredLeads = leads.filter(lead => lead.status === filterStatus);

    const doc = new jsPDF();
    doc.text(`${filterStatus} Leads Report`, 14, 16);

    const tableColumn = ["Date", "Business Name", "Phone", "Email", "Status"];
    const tableRows = filteredLeads.map(lead => [lead.date, lead.businessName, lead.phone, lead.email, lead.status]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save(`${filterStatus.toLowerCase()}_leads.pdf`);
  };

  // Function to export filtered leads to CSV
  const exportFilteredLeadsToCSV = (filterStatus) => {
    const filteredLeads = leads.filter(lead => lead.status === filterStatus);

    const csvData = "Date,Business Name,Phone,Email,Status\n" +
      filteredLeads.map(lead => `${lead.date},${lead.businessName},${lead.phone},${lead.email},${lead.status}`).join("\n");

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${filterStatus.toLowerCase()}_leads.csv`);
  };

  // Function to export all leads to CSV
  const exportAllLeadsToCSV = () => {
    const csvData = "Date,Business Name,Phone,Email,Status\n" +
      leads.map(lead => `${lead.date},${lead.businessName},${lead.phone},${lead.email},${lead.status}`).join("\n");

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'all_leads.csv');
  };

  return (
    <div className="reports">
      <h1>Reports</h1>

      {/* Export All Leads Buttons */}
      <button
        onClick={exportAllLeadsToCSV}
        className="export-btn export-csv-btn"
      >
        Export All Leads to CSV
      </button>

      {/* Export by Status Buttons */}
      <div className="export-group">
        <h3>Export by Status</h3>

        <div className="export-buttons">
          <div className='export-buttons-container'>
            <button
              onClick={() => exportFilteredLeadsToCSV('Active')}
              className="export-btn export-csv-btn"
            >
              Export Active Leads to CSV
            </button>

            <button
              onClick={() => exportLeadsToPDF('Active')}
              className="export-btn export-pdf-btn"
            >
              Export Active Leads to PDF
            </button>

          </div>

        <div className='export-buttons-container'>
          <button
              onClick={() => exportFilteredLeadsToCSV('Deactivated')}
              className="export-btn export-csv-btn"
            >
              Export Deactivated Leads to CSV
          </button>

          <button
            onClick={() => exportLeadsToPDF('Deactivated')}
            className="export-btn export-pdf-btn"
          >
            Export Deactivated Leads to PDF
          </button>

        </div>
         <div className='export-buttons-container'>
            <button
              onClick={() => exportFilteredLeadsToCSV('Unverified')}
              className="export-btn export-csv-btn"
            >
              Export Unverified Leads to CSV
            </button>

            <button
              onClick={() => exportLeadsToPDF('Unverified')}
              className="export-btn export-pdf-btn"
            >
              Export Unverified Leads to PDF
            </button>

         </div>

        
        <div className='export-buttons-container'>
            <button
              onClick={() => exportFilteredLeadsToCSV('Pending Setup')}
              className="export-btn export-csv-btn"
            >
              Export Pending Setup Leads to CSV
            </button>

            <button
              onClick={() => exportLeadsToPDF('Pending Setup')}
              className="export-btn export-pdf-btn"
            >
              Export Pending Setup Leads to PDF
            </button>

        </div>
 
        </div>
      </div>
    </div>
  );
};

export default Reports;
