import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Addcontact = () => {
  // Add validation
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [isActive, setIsactive] = useState(false);
  const [unActive, setIsunactive] = useState(true);

  const contacts = useSelector((state)=>state);
  const dispatch = useDispatch();
  const historyNavigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    // validation on input field if it is not filled by user gives warn
    if(!fname || !lname || !isActive){
      return toast.warning("Please fill all the fields!");
    }
    
    const data = {
      id:contacts[contacts.length-1].id + 1,
      fname,
      lname,
      isActive,
      unActive,
    };

    // dispatch type & payload from our contactreducer action (sec)

    dispatch({type:"ADD_CONTACT", payload:data});
    toast.success("Contact created successfully!!");
    historyNavigate("/");
  };
  
  // it is for what is status click by user
  const handleActiveclick = () => {
    setIsactive(!isActive);
    setIsunactive(!unActive);
  };

  return (
    <>
       <div className='flex flex-col items-center justify-center w-[85%] h-[91.2vh]'>
         <form onSubmit={handleSubmit}>
            <div className='flex flex-col w-[450px] h-[400px] items-center justify-center'>
              <h1 className='text-2xl font-bold p-3'>Create Contact Screen</h1>
                <div className='flex flex-col flex-wrap items-center border-2 border-black h-[200px] bg-emerald-50 shadow-2xl shadow-emerald-500/50 adddiv'>
                    
                    <div>
                        <label for="fname" className='m-3 text-2xl font-bold'>First name: </label>
                        <input type="text" id="fname" name="fname" 
                         value={fname} 
                         onChange={e => setFname(e.target.value)} 
                         placeholder="your first name..."  
                         className='border-2 border-black w-[250px] h-[35px] mr-3 mt-5 p-2 finput' 
                        /><br></br>
                         <label for="lname" className='m-3 text-2xl font-bold'>Last name: </label>
                        <input type="text" id="lname" name="lname"
                         value={lname} 
                         onChange={e => setLname(e.target.value)}
                         placeholder="your last name..."  
                         className='border-2 border-black w-[250px] h-[35px] mr-3 mt-5 p-2 ml-2' 
                        />
                        <div className='flex gap-10'>
                          <label for="radiobut" className='m-3 text-2xl font-bold'>Status: </label>
                            <div className=''>
                              <label for="radiobut" className='m-3 text-xl font-bold'>Active</label>
                              <input type="radio" id="radiobut" name="radiobut" className='border-2 border-black w-[20px] h-[20px] mr-3 mt-5' 
                                onClick={handleActiveclick}
                              />
                              <label for="radiobut" className='m-3 text-xl font-bold'>Inactive</label>
                              <input type="radio" id="radiobut" name="radiobut" className='border-2 border-black w-[20px] h-[20px] mr-3 mt-5' 
                              onClick={handleActiveclick}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex item-center justify-center text-[1.1vw] w-[300px] h-[35px] mt-10'>
                    <button type='submit' className='text-center text-[1.2vw] w-[130px] border-2 border-black font-bold bg-green-300 shadow-xl shadow-green-500/50 addbut'>Save Contact</button>
                    <Link to="/" className='text-center text-[1.2vw] w-[80px] text-2xl border-2 border-black font-bold ml-4 bg-red-300 shadow-xl shadow-red-500/50 addbut'>Cancel</Link>
                </div>
            </div>
          </form>
        </div>
    </>
  );
};

export default Addcontact
