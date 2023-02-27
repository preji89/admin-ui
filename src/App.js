import { useState,useEffect } from 'react';
import {Button,Table} from 'react-bootstrap';
import './App.css';


function App() {

  const [users,setUsers]= useState([]);

  useEffect(()=>{
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    .then((res)=>res.json())
    .then((json)=>{
      setUsers(json);

    });
  },[]);
  return (
    <main className="App">
      <Table striped bordered hover size='xl'style={{"table-layout":"auto","width":"100%"}}>
        <thead><tr>
          <th><input type="checkbox"></input></th>
           <th>Name</th>
           <th>Email</th>
           <th>Role</th>
           <th>Actions</th>
        </tr></thead>
        <tbody>
        {users.map((user)=>(
             <tr key={user.id}>
            <th><input type="checkbox"></input></th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
            <i className="bi bi-pencil-square"/>
            {"  "}
            <i className='bi bi-trash' style={{color:"crimson"}}/>
    
            </td>
            </tr>

          ))}
        </tbody>
          
      </Table>
      <Button variant="danger">Delete Selected</Button>
      
    </main>
  );
}


export default App;
