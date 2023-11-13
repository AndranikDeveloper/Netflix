import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type PropsOpen = {
  isOpen: boolean;
};

export const SideBarBlockTag = styled.div``;
export const SideBarContentTag = styled.div``;
export const SideBarTag = styled.div<PropsOpen>`
  padding: 0;
  margin: 0;
  position: fixed;
  width: 450px;
  top: -2px;
  z-index: 2;
  right: -50px;
  background-color: rgb(80, 79, 79);
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  transform: translateX(450px);
  transition: 1s;

  ${({ isOpen }) => isOpen && `transform: translateX(0)`}
`;
export const SideBarTextTag = styled.h1`
  margin-top: 20px;
  font-size: 30px;
`;

export const CloseBtnTag = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
  cursor: pointer;
`;

export const SideBarItems = styled.div``;
export const SideBarUlTag = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  font-size: 19px;
`;

export const HeaderBurgerTag = styled(GiHamburgerMenu)`
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: gray;
  }
`;

export const SideBarItemTag = styled(Link)`
  display: block;
  transition: 0.6s;
  cursor: pointer;
  border-top: 1px solid;
  width: 100px;
  text-decoration: none;
  color: white;
  &:hover {
    margin-right: 10px;
  }
`;

export const SideBarItemLiTag = styled.li`
  display: block;
  transition: 0.6s;
  cursor: pointer;
  border-top: 1px solid;
  width: 100px;
  text-decoration: none;
  &:hover {
    margin-right: 10px;
  }
`;
