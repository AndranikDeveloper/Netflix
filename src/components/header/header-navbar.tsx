import { toggleLogin } from './header-services';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import './style.css';
import Sidebar from './sidebar';
import Search from '../search/search';

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.authReducer);

  return (
    <div className='header-navbar'>
      {!currentUser ? (
        <div className='header-account'>
          <span className='header-text'>UNLIMITED TV SHOWS & MOVIES</span>
          <span className='header-join'>
            <button
              onClick={() => toggleLogin(navigate)}
              className='header-join-btn header-btn'
            >
              JOIN NOW
            </button>
          </span>
          <span className='header-log-in'>
            <button
              onClick={() => toggleLogin(navigate)}
              className='header-log-in-btn'
            >
              Log In
            </button>
          </span>
        </div>
      ) : (
        <div className='header-account'>
          <div className='header-search'>
            <Search />
          </div>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default HeaderNavbar;
