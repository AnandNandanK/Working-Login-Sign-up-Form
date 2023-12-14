import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginForm = ({setIsLogin}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });



    const [showpass, setShowpass] = useState(false);


    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })

    }
    
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Login");
        setIsLogin(true);
        navigate('/dashboard');

        console.log("Printing Login Data",formData);
    }



    return (
        <div className="text-white">
            <form onSubmit={submitHandler} 
                className='flex flex-col w-full gap-y-4'>

                <label className='w-rkull'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.3rem]'>Email Address 
                    <sup className='text-pink-200'>*</sup></p>

                    <input
                    required
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='  Enter email id'
                        name='email'
                        className="bg-slate-800 rounded-[0.2rem] w-full p-[9px]"
                    />
                </label>

                <label className='relative'>
                    <p className=' text-[0.875rem] text-white mb-1 leading-[1.3rem]'>Enter Password <sup>*</sup></p>

                    <input
                    required
                        type={showpass ? ('text') : ('password')}
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password '
                        name='password'
                        className="bg-slate-800 rounded-[0.2rem] w-full p-[9px]"

                    />

                    <span
                    className='absolute right-3 top-[38px]  cursor-pointer'
                     onClick={() => { setShowpass((prev) => !prev) }}>
                        {showpass ? (<IoMdEye fontSize={20} />) : (<IoMdEyeOff fontSize={20} />)}
                    </span>
                </label>

                <Link to='/forgotpage'>
                    <p className="font-xs text-blue-200 max-w-max ml-auto underline">Forgot Password</p>
                    </Link>
                


                <button className="bg-yellow-300 text-black rounded-[8px] px-[12px] font-semiboldb  py-[8px]">Login </button>
            </form>

        </div>
    );
}

export default LoginForm;
