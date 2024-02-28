import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'

function App() {
  const [editUser, setEditUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const url = "https://users-crud.academlo.tech/"

 const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

 useEffect(() => {
   getUsers("/users/")
 }, [])

 const handleOpen = ()=>{
   setIsOpen(true)
 }

  return (
    <div className='app-container'>
      <div className='app-header'>
      <h1>Crud de usuarios</h1>
      <button className='app-btn-create' onClick={handleOpen}>+ crear nuevo usuario</button>
      </div>
      <div  >
      <FormUser
        createUser={createUser}
        editUser ={editUser}
        updateUser= {updateUser}
        setEditUser = {setEditUser}
        isOpen ={isOpen}
        setIsOpen ={setIsOpen}
      />
      <div className='app-cards' >
        {
          users?.map(user=>(
            <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}
            />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default App
