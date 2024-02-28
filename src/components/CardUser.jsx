import React from 'react'
import "./styles/cardUser.css"

const CardUser = ({user, deleteUser, setEditUser,setIsOpen}) => {

   const handleDelete = ()=>{
     deleteUser("/users", user.id);
   }
   
   const handleEdit = ()=>{
       setEditUser(user);
       setIsOpen(true);
   }
  return (
    <article className='card-container'>

        <h3>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='card-list'>
            <li><span className='card-date'>CORREO </span><br /><span>{user.email}</span></li>
            <li><span className='card-date'>CUMPLEAÑOS </span><br /><ion-icon name="cube"></ion-icon>  <span>{user.birthday}</span></li><hr />
        </ul>
        <div className='card-container-btn'>
        <button className='card-btn-delete' onClick={handleDelete}><box-icon name='trash'></box-icon></button>
        <button onClick={handleEdit}><box-icon name='edit-alt'></box-icon></button>
        </div>
        
    </article>
  )
}

export default CardUser