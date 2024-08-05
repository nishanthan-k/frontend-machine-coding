import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbTriangleSquareCircle } from "react-icons/tb";
import './App.css';

export default function App() {
  const [open, setOpen] = useState(true);
  const menuItems = [
    "Profile",
    "Settings",
    "Dashboard",
    "Messages",
    "Notifications",
    "Friends",
    "Groups",
    "Events",
    "Help",
    "Logout"
  ];

  return (
    <div className={`${open ? 'sidebar sidebar-open' : 'sidebar sidebar-close'}`}>
      <div className={`${open ? 'header-open' : 'header-close'}`}>
        <FaRegUserCircle className='icon' size={25} />
        <div className='arrowContainer' onClick={() => setOpen(!open)}>
          {open ? <MdKeyboardDoubleArrowLeft className='icon' size={25} /> : <MdKeyboardDoubleArrowRight className='icon' size={25} />}
        </div>
      </div>
      
      <div className={`${open ? 'menu-open' : 'menu-close'}`}>
        {menuItems.map((ele, index) => (
          <div key={index}>
            {open && <TbTriangleSquareCircle />}
            <p>
              {open ? ele : ele.substring(0, 1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
