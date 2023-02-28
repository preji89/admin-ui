import React, { useState } from 'react';
import { Button, Table, Pagination, FormControl } from 'react-bootstrap';

function UserTable({users,handleDelete}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = users.filter((item) => {
    return Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageNumberChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const renderTableRows = () => {
    return currentItems.map((item, index) => (
      <tr key={index}>
        <td><input type="checkbox" id={item.id}/></td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
        <td>
            <i className="bi bi-pencil-square"style={{color:"gray",cursor:"pointer"}}/>   {"   "}
            <i className='bi bi-trash' style={{color:"crimson",cursor:"pointer"}} onClick={()=>handleDelete(item.id)}/>
        </td>
      </tr>
    ));
  };

  
  const renderPaginationItems = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          id={i}
          active={i === currentPage}
          onClick={handlePageNumberChange}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <FormControl
        type="text"
        placeholder="Search by name, email or role"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className='data-table'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th><input type="checkbox" id="all"/></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </Table>
      </div>
      <div className='footer'>
      <Button size="sm" variant="danger">Delete Selected</Button>
      <Pagination>
      <Pagination.First onClick={()=>{setCurrentPage(1)}} />
      <Pagination.Prev onClick={()=>{currentPage===1?setCurrentPage(1):setCurrentPage(currentPage-1)}}/>
        {renderPaginationItems()}
      <Pagination.Next onClick={()=>{currentPage===totalPages?setCurrentPage(totalPages):setCurrentPage(currentPage+1)}}/>
      <Pagination.Last onClick={()=>{setCurrentPage(totalPages)}}/>  
     </Pagination>
      </div>
      
    </div>
  );
}

export default UserTable;
