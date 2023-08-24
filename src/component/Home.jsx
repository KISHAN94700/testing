import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import CancelIcon from '@mui/icons-material/Cancel';

const Home = () => {

  const contacts = useSelector(state=>state);
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
    dispatch({type:"DELETE_CONTACT", payload:id});
    toast.success("Contact Deleted Successfully");
  };
  
  return (
    <div className='flex flex-col items-center border-2 border-black justify-center w-[85%] h-[91.2vh]'>
         <div className='mb-[50px] bg-emerald-50 shadow-2xl shadow-emerald-500/50'>
            <Link to="add" className='border-2 border-black text-2xl w-[200px] h-[45px] bg-green-300 shadow-xl shadow-green-500/50'>Create new contact</Link>
         </div>
         <div className='flex flex-wrap items-center justify-center w-[100%] h-[75%]'>
           {
            contacts.length !== 1?(
            contacts.map((contact,id)=>(
              <div key={id} className='m-3 w-[30%] h-[40%] homediv'>
                <div className='border-2 border-black m-4 text-center bg-emerald-50 shadow-xl shadow-emerald-500/50'>
                  <p>{id + 1}</p>
                  <p className='text-xl'>First Name: <span className='text-2xl text-teal-400'>{contact.fname}</span></p>
                  <p className='text-xl'>Last Name: <span className='text-2xl text-teal-400'>{contact.lname}</span></p>
                  <p className='text-xl'>Status: <span className='text-2xl text-teal-400'>{contact.isActive?"Active":"unActive"}</span></p>
                </div>
                <div className='flex flex-col items-center m-3'>
                  <div className="border-2 rounded-2xl border-black mb-3 w-[100px] text-center text-lg bg-green-300 shadow-xl shadow-green-500/50"><Link to={`/edit/${contact.id}`} >Edit</Link></div>
                  <div className='border-2 rounded-2xl border-black w-[100px] text-center text-lg bg-red-300 shadow-xl shadow-red-500/50'><button type='submit' onClick={()=>handleDelete(contact.id)} >Delete</button></div>
                </div>
              </div>
            ))):(<div className='flex items-center justify-center border-2 border-black bg-emerald-50 w-[30%] h-[25%] gap-8'>
                    <div className='ml-4'>
                      <CancelIcon fontSize='large'/>
                    </div>
                    <div className='text-xl font-bold'>
                      <p>No contact found please add contact from create contact button </p>
                    </div>
            </div>)
           }
         </div>
    </div>
  );
};

export default Home
