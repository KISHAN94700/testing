import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { toast } from "react-toastify";

const Editcontact = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [isActive, setIsactive] = useState(false);
  const [unActive, setIsunactive] = useState(true);
  const {id} = useParams();

  // Acess all the contacts then find from that id contact is exist or not
  const contacts = useSelector(state=>state);
  const curContact = contacts.find(contact=> contact.id === parseInt(id));
  
  useEffect(()=>{
    if(curContact){
      setFname(curContact.fname);
      setLname(curContact.lname);
      setIsactive(curContact.isActive);
      setIsunactive(curContact.unActive);
    }
  },[curContact]);

  const dispatch = useDispatch();
  const historyNavigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    // validation on input field if it is not filled by user gives warn
    if(!fname || !lname || !isActive){
      return toast.warning("Please fill all the fields!");
    }
    
    const data = {
      id:parseInt(id+1),
      fname,
      lname,
      isActive,
      unActive,
    };

    // dispatch type & payload from our contactreducer action (sec)

    dispatch({type:"UPDATE_CONTACT", payload:data});
    toast.success("Contact Updated Successfully!!");
    historyNavigate("/");
  };
  
  // it is for what is status click by user
  const handleActiveclick = () => {
    setIsactive(!isActive);
    setIsunactive(!unActive);
  };

  return (
    <div className='flex items-center justify-center border-2 w-[91.2vw]'>
     {
       curContact?(
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center justify-center w-[85%] h-[91.2vh]'>
             <div className='flex flex-col w-[450px] h-[400px] items-center justify-center'>
              <h1 className='text-2xl font-bold p-3'>Edit Student {id}</h1>
                 <div className='flex flex-col flex-wrap items-center border-2 border-black h-[200px] bg-emerald-50 shadow-2xl shadow-emerald-500/50 editdiv'>
                     <div>
                         <label for="fname" className='m-3 text-2xl font-bold'>First name: </label>
                         <input type="text" id="fname" name="fname" placeholder="your first name..."  
                          className='border-2 border-black w-[250px] h-[35px] mr-3 mt-5 p-2 einput' 
                          value={fname} 
                          onChange={e => setFname(e.target.value)}
                         /><br></br>
                         <label for="lname" className='m-3 text-2xl font-bold'>Last name: </label>
                         <input type="text" id="lname" name="lname" placeholder="your last name..."  
                          className='border-2 border-black w-[250px] h-[35px] mr-3 mt-5 p-2 ml-2' 
                          value={lname} 
                          onChange={e => setLname(e.target.value)}
                          />
                           <div className='flex gap-10 editstatus'>
                             <label for="radiobut" className='m-3 text-2xl font-bold'>Status: </label>
                                 <div className=''>
                                     <label for="radiobut" className='m-3 text-xl font-bold'>Active</label>
                                     <input type="radio" id="radiobut" 
                                     name="radiobut" 
                                     className='border-2 border-black w-[20px] h-[20px] mr-3 mt-5' 
                                     onClick={handleActiveclick}
                                     />
                                     <label for="radiobut" className='m-3 text-xl font-bold'>Inactive</label>
                                     <input type="radio" id="radiobut" name="radiobut" 
                                     className='border-2 border-black w-[20px] h-[20px] mr-3 mt-5' 
                                     onClick={handleActiveclick}
                                     />
                                 </div>
                           </div>
                    </div>
                 </div>
                <div className='flex mt-10'>
                 <div className='flex item-center justify-center text-[1.1vw] w-[180px] h-[35px] border-2 border-black font-bold bg-green-300 shadow-xl shadow-green-500/50'>
                     <button type='submit' className='text-center text-bold text-xl'>Update Contact</button>
                 </div>
                 <div className='flex item-center justify-center text-[1.1vw] w-[120px] h-[35px] border-2 border-black font-bold ml-5 bg-red-300 shadow-xl shadow-red-500/50'>
                     <Link to="/" className='text-center text-bold text-2xl'>Cancel</Link>
                 </div>
                </div>
             </div>
        </div>
        </form>
        ):(<h1 className='text-2xl'>Contact does not exist with this {id}</h1>)
     }   
    </div>
  );
};

export default Editcontact
