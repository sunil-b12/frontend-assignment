import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Toggle from './Toggle';

const Header = () => {
  return (
    <div className='top-0 left-0  z-30 w-[100%] bg-[#ebba52]'>
      <div className='container grid py-11 gap-5'>
        <NavLink to='/' className='grid gap-4 justify-items-center text-center'>
          <i className="fa-solid fa-bag-shopping fa-2xl"></i>
          <b className='text-xl'>Favourite Shop</b>
        </NavLink>
        <div className='flex gap-4 md:flex-wrap-reverse'>
          <div className='flex w-[80%] gap-4 items-center md:w-full'>
            <Toggle />
            <div className='lg:hidden'>
              <Menu>
                <MenuHandler>
                  <Button className='bg-[#30302e] rounded flex gap-3 items-center'>
                    <b className='text-sm font-medium'>All Catagory</b>
                    <i className="fa-sharp fa-solid fa-caret-down fa-xl"></i>
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Electronics</MenuItem>
                  <MenuItem>Jewelery</MenuItem>
                  <MenuItem>Men fashion</MenuItem>
                  <MenuItem>Women fashion</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className='w-[70%] lg:w-full'>
              <form className='flex'>
                <div className='w-full'>
                  <input type="text"
                    name='search'
                    placeholder='Search'
                    // value={formik.values.search}
                    // onChange={formik.handleChange}
                    className='text-black text-lg outline-none px-3 py-2 w-full rounded-l-lg' />
                </div>
                <button type='submit' className='bg-[#f26522] px-5 py-2 border-[#f26522] rounded-r-lg'>
                  <i className="fa-solid fa-magnifying-glass fa-lg text-white"></i>
                </button>
              </form>
            </div>
          </div>
          <div className='flex gap-6 items-center justify-between md:w-full'>
            <NavLink to='/cart' type="button">
              <i className="fa-solid fa-cart-shopping fa-2xl text-white"></i>
            </NavLink>
            <NavLink to='/user_login' className="text-md bg-white border py-2 px-6 font-bold hover:border-transparent rounded">
              Login
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header