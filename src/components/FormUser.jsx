import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import "./styles/formUser.css";
const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {
    

    const {handleSubmit, register,  reset} = useForm();
    //console.log(editUser)

    useEffect(() => {
      reset(editUser);
    }, [editUser]);
    

    const submit = (data)=>{

        if(editUser){
           updateUser("/users", editUser.id, data)
           setEditUser();
        } else{
            createUser("/users", data)
        }
        createUser("/users/", data);
        reset({
          email: "",
          password: "",
          first_name:"",
          last_name:"",
          birthday: "",

        })
        setIsOpen(!isOpen)
    }

    const handleClose = ()=>{
        setIsOpen(!isOpen)
        reset({
            email: "",
            password: "",
            first_name:"",
            last_name:"",
            birthday: "",
  
          })
    }

  return (
    <article className={`form-background ${isOpen&&"able"}`}>

        <form className='form-container' onSubmit={handleSubmit(submit)}>
            <div className='form-close' onClick={handleClose}><ion-icon name="close-circle-outline"></ion-icon></div>
             <h2 className='form-title'>Nuevo Usuario</h2>
            <div className='form-item'>
                <label htmlFor="email">Email</label>
                <input  {...register("email")} id='email' type="email" />
            </div>
            <div className='form-item'>
                <label htmlFor="password">Password</label>
                <input  {...register("password")} id='password' type="password" />
            </div>
            <div className='form-item'>
                <label htmlFor="first_name">first name</label>
                <input  {...register("first_name")} id='first_name' type="text" />
            </div>
            <div className='form-item'>
                <label htmlFor="last_name">Last name</label>
                <input  {...register("last_name")} id='last_name' type="text" />
            </div>
            <div className='form-item'>
                <label htmlFor="birthday">Birthday</label>
                <input  {...register("birthday")} id='birthday' type="date" />
            </div>
            <button className='form-btn'>Submit</button>
        </form>
    </article>
  )
}

export default FormUser;