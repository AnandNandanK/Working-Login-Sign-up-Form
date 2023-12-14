import React from 'react';
import LoginForm from './LoginForm';
import SignUpform from './SignUpform';
// import {  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Template = ( {title,desc1,desc2,image,formType,setIsLogin,isLogin}) => {
    // console.log(isLogin);
    return (
        <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between'>
            <div className='w-11/12 max-w-[450px] p-2 mx-auto'>
                <h1 className='text-white font-semibold text-[1.874rem] '>{title}</h1>
                <p className='text-[1.125rem} leading-[1.62rem] mt4'>
                    <span className="text-gray-400">{desc1}</span>
                    <span className="text-blue-100 italic"> {desc2}</span>
                </p>

                {formType==='Sign-up'?(<LoginForm isLogin={isLogin} setIsLogin={setIsLogin}/>):(<SignUpform setIsLogin={setIsLogin}/>)}

                <div className='flex w-full items-center my-4 gap-x-3'>

                     <div className=' h-[1px] bg-white w-[100%]'> </div> 

                         <p className="text-gray-700">OR</p>

                    <div className='h-[1px] bg-white w-[100%]'> </div> 
                    

                </div>

                <button className="w-full justify-center border-2 border-gray-600 rounded-md py-2 font-medium px-5 flex items-center gap-x-2"> 
                <FcGoogle/>
                    <p className="text-gray-500">Sign up with google</p>
                </button>
            </div>

            <div className='w-11/12 max-w-[450px] p-2 img'>
                <img 
                src={image}  
                alt='Pattern' 
                width={558}  
                height={504} 
                loading='lazy'

                ></img>
            </div>
        </div>
    );
}

export default Template;
