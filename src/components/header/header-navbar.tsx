import { toggleLogin } from './header-services';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import Sidebar from './sidebar';
import Search from '../search/search';
import {
  HeaderAccountTag,
  HeaderBtnTag,
  HeaderJoinTag,
  HeaderLogInBtnTag,
  HeaderLogInTag,
  HeaderNavbarTag,
  HeaderSearchTag,
  HeaderTextTag,
} from '../styled-components/header-styles/header-navbar-styles/header-styles';

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.authReducer);

  return (
    <HeaderNavbarTag>
      {!currentUser ? (
        <HeaderAccountTag>
          <HeaderTextTag>UNLIMITED TV SHOWS & MOVIES</HeaderTextTag>
          <HeaderJoinTag>
            <HeaderBtnTag onClick={() => toggleLogin(navigate)}>
              JOIN NOW
            </HeaderBtnTag>
          </HeaderJoinTag>
          <HeaderLogInTag>
            <HeaderLogInBtnTag onClick={() => toggleLogin(navigate)}>
              Log In
            </HeaderLogInBtnTag>
          </HeaderLogInTag>
        </HeaderAccountTag>
      ) : (
        <HeaderAccountTag>
          <HeaderSearchTag>
            <Search />
          </HeaderSearchTag>
          <Sidebar />
        </HeaderAccountTag>
      )}
    </HeaderNavbarTag>
  );
};

export default HeaderNavbar;
