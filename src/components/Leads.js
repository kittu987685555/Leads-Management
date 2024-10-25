import React, { useState } from 'react';
import { Badge, Table, Pagination, Form, Row, Col } from 'react-bootstrap';

const Leads = () => {
  const [leads] = useState([
    
      { id: 1, date: '27/05/2022', businessName: 'Flores Peters Ven', phone: '07042283902', email: 'f_peters@gmail.com', status: 'Active' },
      { id: 2, date: '28/05/2022', businessName: 'Johnson Supplies Ltd', phone: '08012345678', email: 'johnson.supplies@gmail.com', status: 'Unverified' },
      { id: 3, date: '29/05/2022', businessName: 'Green World Ventures', phone: '09087654321', email: 'greenworld@ventures.com', status: 'Deactivated' },
      { id: 4, date: '30/05/2022', businessName: 'Bright Tech Solutions', phone: '08123456789', email: 'info@brighttech.com', status: 'Pending Setup' },
      { id: 5, date: '31/05/2022', businessName: 'Blue Wave Enterprises', phone: '07098765432', email: 'contact@bluewave.com', status: 'Active' },
      { id: 6, date: '01/06/2022', businessName: 'Sunrise Traders', phone: '09099887766', email: 'traders@sunrise.com', status: 'Deactivated' },
      { id: 7, date: '02/06/2022', businessName: 'Top Gear Autos', phone: '08011223344', email: 'support@topgear.com', status: 'Unverified' },
      { id: 8, date: '03/06/2022', businessName: 'Eco Friendly Co.', phone: '07055443322', email: 'service@ecofriendly.com', status: 'Active' },
      { id: 9, date: '04/06/2022', businessName: 'Digital Spark Agency', phone: '08199887755', email: 'hello@digitalspark.com', status: 'Pending Setup' },
      { id: 10, date: '05/06/2022', businessName: 'Mountain Peak Trading', phone: '08033445566', email: 'info@mountainpeak.com', status: 'Active' },
      { id: 11, date: '06/06/2022', businessName: 'Urban Style Clothing', phone: '07044332211', email: 'sales@urbanstyle.com', status: 'Unverified' },
      { id: 12, date: '07/06/2022', businessName: 'Oceanic Seafoods', phone: '08112233445', email: 'contact@oceanicseafoods.com', status: 'Pending Setup' },
      { id: 13, date: '08/06/2022', businessName: 'Tech Innovators Ltd', phone: '09066778899', email: 'support@techinnovators.com', status: 'Deactivated' },
      { id: 14, date: '09/06/2022', businessName: 'Vintage Furniture Co.', phone: '08022334455', email: 'info@vintagefurniture.com', status: 'Active' }
  

  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  const [filters, setFilters] = useState({
    date: '',
    businessName: '',
    phone: '',
    email: '',
    status: '',
  });

  // Filtered Leads
  const filteredLeads = leads.filter((lead) =>
    (!filters.date || lead.date.includes(filters.date)) &&
    (!filters.businessName || lead.businessName.toLowerCase().includes(filters.businessName.toLowerCase())) &&
    (!filters.phone || lead.phone.includes(filters.phone)) &&
    (!filters.email || lead.email.toLowerCase().includes(filters.email.toLowerCase())) &&
    (!filters.status || lead.status.toLowerCase().includes(filters.status.toLowerCase()))
  );

  const displayLeads = filteredLeads.slice((currentPage - 1) * leadsPerPage, currentPage * leadsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1); // Reset to first page after filtering
  };

  return (
    <div className="leads">
      <h1>Leads</h1>

      {/* Filter Section */}
      <Row className="mb-4">
        <Col md={2}>
          <Form.Control
            type="text"
            placeholder="Filter by Date"
            name="date"
            value={filters.date}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            type="text"
            placeholder="Filter by Business Name"
            name="businessName"
            value={filters.businessName}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            type="text"
            placeholder="Filter by Phone"
            name="phone"
            value={filters.phone}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            placeholder="Filter by Email"
            name="email"
            value={filters.email}
            onChange={handleFilterChange}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            as="select"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Filter by Status</option>
            <option value="Active">Active</option>
            <option value="Deactivated">Deactivated</option>
            <option value="Unverified">Unverified</option>
            <option value="Pending Setup">Pending Setup</option>
          </Form.Control>
        </Col>
      </Row>

      {/* Leads Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Business Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayLeads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.date}</td>
              <td>{lead.businessName}</td>
              <td>{lead.phone}</td>
              <td>{lead.email}</td>
              <td>
                <Badge
                  bg={
                    lead.status === 'Active' ? 'success' :
                    lead.status === 'Deactivated' ? 'danger' :
                    lead.status === 'Pending Setup' ? 'warning' : 'secondary'
                  }
                >
                  {lead.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Leads;
