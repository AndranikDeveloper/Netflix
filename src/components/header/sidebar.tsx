import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { logOut } from './header-services';
import { useDispatch } from 'react-redux';
import {
  CloseBtnTag,
  HeaderBurgerTag,
  SideBarBlockTag,
  SideBarContentTag,
  SideBarItemLiTag,
  SideBarItemTag,
  SideBarItems,
  SideBarTag,
  SideBarTextTag,
  SideBarUlTag,
} from '../styled-components/sidebar-styles/sidebar-style';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <SideBarBlockTag>
      <HeaderBurgerTag onClick={() => setIsOpen((prev) => !prev)} />
      <SideBarContentTag>
        <SideBarTag isOpen={isOpen}>
          <SideBarTextTag>Options</SideBarTextTag>
          <CloseBtnTag>
            <RxCross2 onClick={() => setIsOpen((prev) => !prev)} />
          </CloseBtnTag>
          <SideBarItems>
            <SideBarUlTag>
              <SideBarItemTag to={'/balance'}>Balance</SideBarItemTag>
              <SideBarItemTag to={'/my-films'}>My Films</SideBarItemTag>
              <SideBarItemLiTag onClick={() => logOut(dispatch)}>
                Log out
              </SideBarItemLiTag>
            </SideBarUlTag>
          </SideBarItems>
        </SideBarTag>
      </SideBarContentTag>
    </SideBarBlockTag>
  );
};

export default Sidebar;
