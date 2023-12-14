import React from 'react';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { useNavigate } from "react-router-dom"


const SignUpform = ({setIsLogin}) => {



    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        password: "",
        ename: "",
        confirmpassword:""
    });

    const [accountType,setAccountType]=useState('Student');
    const [showPass, setShowPass] = useState(false);
    const [ConfirmPass, setConfirmPass] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })

    }

    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault();
        if (formData.password!==formData.confirmpassword) {
            console.log("NOt Match");
            toast.error('Password Not Match');   
        } else {
            console.log('match');
            toast.success(`Account Created As ${accountType}`);
            navigate('/dashboard');
            setIsLogin(true);
           
        }

     
        const finalData={
                ...formData,
                accountType
        }

        console.log("Printing Form Data ");
        console.log(finalData);


        console.log("Account Created");

        
    }



    return (
        <div className='text-white'>
            
            <div className="flex bg-slate-700 p-1 gap-x-1 my-6 rounded-full max-w-max">

                <button onClick={()=>setAccountType("Student")} 
                className={`${accountType==="Student"?("bg-slate-800 py-2 px-5 rounded-full") :
                ("bg-transparent text-slate-200 py-2 px-5 rounded-full transition-all duration-200")}`}> Student </button>


                <button onClick={()=>setAccountType("instructor")}
                 className={`${accountType==="instructor"?("bg-slate-800 py-2 px-5 rounded-full"):
                 ("bg-transparent text-slate-200 py-2 px-5 rounded-full transition-all duration-200")}`}> Instructor </button>

            </div>
                <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-3 mt-[15px] '>
                    {/* First Name and Last Name */}
                        <div className="flex justify-between ">
                            <label className='mr-1'>
                            <p className='text-[0.875rem] text-white mb-1 leading-[1.3rem] '>First Name<sup>*</sup></p>

                            <input
                                required
                                type='text'
                                name='fname'
                                placeholder='Enter First Name'
                                onChange={changeHandler}
                                value={formData.fname}

                                className="bg-slate-800 rounded-[0.2rem] w-full p-[9px] border-none outline-none "

                            ></input>
                            </label>
                        
                            <label>
                            <p className='text-[0.875rem] text-white mb-1 leading-[1.3rem]'>First Name<sup>*</sup></p>
                            <input
                                required

                                type='text'
                                name='lname'
                                placeholder='Enter Last name'
                                onChange={changeHandler}
                                value={formData.lname}
                                
                        className="bg-slate-800 rounded-[0.2rem] w-full p-[9px]  outline-none"

                            ></input>
                            </label>

                        </div>

                        <div className='flex flex-col gap-3 '> 
                                    {/* Email Address */}
                                    <label className=''>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.3rem]'>Email Address<sup>*</sup></p>

                        <input
                            required
                            type='email'
                            name='ename'
                            placeholder='Enter Your Email'
                            onChange={changeHandler}
                            value={formData.ename}

                            className="bg-slate-800 rounded-[0.2rem] w-full p-[9px] outline-none "
                        
                        ></input>
                            </label>


                        {/* Creact Password and Confirm Password*/}
                        <label className='relative'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.3rem]'>Create Password<sup>*</sup></p>

                        <input
                            required
                            type={showPass ? ('text') : ('password')}
                            name='password'
                            placeholder='Enter Password'
                            onChange={changeHandler}
                            value={formData.password}
                            className="bg-slate-800 rounded-[0.2rem] w-full p-[9px] outline-none"

                        ></input>

                        <span 
                        className='absolute right-3 cursor-pointer top-9' 
                        onClick={() => { setShowPass((prev) => !prev) }}
                        >{showPass ? (<IoMdEye />) : (<IoMdEyeOff />)}</span>
                             </label>

                         <label className='relative'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.3rem]'>Confirm Password<sup>*</sup></p>

                        <input
                            required
                            type={ConfirmPass ? ('text') : ('password')}
                            name='confirmpassword'
                            placeholder='Confirm Password'
                            onChange={changeHandler}
                            value={formData.confirmpassword}
                            className="bg-slate-800 rounded-[0.2rem] w-full p-[9px] outline-none"

                            
                        ></input>

                        <span 
                        className='absolute right-3 top-9  cursor-pointer'
                        onClick={() => { setConfirmPass((prev) => !prev) }}>
                            {ConfirmPass ? (<IoMdEye/>) : (<IoMdEyeOff/>)}</span>
                         </label>

                        </div>
                         
                    
                    <button className="bg-yellow-300 text-black rounded-[8px] px-[12px] font-semiboldb  py-[8px]">Creact Accout</button>
                </form>
           
        </div>
    );
}

export default SignUpform;
