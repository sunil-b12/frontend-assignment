import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const nav =[
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Catagory',
            path: 'catagory'
        }
    ]
  return (
    <div>
        <nav className='flex gap-6'>
            {nav.map((items, i) =>{
                return <NavLink to={items.path} key={i}><h3>{items.label}</h3></NavLink>
            })}
        </nav>
    </div>
  )
}

export default Navbar