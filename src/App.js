import { useState,useEffect } from 'react';
import './App.css';
import UserTable from './UserTable';


function App() {

  const [users,setUsers]= useState([]);

  const handleDelete = (userId) => {
    const updatedUsers = [...users];
    const index = users.findIndex((user) => user.id === userId);
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  }

  useEffect(()=>{
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    .then((res)=>res.json())
    .then((json)=>{
      setUsers(json);
    });
  },[]);

  return (
    <main>
      <UserTable users={users} handleDelete={handleDelete}/>  
    </main>
  );
}


export default App;
