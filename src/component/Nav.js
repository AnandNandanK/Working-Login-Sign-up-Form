import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import image from './logo.png'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";



const Nav = (props) => {

  const isLogin = props.isLogin;
  const setIsLogin = props.setIsLogin;


  const navigate = useNavigate();

  function loghandler() {
    setIsLogin(false);
    toast.success('Log OUt');
    navigate('/home');
  }

  

  const [navicon, setNavIcon] = useState(false);

  function switchHandler(){
       setNavIcon(()=>{
        return !navicon
    })
  }

  return (
    <div className='w-11/12 max-w-[1160px] py-4 mx-auto'>

      <nav className='flex  justify-between relative nav-bar'>

        <NavLink to='/'>
          <div className='flex logo'>
            <img src={image} className='h-[50px]  w-auto' alt='logo'></img>
            <p className='text-white text-xl font-bold flex items-center'>tudyNotations</p>
          </div>
        </NavLink>

        <div className='text-white absolute right-2 hidden'>

          <button onClick={switchHandler}>
            {!navicon ? (<FaBarsStaggered />) : (<RxCross1 />)}
          </button>
        </div>

        <ul className='flex gap-[3rem]  text-white items-center navitem'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>


        <ul className='flex gap-8 left-0 text-white logup'>

          {!isLogin &&
            <NavLink to='/sign-up'>
              <button className='justify-self-end bg-slate-800 p-2 px-[12px] rounded-[8px] border border-slate-700'>Login           </button>

            </NavLink>
          }

          {!isLogin &&
            <NavLink to='/login'>
              <button className='justify-self-end bg-slate-800 p-2 px-[12px] rounded-[8px] border border-slate-700'>Sign Up</button>
            </NavLink>
          }

          {isLogin &&
            <NavLink to='/'>
              <button onClick={loghandler} className='justify-self-end bg-slate-800 p-2 px-[12px] rounded-[8px] border border-slate-700'>Log-Out</button>
            </NavLink>
          }


          {isLogin &&
            <NavLink to='/dashboard'>
              <button className='justify-self-end bg-slate-800 p-2 px-[12px] rounded-[8px] border border-slate-700'>Dashboard</button>
            </NavLink>
          }

        </ul>

      </nav>
    </div>
  );
}

export default Nav;
