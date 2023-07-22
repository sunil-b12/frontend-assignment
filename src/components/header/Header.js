import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  Avatar

} from "@material-tailwind/react";
import Toggle from './Toggle';
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from "../../features/userSlice";
import { useFormik } from "formik";


const Header = () => {
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.userInfo);

  const userProfile = [
    {
      label: "My Profile",
      path: 'userprofile'
    },
    {
      label: "Sign Out",
      path: "logOut"

    },
  ];

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      resetForm()
      nav(`products/search/${val.search}`)

    }

  })

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
                  <MenuItem><NavLink to="/category/electronics">Electronics</NavLink></MenuItem>
                  <MenuItem><NavLink to="/category/men's clothing">Mans Clothing</NavLink></MenuItem>
                  <MenuItem><NavLink to="/category/jewelery">Jewelery</NavLink></MenuItem>
                  <MenuItem><NavLink to="/category/women's clothing">Womens Clothing"</NavLink></MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className='w-[70%] lg:w-full'>
              <form className='flex' onSubmit={formik.handleSubmit}>
                <div className='w-full'>
                  <input type="text"
                    name='search'
                    placeholder='Search'
                    value={formik.values.search}
                    onChange={formik.handleChange}
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
            {!user && <NavLink to='/user_login' className="text-md bg-white border py-2 px-6 font-bold hover:border-transparent rounded">
              Login
            </NavLink>}
            {user && <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="candice wu"
                    className="border border-blue-500 p-0.5"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  />

                </Button>
              </MenuHandler>
              <MenuList className="p-1">
                {userProfile.map(({ label, path }) => {
                  return (
                    <MenuItem
                      key={label}
                      onClick={() => {
                        closeMenu();
                        if (path === 'logOut') {
                          dispatch(clearData());
                        } else {
                          nav(`/${path}`)
                        }

                      }}
                      className="flex items-center gap-2 rounded">
                      <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                      >
                        {label}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header