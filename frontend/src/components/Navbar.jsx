import React, { useContext, useState } from 'react'
import { NavLink ,Link} from 'react-router-dom'
// import {assest} from '../assets/assets'
import logo from '../assets/MY.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ShopContext } from '../context/ShopContext';

export const Navbar = () => {
  const[visible,setVisible]= useState(false);
  const{setShowSearch ,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);
  const logout=()=>{
      navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  }
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
     <Link to={'/'}>
         <img src={logo} className="w-20" alt="" />
        </Link> 
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className=" flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className=" flex flex-col items-center gap-1">
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className=" flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className=" flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <SearchIcon className='w-5 cursor-pointer' onClick={()=>{setShowSearch(true)}}/>
            <div className='group relative'>
                <PersonOutlineIcon onClick={()=>token?null:navigate('/login')} className='fw-5 cursor-pointer'/>

                    {/* Dropdown Menu */}
          {
            token&&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36  py-3 px-5 bg-slate-100 text-gray-500 rounded'><p></p>
            {/* <p className='cursor-pointer hover:text-black'>My Profile</p> */}
            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
            <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>
        </div>
          }
            </div>
            <Link to='/cart' className='relative'> 
                <ShoppingBagOutlinedIcon className='min-w-5'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <div className='sm:hidden'>
            <MenuIcon onClick={(()=>setVisible(true))} className='w-5 cursor-pointer'/>
            </div>
        </div>
        {/* SIdebar of smaller screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? ' w-full': 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <ArrowBackIosNewIcon className='h-4'/>
                    <p>Back</p>
                </div>
                <NavLink className='py-2 pl-6 border'  onClick={()=>setVisible(false) } to={'/'}>HOME</NavLink>
                <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false) } to={'/collection'}>COLLECTION</NavLink>
                <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false) } to={'/about'}>ABOUT</NavLink>
                <NavLink  className='py-2 pl-6 border' onClick={()=>setVisible(false) } to={'/contact'}>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}
