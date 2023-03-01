import { useState } from "react";

function TableRow({item,handleEdit,handleDelete,handleSelectUserRow,selectedUsers}) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(item);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEdit(item.id,formData)
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value});
    };

    return ( 
    <tr>
        <td><input type="checkbox" checked={selectedUsers.includes(item.id)} onChange={e => handleSelectUserRow(e, item.id)} /></td>
        <td>{isEditing ? <input type="text" name="name" value={formData.name} onChange={handleChange}/>:item.name}</td>
        <td>{isEditing ? <input type="email" name="email" value={formData.email} onChange={handleChange}/>:item.email}</td>
        <td>{isEditing ? <input type="text" name="role" value={formData.role} onChange={handleChange}/>:item.role}</td>
        <td>
            {isEditing? (
            <>
                <i className="bi bi-check-square-fill" style={{color:"green",cursor:"pointer"}} onClick={handleSubmit}/>   {"   "}
                <i className="bi bi-x-square-fill" style={{color:"gray",cursor:"pointer"}} onClick={handleCancelClick}/> 
            </>
            
            ):(
            <>
                <i className="bi bi-pencil-square"style={{color:"gray",cursor:"pointer"}} onClick={handleEditClick}/>   {"   "}
                <i className='bi bi-trash' style={{color:"crimson",cursor:"pointer"}} onClick={()=>handleDelete([item.id])}/>
            </>
            )}
        </td>
      </tr> );
}

export default TableRow;