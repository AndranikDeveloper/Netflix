import React, { useState } from 'react';
import './style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { logOut } from './header-services';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='sidebar-block'>
      <GiHamburgerMenu
        className='header-burger'
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <div className='sidebar-content'>
        <div
          className='sidebar-background'
          onClick={() => setIsOpen((prev) => !prev)}
        ></div>
        <div className={`sidebar ${isOpen ? 'isOpen' : ''}`}>
          <h1 className='sidebar-text'>Options</h1>
          <div className='close-btn'>
            <RxCross2
              className='btn-close'
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div className='sidebar-items'>
            <ul className='sidebar-ul'>
              <li className='sidebar-item'>Balance</li>
              <li className='sidebar-item'>My Films</li>
              <li className='sidebar-item' onClick={() => logOut(dispatch)}>
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
