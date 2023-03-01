import { useState,useEffect } from 'react';
import './App.css';
import UserTable from './UserTable';


function App() {

  const [users,setUsers]= useState([]);

  const handleDelete = (userIds) => {
    const updatedUsers = users.filter(user => !userIds.includes(user.id)); 
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
      <UserTable users={users} handleDelete={handleDelete} />  
    </main>
  );
}


export default App;
