import { useState,useEffect } from 'react';
import './App.css';
import UserTable from './UserTable';


function App() {

  const [users,setUsers]= useState([]);

  const handleDelete = (userIds) => {
    const updatedUsers = users.filter(user => !userIds.includes(user.id)); 
    setUsers(updatedUsers);   
  }

  const handleEdit= (userId,data) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, ...data };
      }
      return user;
    });
    setUsers(updatedUsers);
  };


  useEffect(()=>{
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    .then((res)=>res.json())
    .then((json)=>{
      setUsers(json);
    });
  },[]);

  return (
    <main>
      <h1>Admin-UI</h1>
      <UserTable users={users} handleDelete={handleDelete} handleEdit={handleEdit} />  
    </main>
  );
}


export default App;
